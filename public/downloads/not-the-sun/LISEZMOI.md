# Le thermique par pièce — fichiers à télécharger

Accompagne l'article [Mon bureau est à 29 °C la nuit, et le soleil n'y est pour rien](https://blog.battistella.ovh/posts/not-the-sun).

| Fichier | Quoi | Où le mettre |
|---|---|---|
| `soleil-facade.yaml` | Un capteur par façade, `on` quand le soleil est réellement dessus | `config/packages/` |
| `blueprint-vitesse-selon-temperature.yaml` | Blueprint : traduit une température en une vitesse de 0 à 6 | `config/blueprints/automation/` |

Testés sur Home Assistant 2026.7. Le blueprint exige la version 2024.10 ou plus récente. Aucune dépendance externe : l'intégration `sun` suffit.

---

## Ce qu'il faut personnaliser

**`soleil-facade.yaml`** : trois nombres par façade, tous commentés dans le fichier.

- `normale` — la direction vers laquelle la façade regarde, en degrés depuis le nord. **Prenez-la sur le plan cadastral, pas à la boussole.** Une erreur de vingt degrés décale la fenêtre d'ensoleillement d'une bonne heure, et c'est exactement l'erreur que j'ai faite sur une chambre.
- `el_min` — la hauteur minimale du soleil pour qu'il entre vraiment. Montez-la s'il y a un bâtiment ou des arbres devant. Chez moi le soleil n'entre par la fenêtre est qu'à quatorze degrés, soit cinquante minutes après le lever théorique.
- `ouverture` — le demi-angle accepté, 65° par défaut.

**`blueprint-vitesse-selon-temperature.yaml`** : rien dans le fichier, tout se règle à la création de l'automatisation.

---

## Pourquoi la sortie est un nombre et pas une commande

Le blueprint écrit une consigne de 0 à 6 dans un helper. Il n'allume rien lui-même. Une seconde automatisation, à vous, lit ce nombre et envoie ce qu'il faut : une trame infrarouge, une commande Zigbee, un appel `fan.set_percentage`.

Cette séparation a deux avantages. Le matériel change sans toucher au barème. Et la consigne reste pilotable à la main quand le mode automatique est coupé, ce qui serait impossible si l'automatisation commandait directement l'appareil.

Chez moi la seconde automatisation envoie de l'infrarouge par une télécommande universelle. Trois lignes.

---

## Pour qui n'utilise pas Home Assistant

### Le soleil est-il sur cette façade ?

Deux tests, à faire avec la position du soleil que n'importe quelle bibliothèque d'astronomie vous donne à partir de votre latitude, longitude et de l'heure.

1. **L'écart d'azimut.** `écart = ((azimut_soleil − normale_façade + 540) mod 360) − 180`, puis tester `|écart| < 65`. Le `+540 … mod 360 … −180` ramène l'écart dans l'intervalle −180 à +180 : sans ça, une façade orientée au nord bascule en plein midi parce que 359° et 1° semblent éloignés de 358 degrés.
2. **La hauteur.** `élévation_soleil > el_min`. C'est ce test qui encode ce qu'il y a devant chez vous, et il ne s'obtient que par observation.

### La vitesse selon la température

Un barème à seuils croissants. Sous le premier seuil, 0. Entre le premier et le deuxième, 1. Et ainsi de suite. N'émettez la commande **que lorsque la valeur change**, sinon une variation d'un dixième de degré fait repartir une trame toutes les trente secondes.

Refusez d'agir quand le capteur est indisponible. Une valeur manquante lue comme zéro degré coupe le ventilateur en pleine canicule.

---

## Ce que ces capteurs ne disent pas

Ils disent que le soleil est sur la façade, pas que la pièce chauffe. Une pièce peut monter sans aucun soleil : dans mon bureau, une baie informatique dissipe plus de 300 W en continu et la pièce tient 29 °C en pleine nuit. Le volet n'y pouvait rien.

Croisez toujours le capteur solaire avec une vraie mesure de température avant d'agir. C'est le sujet de l'article.

---

## Licence

Faites-en ce que vous voulez. Une mention du blog fait plaisir, elle n'est pas due.

# Les annonces vocales — fichiers à télécharger

Accompagne l'article [J'ai enlevé les choix, et l'annonce a commencé à marcher](https://blog.battistella.ovh/posts/no-choices).

| Fichier | Quoi | Où le mettre |
|---|---|---|
| `annonce-vocale.yaml` | Script unique par lequel passent toutes les annonces parlées de la maison | `scripts.yaml` ou un package |

Testé sur Home Assistant 2026.7, avec des enceintes Sonos et une synthèse vocale Piper locale (intégration Wyoming).

---

## Ce qu'il faut personnaliser

Une seule chose : la table `cibles`, au milieu du fichier. Une clé par pièce, la valeur étant la liste des `media_player` correspondants. Le reste fonctionne tel quel.

Si vous n'utilisez pas Piper, remplacez `tts.piper` par votre moteur de synthèse.

---

## Pour qui n'utilise pas Home Assistant

La mécanique se porte sans difficulté. Trois règles, dans cet ordre.

1. **Heures calmes.** Si l'heure courante est hors de la plage autorisée et que l'appel ne force pas, ne rien faire. C'est la protection la plus utile du lot : sans elle, une alerte de portail à deux heures du matin réveille toute la maison.
2. **Résolution des cibles.** Traduire le nom de pièce en une liste d'enceintes, puis **filtrer celles qui ne répondent pas**. Une liste vide doit faire sortir la routine proprement, pas lever une erreur.
3. **Diffusion.** Envoyer le message aux cibles restantes, avec le volume du clip passé dans l'appel.

### Le point qui n'est pas évident

Sur les enceintes récentes, une annonce ne passe pas par le lecteur : elle se superpose au flux en cours par un canal séparé. Deux conséquences.

**Ne réglez pas le volume de l'enceinte avant l'annonce.** Cela change durablement le volume d'écoute et n'a aucun effet sur le clip. Le volume du clip se passe dans l'appel.

**L'état du lecteur ne bouge pas pendant l'annonce.** Ni l'état, ni le titre, ni la position. Vérifier qu'une annonce est passée en sondant cet état donne un faux négatif. Le seul témoin fiable est le journal du serveur.

---

## Et les messages eux-mêmes

Le script ne fait que diffuser. Ce qui décide qu'une annonce produit une action, c'est le texte. La grille de rédaction est dans l'article, mais elle tient en huit lignes :

1. Le prénom en tête.
2. Une seule action par annonce.
3. Un verbe à l'impératif et un objet concret.
4. Jamais de question.
5. Borner le temps quand la tâche est ouverte.
6. Séquencer explicitement quand il y a un ordre.
7. Aucun choix proposé.
8. Zéro logistique d'adulte dans un message adressé à un enfant.

---

## Licence

Faites-en ce que vous voulez. Une mention du blog fait plaisir, elle n'est pas due.

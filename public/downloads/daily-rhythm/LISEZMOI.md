# Le rythme de la journée — fichiers à télécharger

Accompagne l'article [J'ai changé le calendrier du soir trois fois en une semaine](https://blog.battistella.ovh/posts/daily-rhythm).

Deux fichiers, utilisables séparément.

| Fichier | Quoi | Où le mettre |
|---|---|---|
| `vacances-scolaires-fr.yaml` | Capteur des vacances scolaires françaises, alimenté par l'open data de l'Éducation nationale | `config/packages/` |
| `blueprint-coupure-prise.yaml` | Blueprint : couper une prise à une heure, la rallumer à une autre, sur les jours choisis | `config/blueprints/automation/` |

Testés sur Home Assistant 2026.7. Le blueprint exige la version 2024.10 ou plus récente.

---

## Ce qu'il faut personnaliser

**`vacances-scolaires-fr.yaml`** : une seule ligne. Remplacez `location="Bordeaux"` par votre académie. La liste complète des valeurs acceptées est en commentaire dans le fichier.

**`blueprint-coupure-prise.yaml`** : rien dans le fichier. Tout se règle depuis l'interface au moment de créer l'automatisation — la prise, les deux horaires, les jours, et des conditions supplémentaires facultatives.

---

## Pour qui n'utilise pas Home Assistant

La logique ne dépend d'aucun produit. Voici les deux briques décrites en clair, à porter sur Jeedom, openHAB, Node-RED, Domoticz ou un simple script.

### Brique 1 — Sommes-nous en vacances scolaires ?

**Entrée.** Une requête HTTP GET, toutes les six heures, sur :

```
https://data.education.gouv.fr/api/explore/v2.1/catalog/datasets/fr-en-calendrier-scolaire/records
```

Paramètres, en clair avant encodage :

- `limit` = `12`
- `order_by` = `start_date`
- `select` = `description,start_date,end_date`
- `where` = `location="VOTRE_ACADEMIE" and population!="Enseignants" and end_date>=date'AAAA-MM-JJTHH:MM:SSZ'`

La date dans le `where` est l'instant courant en UTC. Elle sert à ne récupérer que les périodes à venir ou en cours.

**Sortie.** Un tableau `results`, chaque entrée portant `description`, `start_date` et `end_date` au format ISO 8601.

**Calcul.** Un booléen vrai si l'instant courant tombe entre le `start_date` et le `end_date` d'au moins une entrée.

**Règle importante.** Si la requête n'a jamais abouti depuis le démarrage, le booléen doit être **indisponible**, pas faux. Une condition qui s'appuie dessus ne se déclenche alors pas, au lieu de se déclencher à tort. C'est la différence entre une routine qui s'abstient et une routine qui réveille un enfant pendant les vacances.

**Limite connue.** Le jeu de données comporte parfois des périodes de longueur nulle (`start_date` égal à `end_date`), par exemple le pont de l'Ascension certaines années. Un capteur de jours fériés couvre ce cas.

### Brique 2 — Couper puis rallumer une prise

**Déclencheurs.** Deux horaires fixes, par exemple 19 h 30 et 20 h 30.

**Conditions.** Le jour de la semaine appartient à une liste, et toutes les conditions supplémentaires sont vraies.

**Actions.** Éteindre si le déclencheur est le premier horaire, allumer si c'est le second.

**Le point de conception qui compte.** Les deux horaires doivent vivre dans **une seule** règle, donc partager **une seule** liste de jours. Séparés en deux règles, il suffit d'ajouter un jour à l'une et pas à l'autre pour obtenir une prise qui se coupe et ne se rallume jamais. C'est arrivé.

---

## Licence

Faites-en ce que vous voulez. Une mention du blog fait plaisir, elle n'est pas due.

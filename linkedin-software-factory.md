« Software factory » n'est pas le nouveau mot à la mode. C'est un mot de 1968, et il a déjà échoué plusieurs fois.

—

General Electric en 1968. Hitachi en 1969. Microsoft en 2004. Puis le DevOps.

Chaque génération d'usine logicielle a standardisé ce qui entoure le développeur : les outils, le procédé, les modèles, la chaîne de livraison.

Aucune n'a touché au poste où l'on écrit le code.

En 2026, c'est ce poste que les agents occupent.

—

Sur notre logiciel hospitalier, le milieu de la chaîne tourne déjà :

🤖 des agents écrivent le code et ses tests
🚦 la chaîne d'intégration les exécute
🔍 un agent relit, dans une session séparée
🔁 un lot refusé repart en correction, repasse les mêmes tests, puis une nouvelle revue

Depuis le 14 octobre, plus personne n'approuve nos fusions. Une machine vérifie une preuve : le commit relu, et une exécution verte de la chaîne.

En cinq semaines, plus de 600 fusions. Plus de neuf sur dix sans relecture par un autre humain.

Je ne brandis pas ce chiffre. Il décrit notre façon de travailler. Il ne dit rien de la qualité du code.

—

Ce qui reste humain tient en trois décisions :

⚖️ trancher, quand la revue refuse quatre fois de suite
🚨 passer outre, en urgence
🚀 publier

Trancher n'a rien de théorique. Mi-novembre, c'est arrivé une dizaine de fois en trois jours.

—

On me dit : vous comprenez moins le code que vous livrez.

C'est vrai. Et je pense que notre place n'est plus là.

Il y aura toujours un agent pour répondre au besoin technique. Notre responsabilité, c'est de comprendre le besoin métier et comment le résoudre.

Le reste n'a plus d'importance.

—

Tout n'est pas réglé. La preuve reste en partie déclarative. Les deux extrémités de la chaîne ne fonctionnent pas encore. Et ce sont les tests sur site qui diront si j'ai raison.

J'ai écrit le détail : l'histoire du mot, la chaîne dessinée poste par poste, et ce que la preuve ne prouve pas.

https://blog.battistella.ovh/posts/software-factory

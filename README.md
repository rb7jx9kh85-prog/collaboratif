# Collaboratif

Espace de travail complet, responsive et autonome, recréé à partir de l’inventaire fonctionnel de [Rylix Hub / Saas-dev](https://github.com/studiorylix-ui/Saas-dev).

## Utilisation

Ouvrir le site et entrer **1234**, puis choisir un profil local. Aucune inscription, base de données, variable d’environnement ou dépendance npm n’est nécessaire.

```sh
npm run dev
# http://localhost:3000
npm run check
npm run build
```

Node.js 22 ou supérieur pour les commandes locales. `dist/` contient les fichiers statiques à publier. Vercel détecte la configuration de `vercel.json` : build `npm run build`, sortie `dist`, framework Other, aucune variable à ajouter.

## Fonctionnalités

- Tableau de bord : indicateurs, avancement des projets, tâches et activité.
- Tâches : création, modification, suppression, liste, Kanban avec glisser-déposer et alternative par sélection, regroupement par projet, recherche, filtre étiquette, mes tâches.
- Détails des tâches : priorité, responsable, dates, projet, affaire, description, étiquettes, sous-tâches, commentaires et historique.
- Personnalisation : statuts nommés et colorés, type du statut, ordre, étiquettes, champs texte, nombre, date, liste ou case à cocher.
- Projets : responsable, dates, statut, couleur, avancement automatique, jalons datés, tâches liées, publications et historique. Création automatique d’un canal de discussion.
- Discussions : canaux, messages, réponses en fil, mentions et mise en forme légère.
- Fil d’équipe : publications, jusqu’à quatre images, réponses, citations, réactions, hashtags filtrables et liens vers tâches, projets ou affaires.
- Affaires : pipeline en cinq étapes, glisser-déposer, montant, valeur pondérée, client, responsable, prochaines actions, tâches et publications associées.
- Notes : édition avec sauvegarde automatique à chaque saisie, recherche, aperçu Markdown et suppression.
- Recherche globale (Cmd/Ctrl + K), activité, profils locaux, export/import JSON validé et synchronisation entre onglets du même navigateur.
- Manifest pour installation sur écran d’accueil, navigation mobile et notifications locales de test si compatibles.

## Fonctionnement sans backend

Les données sont conservées dans `localStorage`, et l’ouverture de l’espace dans `sessionStorage`. Les profils et exemples sont des données de démonstration. Ils ne représentent pas des utilisateurs connectés. Les données ne sont pas partagées entre appareils ou entre personnes ; les modifications d’un même navigateur sont propagées à ses autres onglets. Exportez le JSON pour sauvegarder ou transférer manuellement un espace. Le JSON peut inclure les images jointes.

Le code **1234** est une barrière locale de démonstration, visible dans le code source, et non une authentification sécurisée. Ne stockez pas de données confidentielles dans cette version. Les notifications push distantes et la collaboration multi-utilisateur nécessiteront une infrastructure ultérieure ; cette version ne prétend pas les fournir.

Markdown léger et sûr : titres, gras, code, blocs de code, sauts de ligne, mentions et hashtags. Le HTML utilisateur n’est jamais exécuté. Les images jointes acceptent PNG/JPEG/WebP/GIF (1,5 Mo par image). Les liens entre entités utilisent des identifiants internes.

## Source de référence

`reference/` conserve un instantané du dépôt d’inspiration au commit `c4aeb7cf953d40e1508ef51750dc23931e139ca9`. Il est conservé à titre de référence uniquement, exclu du build et du serveur. Aucune modification n’a été envoyée au dépôt d’origine. Le fichier d’instructions Next.js original est conservé sous `reference/NEXTJS-REFERENCE.md`, car l’application livrée n’utilise pas Next.js.

## Vérification

`npm run check` vérifie la syntaxe et les invariants de sauvegarde, la progression automatique, les suppressions en cascade, la conservation des tâches d’un projet supprimé et le rejet des imports invalides. Aucun paquet de test n’est nécessaire (Node Test Runner).

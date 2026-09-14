# Eternal Sonata — Hub

Portail central statique pour tous les outils de l'écosystème.

## Fichiers
- index.html
- styles.css
- app.js
- config.js
- manifest.webmanifest

## Brancher les outils
Dans `config.js`, renseigne simplement les URL :

```js
window.ETERNAL_SONATA = {
  links: {
    sonate: "https://...",
    pepiniere: "https://...",
    passerelle: "https://...",
    passeailes: "https://...",
    nova: "https://...",
    todum: "https://...",
    drive: "https://...",
    site: "https://...",
    discord: "https://...",
    charte: "https://...",
    bureau: "https://..."
  }
};
```

Les outils sans URL ouvrent une fenêtre « pas encore relié ».

## Direction artistique
La structure est pensée pour recevoir plus tard de vraies images :
- paysage terre → pont → ciel → étoiles ;
- cartes distinctes pour chaque mouvement ;
- glassmorphism léger ;
- décor CSS provisoire mais déjà fonctionnel.

Quand les illustrations finales seront prêtes, il suffira d'ajouter des images de fond ou des illustrations par carte sans toucher à l'architecture générale.

## Déploiement
Compatible GitHub Pages :
1. créer un repo ;
2. déposer ces fichiers à la racine ;
3. activer Settings > Pages ;
4. mettre l'URL en page d'accueil du navigateur si souhaité.

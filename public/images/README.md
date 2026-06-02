# Images à sauvegarder dans ce dossier

Place les fichiers dans `C:\Users\dmunger\custom website - Scent Bomb\public\images\` avec **exactement ces noms** (case-sensitive). Le site les charge automatiquement.

## ✅ Images que tu as déjà partagées (à sauvegarder)

Sauvegarde les 5 photos promotionnelles que tu m'as envoyées avec ces noms :

| Photo (tagline visible) | Nom du fichier à utiliser |
|---|---|
| BLACK CHERRY / Cerise Noire | `scent-black-cherry.webp` |
| CLEAN COTTON / Coton Frais | `scent-clean-cotton.webp` |
| HAWAIIAN BLUE / Bleu Hawaien | `scent-hawaiian-blue.webp` |
| MANGO TROPICAL / Mangue Tropicale | `scent-mango-tropical.webp` |
| PINE / Pin | `scent-pine.webp` |

**Taille recommandée :** 1200×1200 (carrée). Tes photos actuelles font déjà à peu près ça, parfait. Compresse-les à <200 KB chacune via https://squoosh.app pour la perf SEO.

## ⏳ Images manquantes (parfums sans photo pour l'instant)

Les cartes pour ces parfums afficheront un placeholder "Photo coming soon" en attendant :

- `scent-vanilla.webp`
- `scent-green-bomb.webp`
- `scent-black-bomb.webp`
- `scent-pomegranate.webp`

Format recommandé identique : carré 1200×1200, JPG, <200 KB, cohérent visuellement avec les 5 que tu as déjà (même style de fond/podium).

## 🌅 Hero (au-dessus du fold)

- `hero.png` — Bouteille Scent Bomb sur fond transparent. **Recommandé : 800×900 PNG**, fond transparent pour que le glow couleur passe derrière.
- `og-cover.webp` — Image partagée sur Facebook / LinkedIn / iMessage. **Recommandé : 1200×630 JPG**, logo + bouteille + texte "Scent Bomb Canada".

## SEO — alt text & title

Tous les `alt` et `title` sont déjà codés dans `src/pages/index.astro` (dans le tableau `scents`). Ils suivent ce format optimisé SEO :

- **alt** : description complète de l'image (lue par lecteurs d'écran + Google Images) — inclut nom du produit, format de la bouteille, et la fragrance.
- **title** : tooltip court qui apparaît au survol — format "Scent Bomb [Nom] Air Freshener Spray (1 oz) — [fragrance]"

Exemple pour Black Cherry :
```
alt:   "Scent Bomb Black Cherry concentrated air freshener spray, 1 oz cobalt blue bottle with red cherry label — sweet dark cherry fragrance"
title: "Scent Bomb Black Cherry Air Freshener Spray (1 oz) — Sweet Dark Cherry"
```

## ⚠️ Note importante sur tes photos actuelles

Tes 5 photos ont du texte intégré :
- "ONLY $4.99"
- "A TOP SELLER!"
- "SUPER LONG LASTING", "100% PURE FRAGRANCE OIL", "SATISFACTION GUARANTEED"

**Problèmes potentiels :**
1. Si tu changes ton prix Amazon, le $4.99 sur l'image devient incorrect
2. À petite taille (cards 300px de large), le texte sera difficile à lire
3. Les visuels sont parfaits pour des **annonces sociales/Amazon**, mais moins idéal comme thumbnails de catalogue

**Recommandation :** quand tu auras le temps, fais-toi faire (ou demande à un freelancer Fiverr ~$10) une version **sans texte** des photos — juste la bouteille sur un fond contextuel coloré. On les utilisera pour les cards, et on garde ces versions avec texte pour Amazon/Facebook ads.

En attendant, on utilise tes photos actuelles — elles font le job et donnent du caractère.

# Tutoriel : Créer ton cadeau QR Code pour Elsa 🎁

Suis ces étapes simples pour mettre en ligne les pages et imprimer les QR codes.

## Étape 1 : Activer les pages en ligne (GitHub Pages)

C'est la méthode la plus simple et 100% gratuite. J'ai déjà poussé les fichiers sur ton compte !

1.  Va sur ton dépôt : [https://github.com/theo2212/qr_code_elsa](https://github.com/theo2212/qr_code_elsa)
2.  Clique sur l'onglet **Settings** (Paramètres) tout en haut à droite.
3.  Dans la colonne de gauche, clique sur **Pages**.
4.  Sous "Build and deployment" > "Branch", sélectionne **main** (et laisse `/ (root)`) puis clique sur **Save**.
5.  **ATTENDS 2 MINUTES.** Un bandeau apparaîtra en haut avec ton URL : `https://theo2212.github.io/qr_code_elsa/`.

> [!IMPORTANT]
> L'erreur 404 disparaîtra dès que tu auras cliqué sur "Save" et attendu que GitHub finisse le déploiement (le petit point à côté du nom de ton dépôt passera au vert).

## Étape 2 : Générer les QR Codes

Maintenant que tes pages sont prêtes à être activées :

1.  Ouvre le fichier `generate_qr.py` (j'ai déjà mis ton lien dedans !).
2.  Ouvre un terminal (Invite de commande sur Windows).
3.  Lance le script en tapant :
    ```bash
    python generate_qr.py
    ```
4.  Un dossier `qr_codes` va apparaître avec tes 6 images PNG !

## Étape 3 : Impression et Préparation

1.  **Imprime les 6 images PNG.** Tu peux les copier-coller dans un fichier Word pour les imprimer à la bonne taille (environ 3x3 cm c'est parfait).
2.  **Repère bien qui est quoi** :
    - `qr_winner1`, `qr_winner2`, `qr_winner3` sont les cadeaux.
    - `qr_trap1`, `qr_trap2`, `qr_trap3` sont les gages.
3.  Découpe les petits papiers, plie-les bien, et mets-les dans la boîte pour Elsa !

---

### Astuce de test
Avant d'envoyer la boîte, scanne chaque QR code avec ton propre téléphone pour vérifier que la page s'affiche bien avec les confettis ou l'effet de gage !

# Tutoriel : Créer ton cadeau QR Code pour Elsa 🎁

Suis ces étapes simples pour mettre en ligne les pages et imprimer les QR codes.

## Étape 1 : Mettre les pages en ligne (GitHub Pages)

C'est la méthode la plus simple et 100% gratuite.

1.  **Crée un compte GitHub** (si tu n'en as pas) sur [github.com](https://github.com).
2.  **Crée un nouveau "Repository"** (dépôt) nommé `qr_code_elsa`.
3.  **Téléverse (Upload)** tous les fichiers `.html` et le fichier `style.css` dans ce dépôt.
4.  Va dans les **Settings** (Paramètres) de ton dépôt, puis dans l'onglet **Pages** (à gauche).
5.  Sous "Build and deployment", choisis la branche `main` et clique sur **Save**.
6.  Attends 1 minute. GitHub va te donner une URL du type `https://ton-pseudo.github.io/qr_code_elsa/`. **Copie cette URL.**

## Étape 2 : Générer les QR Codes

Maintenant que tes pages ont une adresse sur internet, il faut créer les images des QR codes.

1.  Ouvre le fichier `generate_qr.py` avec un bloc-notes ou ton éditeur de code.
2.  Remplace `VOTRE_URL_GITHUB_ICI/` par l'URL que GitHub t'a donnée à l'étape précédente (garde bien le `/` à la fin).
3.  Ouvre un terminal (Invite de commande sur Windows).
4.  Installe la bibliothèque nécessaire en tapant :
    ```bash
    pip install qrcode[pil]
    ```
5.  Lance le script en tapant :
    ```bash
    python generate_qr.py
    ```
6.  Un dossier `qr_codes` va apparaître avec tes 6 images PNG !

## Étape 3 : Impression et Préparation

1.  **Imprime les 6 images PNG.** Tu peux les copier-coller dans un fichier Word pour les imprimer à la bonne taille (environ 3x3 cm c'est parfait).
2.  **Repère bien qui est quoi** :
    - `qr_winner1`, `qr_winner2`, `qr_winner3` sont les cadeaux.
    - `qr_trap1`, `qr_trap2`, `qr_trap3` sont les gages.
3.  Découpe les petits papiers, plie-les bien, et mets-les dans la boîte pour Elsa !

---

### Astuce de test
Avant d'envoyer la boîte, scanne chaque QR code avec ton propre téléphone pour vérifier que la page s'affiche bien avec les confettis ou l'effet de gage !

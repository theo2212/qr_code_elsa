import qrcode
import os

# CONFIGURATION
# URL GitHub Pages calculée à partir de votre dépôt
BASE_URL = "https://theo2212.github.io/qr_code_elsa/"

pages = [
    "winner1.html", "winner2.html", "winner3.html",
    "trap1.html", "trap2.html", "trap3.html"
]

output_dir = "qr_codes"
if not os.path.exists(output_dir):
    os.makedirs(output_dir)

print(f"--- Génération des QR Codes ---")
print(f"Note : Assurez-vous d'avoir installé la bibliothèque qrcode : pip install qrcode[pil]")

for page in pages:
    url = BASE_URL + page
    
    # Création du QR Code
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )
    qr.add_data(url)
    qr.make(fit=True)

    img = qr.make_image(fill_color="black", back_color="white")
    
    # Nom du fichier de sortie
    file_name = f"qr_{page.split('.')[0]}.png"
    file_path = os.path.join(output_dir, file_name)
    
    img.save(file_path)
    print(f"Généré : {file_path} (Pointant vers {url})")

print(f"\nTerminé ! Retrouvez vos QR codes dans le dossier : {output_dir}")

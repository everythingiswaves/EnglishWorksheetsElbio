import fitz  # PyMuPDF
import os

# Directory containing the PDF files
pdf_dir = r"C:\Users\nicol\OneDrive\Documents\Elbio\Worksheets_website\worksheets"
# Directory to save the thumbnails
thumbnail_dir = r"C:\Users\nicol\OneDrive\Documents\Elbio\Worksheets_website\thumbnails"

# Create the thumbnail directory if it doesn't exist
os.makedirs(thumbnail_dir, exist_ok=True)

# List all PDF files in the directory
pdf_files = [f for f in os.listdir(pdf_dir) if f.endswith('.pdf')]

# Generate thumbnails for each PDF
for pdf_file in pdf_files:
    pdf_path = os.path.join(pdf_dir, pdf_file)
    doc = fitz.open(pdf_path)
    page = doc.load_page(0)  # Load the first page
    pix = page.get_pixmap()
    thumbnail_path = os.path.join(thumbnail_dir, f"{os.path.splitext(pdf_file)[0]}.png")
    pix.save(thumbnail_path)

print("Thumbnails generated successfully.")
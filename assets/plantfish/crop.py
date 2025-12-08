import os
from PIL import Image

def split_grid_into_images(image_path, output_folder="output_images"):
    # 1. Define the names in the order they appear in the grid
    # (Reading left to right, top to bottom)
    item_names = [
        "tilapia", 
        "crevette", 
        "lettuce", 
        "basil", 
        "spinach", 
        "mint", 
        "cilantro", 
        "parsley", 
        "green_onions"
    ]

    # 2. Check if image exists
    if not os.path.exists(image_path):
        print(f"Error: Could not find {image_path}. Make sure the file is in the right folder.")
        return

    # 3. Create output folder if it doesn't exist
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    try:
        # 4. Open the image
        img = Image.open(image_path)
        img_width, img_height = img.size

        # 5. Calculate the size of each individual cell
        # We assume a 3x3 grid
        cell_width = img_width // 3
        cell_height = img_height // 3

        print(f"Processing image ({img_width}x{img_height})...")

        count = 0
        # 6. Loop through rows and columns to crop
        for row in range(3):
            for col in range(3):
                if count >= len(item_names):
                    break

                # Calculate coordinates for the crop box (left, upper, right, lower)
                left = col * cell_width
                upper = row * cell_height
                right = left + cell_width
                lower = upper + cell_height
                
                # Perform the crop
                cropped_img = img.crop((left, upper, right, lower))
                
                # Save the file
                item_name = item_names[count]
                save_path = os.path.join(output_folder, f"{item_name}.png")
                cropped_img.save(save_path)
                
                print(f"Saved: {save_path}")
                count += 1
                
        print("\nSuccess! All images have been cropped and saved.")

    except Exception as e:
        print(f"An error occurred: {e}")

# --- EXECUTION ---
# Ensure your downloaded image is named 'grid.jpg'
split_grid_into_images("grid.png")
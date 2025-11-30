from PIL import Image
import os

# Load the image
base_dir = os.path.dirname(__file__)
img = Image.open(os.path.join(base_dir, "unnamed.jpg"))

# --- OPTIONAL: automatic detection of separators (not required if using fixed bounds) ---
# gray = arr.mean(axis=2)
# white_mask = gray > 250
# row_white = white_mask.mean(axis=1)
# col_white = white_mask.mean(axis=0)
# row_sep = np.where(row_white > 0.9)[0]
# col_sep = np.where(col_white > 0.9)[0]
# print(row_sep, col_sep)

# --- FIXED BOUNDS (verified from your image) ---
panels = {}

row_bounds = [(9, 332), (350, 670), (691, 1007)]
col_bounds = [(0, 502), (522, img.size[0] - 1)]

names = ["clear", "cloudy", "fog", "drizzle", "rain", "snow"]

idx = 0
for r in row_bounds:
    for c in col_bounds:
        crop = img.crop((c[0], r[0], c[1], r[1]))
        panels[names[idx]] = crop
        idx += 1

out_dir = base_dir
saved = []
for name, im in panels.items():
    out_path = os.path.join(out_dir, f"{name}.png")
    im.save(out_path, format="PNG")
    saved.append(out_path)

print("Saved:", ", ".join(saved))

import cv2
import numpy as np
import os

logo_region = (1156, 597, 57, 53)

input_dir = "frames/"
output_dir = "frames_cleaned_new/"
os.makedirs(output_dir, exist_ok=True)

for fname in sorted(os.listdir(input_dir)):
    if fname.endswith((".png", ".jpg", ".jpeg")):
        img = cv2.imread(os.path.join(input_dir, fname))
        x, y, w, h = logo_region

        # Copy patch from just LEFT of the logo
        patch = img[y:y+h, x-w-5:x-5]
        img[y:y+h, x:x+w] = patch

        cv2.imwrite(os.path.join(output_dir, fname), img)
        print(f"Processed: {fname}")

print("All done!")
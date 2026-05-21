import cv2
import numpy as np
import os

logo_region = (1156, 597, 57, 53)  # your exact coordinates

input_dir = "frames/"       # folder where your frames are
output_dir = "frames_cleaned/"
os.makedirs(output_dir, exist_ok=True)

for fname in sorted(os.listdir(input_dir)):
    if fname.endswith((".png", ".jpg", ".jpeg")):
        img = cv2.imread(os.path.join(input_dir, fname))
        x, y, w, h = logo_region
        mask = np.zeros(img.shape[:2], np.uint8)
        mask[y:y+h, x:x+w] = 255
        result = cv2.inpaint(img, mask, inpaintRadius=7, flags=cv2.INPAINT_TELEA)
        cv2.imwrite(os.path.join(output_dir, fname), result)
        print(f"Processed: {fname}")

print("All done!")
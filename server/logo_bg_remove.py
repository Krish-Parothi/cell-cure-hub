# save as: remove_bg.py
from PIL import Image
import numpy as np

img = Image.open("logo.jpeg").convert("RGBA")
data = np.array(img)

# Black pixels ko transparent banana
r, g, b, a = data[:,:,0], data[:,:,1], data[:,:,2], data[:,:,3]
black_areas = (r < 40) & (g < 40) & (b < 40)
data[black_areas] = [0, 0, 0, 0]

result = Image.fromarray(data)
result.save("logo.png")  # PNG mein save karo (transparency support)
print("Done! logo.png saved")
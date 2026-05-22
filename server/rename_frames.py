import os
import re

folder = "frames_cleaned"

def natural_sort(f):
    return [int(c) if c.isdigit() else c for c in re.split(r'(\d+)', f)]

files = sorted([f for f in os.listdir(folder) if f.lower().endswith('.jpg')], key=natural_sort)

# Temp rename
for i, old_name in enumerate(files, start=1):
    os.rename(
        os.path.join(folder, old_name),
        os.path.join(folder, f"temp_{i}.jpg")
    )

# Final rename with zero padding
temp_files = sorted([f for f in os.listdir(folder) if f.startswith("temp_")], key=natural_sort)
total = len(temp_files)

for i, temp_name in enumerate(temp_files, start=1):
    new_name = f"image{str(i).zfill(len(str(total)))}.jpg"  # 001, 002... ya 01, 02
    os.rename(
        os.path.join(folder, temp_name),
        os.path.join(folder, new_name)
    )
    print(f"✅ {new_name}")

print("\nDone!")
import cv2

img = cv2.imread("mobile_repair.png")

# Resize scale for fitting screen
scale = 0.4

display = cv2.resize(
    img,
    (int(img.shape[1] * scale), int(img.shape[0] * scale))
)

coords = []

def click_event(event, x, y, flags, param):
    global display

    if event == cv2.EVENT_LBUTTONDOWN:

        # Convert back to original image coordinates
        real_x = int(x / scale)
        real_y = int(y / scale)

        coords.append((real_x, real_y))

        # Draw click point
        cv2.circle(display, (x, y), 5, (0, 0, 255), -1)

        cv2.imshow("Select TOP-LEFT then BOTTOM-RIGHT", display)

        print(f"Clicked: x={real_x}, y={real_y}")

        if len(coords) == 2:
            x1, y1 = coords[0]
            x2, y2 = coords[1]

            w = x2 - x1
            h = y2 - y1

            print("\nCoordinates:")
            print(f"x={x1}")
            print(f"y={y1}")
            print(f"w={w}")
            print(f"h={h}")

            print("\nFFMPEG COMMAND:\n")

            print(
                f'ffmpeg -i repair.png -vf "delogo=x={x1}:y={y1}:w={w}:h={h}" output.png'
            )

cv2.namedWindow("Select TOP-LEFT then BOTTOM-RIGHT", cv2.WINDOW_NORMAL)

cv2.imshow("Select TOP-LEFT then BOTTOM-RIGHT", display)

cv2.setMouseCallback(
    "Select TOP-LEFT then BOTTOM-RIGHT",
    click_event
)

cv2.waitKey(0)

cv2.destroyAllWindows()
import cv2

img = cv2.imread("ezgif-frame-001.jpg")  # use any one frame
coords = []

def click_event(event, x, y, flags, param):
    if event == cv2.EVENT_LBUTTONDOWN:
        coords.append((x, y))
        print(f"Clicked: x={x}, y={y}")
        if len(coords) == 2:
            x1, y1 = coords[0]
            x2, y2 = coords[1]
            print(f"\nx={x1}, y={y1}, w={x2-x1}, h={y2-y1}")

cv2.imshow("Click TOP-LEFT then BOTTOM-RIGHT of logo", img)
cv2.setMouseCallback("Click TOP-LEFT then BOTTOM-RIGHT of logo", click_event)
cv2.waitKey(0)
cv2.destroyAllWindows()
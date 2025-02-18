import { images } from "./index.js";

function resizeImage(imagePath, widthReduction, callback) {
    const img = new Image();
    img.src = imagePath;
   
    img.onload = function () {
        const originalWidth = img.width;
        const originalHeight = img.height;

        const newWidth = originalWidth - widthReduction;
        if (newWidth <= 0) {
            console.error(`Width cannot be zero or negative for ${imagePath}`);
            return;
        }

        const aspectRatio = originalHeight / originalWidth;
        const newHeight = Math.round(newWidth * aspectRatio);

        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        canvas.width = newWidth;
        canvas.height = newHeight;

        ctx.drawImage(img, 0, 0, newWidth, newHeight);

        canvas.toBlob((blob) => {
            if (blob) {
                callback(blob);
            } else {
                console.error(`Failed to resize ${imagePath}`);
            }
        }, "image/jpeg");
    };

    img.onerror = function () {
        console.error(`Error loading image: ${imagePath}`);
    };
}

images.forEach((path) => {
    resizeImage(path, 20, (resizedBlob) => {
        console.log(`Resized image for ${path}:`, resizedBlob);
    });
});

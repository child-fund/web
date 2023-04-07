const copyImageByClipboardApi = async (imageUrl: string, scale: number) => {
  if (navigator.clipboard) {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const image = await createImageBitmap(blob);

      const canvas = document.createElement("canvas");
      canvas.width = image.width * scale;
      canvas.height = image.height * scale;

      const ctx = canvas.getContext("2d");
      ctx?.drawImage(image, 0, 0, canvas.width, canvas.height);

      canvas.toBlob(async (blob) => {
        if (!blob) {
          return;
        }
        const item = new ClipboardItem({ [blob.type]: blob });
        await navigator.clipboard.write([item]);
      }, "image/png");

      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  } else {
    return false;
  }
};

export default copyImageByClipboardApi;

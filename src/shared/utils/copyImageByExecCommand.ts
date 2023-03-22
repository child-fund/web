const copyImageByExecCommand = async (imageUrl: string): Promise<boolean> => {
  const img = new Image();
  img.src = imageUrl;

  const loadImage = new Promise<HTMLImageElement>((resolve) => {
    img.onload = () => resolve(img);
  });

  const loadedImage = await loadImage;

  const canvas = document.createElement("canvas");
  canvas.width = loadedImage.width;
  canvas.height = loadedImage.height;

  const ctx = canvas.getContext("2d");
  ctx?.drawImage(loadedImage, 0, 0);

  const range = document.createRange();
  range.selectNode(canvas);
  window.getSelection()?.removeAllRanges();
  window.getSelection()?.addRange(range);

  try {
    const successful = document.execCommand("copy");
    window.getSelection()?.removeAllRanges();

    return successful;
  } catch (e) {
    console.error(e);
    return false;
  }
};

export default copyImageByExecCommand;

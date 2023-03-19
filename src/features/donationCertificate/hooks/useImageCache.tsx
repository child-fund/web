import { useEffect, useState } from "react";

interface ImageCache {
  [key: string]: HTMLImageElement | null;
}

const useImageCache = (imageSources: { [key: string]: string }) => {
  const [imageCache, setImageCache] = useState<ImageCache>({});

  useEffect(() => {
    const cacheImages = async () => {
      const loadImage = async (src: string): Promise<HTMLImageElement> => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve(img);
          img.onerror = reject;
        });
      };

      const loadedImages = await Promise.all(
        Object.entries(imageSources).map(async ([key, src]) => {
          try {
            const img = await loadImage(src as string);
            return [key, img];
          } catch {
            return [key, null];
          }
        })
      );

      setImageCache(Object.fromEntries(loadedImages) as ImageCache);
    };

    cacheImages();
  }, []);

  return imageCache;
};

export default useImageCache;

export const createImageElement = (
  src: string,
  alt: string,
  imageCache: ImageCache
): React.ReactElement => {
  if (imageCache[src]) {
    const img = new Image();
    img.src = imageCache[src]!.src;
    img.alt = alt;
    return <img src={img.src} alt={alt} />;
  }
  return <img src={src} alt={alt} />;
};

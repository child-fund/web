import { useEffect, useRef, useState } from "react";

const useAirplaneSlider = () => {
  const scrollableContentRef = useRef<HTMLDivElement>(null);
  const customScrollbarThumbRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  useEffect(() => {
    const scrollableContent = scrollableContentRef.current;
    if (!scrollableContent) {
      return;
    }

    scrollableContent.addEventListener("scroll", handleScroll);

    return () => {
      scrollableContent.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const customScrollbarThumb = customScrollbarThumbRef.current;
    if (!customScrollbarThumb) {
      return;
    }
    customScrollbarThumb.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      customScrollbarThumb.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [dragging, startX]);

  const handleScroll = () => {
    const scrollableContent = scrollableContentRef.current;
    const customScrollbarThumb = customScrollbarThumbRef.current;

    if (!scrollableContent || !customScrollbarThumb) {
      return;
    }

    const scrollWidth =
      scrollableContent.scrollWidth - scrollableContent.clientWidth;
    const scrollPercent = scrollableContent.scrollLeft / scrollWidth;

    if (customScrollbarThumb.parentElement) {
      const customScrollbarWidth =
        customScrollbarThumb.parentElement.clientWidth;
      customScrollbarThumb.style.left = `${
        scrollPercent *
        (customScrollbarWidth - customScrollbarThumb.clientWidth)
      }px`;
    }
  };

  const handleMouseDown = (e: MouseEvent) => {
    setDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    const scrollableContent = scrollableContentRef.current;
    const customScrollbarThumb = customScrollbarThumbRef.current;

    if (!dragging) return;
    if (!scrollableContent || !customScrollbarThumb) {
      return;
    }

    const scrollWidth =
      scrollableContent.scrollWidth - scrollableContent.clientWidth;
    if (customScrollbarThumb.parentElement) {
      const customScrollbarWidth =
        customScrollbarThumb.parentElement.clientWidth;
      const delta = e.clientX - startX;
      setStartX(e.clientX);

      const maxThumbPos =
        customScrollbarWidth - customScrollbarThumb.clientWidth;
      const newThumbPos = customScrollbarThumb.offsetLeft + delta;

      if (newThumbPos >= 0 && newThumbPos <= maxThumbPos) {
        customScrollbarThumb.style.left = `${newThumbPos}px`;
        const scrollPercent = newThumbPos / maxThumbPos;
        scrollableContent.scrollLeft = scrollPercent * scrollWidth;
      }
    }
  };

  return {
    scrollableContentRef,
    customScrollbarThumbRef,
  };
};

export default useAirplaneSlider;

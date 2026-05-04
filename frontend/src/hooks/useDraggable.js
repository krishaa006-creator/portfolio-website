import { useState, useRef, useEffect, useCallback } from "react";

/**
 * Makes an element draggable via mouse and touch.
 * Tracks position as page-absolute coordinates (px from document top-left),
 * so elements can use `position: absolute` within a page-spanning overlay.
 *
 * @param {{ x: number, y: number }} initialPos  px from document top-left
 * @returns [pos, isDragging, handlers]
 */
export function useDraggable(initialPos = { x: 0, y: 0 }) {
  const [pos, setPos]               = useState(initialPos);
  const [isDragging, setIsDragging] = useState(false);
  const posRef   = useRef(pos);
  const dragging = useRef(false);
  const offset   = useRef({ x: 0, y: 0 });

  useEffect(() => { posRef.current = pos; }, [pos]);

  const pageXY = (clientX, clientY) => ({
    x: clientX + window.scrollX,
    y: clientY + window.scrollY,
  });

  const start = useCallback((clientX, clientY) => {
    const { x, y } = pageXY(clientX, clientY);
    dragging.current = true;
    setIsDragging(true);
    offset.current = { x: x - posRef.current.x, y: y - posRef.current.y };
  }, []);

  const move = useCallback((clientX, clientY) => {
    if (!dragging.current) return;
    const { x, y } = pageXY(clientX, clientY);
    setPos({ x: x - offset.current.x, y: y - offset.current.y });
  }, []);

  const stop = useCallback(() => {
    dragging.current = false;
    setIsDragging(false);
  }, []);

  useEffect(() => {
    const onMouseMove = (e) => move(e.clientX, e.clientY);
    const onTouchMove = (e) => {
      e.preventDefault();
      if (e.touches[0]) move(e.touches[0].clientX, e.touches[0].clientY);
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", stop);
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", stop);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", stop);
    };
  }, [move, stop]);

  const handlers = {
    onMouseDown:  (e) => { e.preventDefault(); start(e.clientX, e.clientY); },
    onTouchStart: (e) => { if (e.touches[0]) start(e.touches[0].clientX, e.touches[0].clientY); },
  };

  return [pos, isDragging, handlers];
}

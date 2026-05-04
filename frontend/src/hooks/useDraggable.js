import { useState, useRef, useEffect, useCallback } from "react";

/**
 * Makes an element draggable via mouse and touch.
 * Returns [pos, isDragging, handlers] where handlers
 * should be spread onto the element's onMouseDown / onTouchStart.
 *
 * @param {object} initialPos  - { x, y } in px from top-left of viewport
 */
export function useDraggable(initialPos = { x: 0, y: 0 }) {
  const [pos, setPos]           = useState(initialPos);
  const [isDragging, setIsDragging] = useState(false);
  const posRef    = useRef(pos);
  const dragging  = useRef(false);
  const offset    = useRef({ x: 0, y: 0 });

  // Keep ref in sync with state (avoids stale closures in listeners)
  useEffect(() => { posRef.current = pos; }, [pos]);

  const start = useCallback((clientX, clientY) => {
    dragging.current = true;
    setIsDragging(true);
    offset.current = {
      x: clientX - posRef.current.x,
      y: clientY - posRef.current.y,
    };
  }, []);

  const move = useCallback((clientX, clientY) => {
    if (!dragging.current) return;
    setPos({
      x: clientX - offset.current.x,
      y: clientY - offset.current.y,
    });
  }, []);

  const stop = useCallback(() => {
    dragging.current = false;
    setIsDragging(false);
  }, []);

  useEffect(() => {
    const onMouseMove = (e) => move(e.clientX, e.clientY);
    const onTouchMove = (e) => {
      if (e.touches[0]) move(e.touches[0].clientX, e.touches[0].clientY);
    };
    window.addEventListener("mousemove",  onMouseMove);
    window.addEventListener("mouseup",    stop);
    window.addEventListener("touchmove",  onTouchMove, { passive: false });
    window.addEventListener("touchend",   stop);
    return () => {
      window.removeEventListener("mousemove",  onMouseMove);
      window.removeEventListener("mouseup",    stop);
      window.removeEventListener("touchmove",  onTouchMove);
      window.removeEventListener("touchend",   stop);
    };
  }, [move, stop]);

  const handlers = {
    onMouseDown: (e) => {
      e.preventDefault();
      start(e.clientX, e.clientY);
    },
    onTouchStart: (e) => {
      if (e.touches[0]) start(e.touches[0].clientX, e.touches[0].clientY);
    },
  };

  return [pos, isDragging, handlers];
}

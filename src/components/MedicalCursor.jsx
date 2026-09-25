import React, { useEffect, useRef, useState } from "react";
import "./MedicalCursor.css";

export default function MedicalCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouching, setIsTouching] = useState(false);

  const targetPosition = useRef({ x: -100, y: -100 });
  const animationFrame = useRef(null);
  const touchTimeout = useRef(null);

  useEffect(() => {
    const isCoarsePointer = window.matchMedia(
      "(pointer: coarse)"
    ).matches;

    const handleMouseMove = (event) => {
      if (isCoarsePointer) return;

      const { clientX, clientY, target } = event;

      targetPosition.current = {
        x: clientX,
        y: clientY,
      };

      const interactiveElement =
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-cursor-hover]");

      setIsHovering(Boolean(interactiveElement));
    };

    const handleMouseDown = () => {
      if (isCoarsePointer) return;
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      if (isCoarsePointer) return;
      setIsClicking(false);
    };

    // -----------------------------
    // MOBILE TOUCH
    // -----------------------------

    const handleTouchStart = (event) => {
      if (!event.touches.length) return;

      const touch = event.touches[0];

      targetPosition.current = {
        x: touch.clientX,
        y: touch.clientY,
      };

      setPosition({
        x: touch.clientX,
        y: touch.clientY,
      });

      setIsTouching(true);
      setIsClicking(true);

      if (touchTimeout.current) {
        clearTimeout(touchTimeout.current);
      }
    };

    const handleTouchMove = (event) => {
      if (!event.touches.length) return;

      const touch = event.touches[0];

      targetPosition.current = {
        x: touch.clientX,
        y: touch.clientY,
      };

      setIsTouching(true);

      if (touchTimeout.current) {
        clearTimeout(touchTimeout.current);
      }
    };

    const handleTouchEnd = () => {
      setIsClicking(false);

      touchTimeout.current = setTimeout(() => {
        setIsTouching(false);
      }, 500);
    };

    // -----------------------------
    // SMOOTH FOLLOW
    // -----------------------------

    const smoothFollow = () => {
      setPosition((current) => {
        const target = targetPosition.current;

        return {
          x: current.x + (target.x - current.x) * 0.18,
          y: current.y + (target.y - current.y) * 0.18,
        };
      });

      animationFrame.current =
        requestAnimationFrame(smoothFollow);
    };

    window.addEventListener("mousemove", handleMouseMove);

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    window.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });

    window.addEventListener("touchmove", handleTouchMove, {
      passive: true,
    });

    window.addEventListener("touchend", handleTouchEnd, {
      passive: true,
    });

    animationFrame.current =
      requestAnimationFrame(smoothFollow);

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "mousedown",
        handleMouseDown
      );

      window.removeEventListener(
        "mouseup",
        handleMouseUp
      );

      window.removeEventListener(
        "touchstart",
        handleTouchStart
      );

      window.removeEventListener(
        "touchmove",
        handleTouchMove
      );

      window.removeEventListener(
        "touchend",
        handleTouchEnd
      );

      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }

      if (touchTimeout.current) {
        clearTimeout(touchTimeout.current);
      }
    };
  }, []);

  return (
    <div
      className={`medical-cursor
        ${isHovering ? "is-hovering" : ""}
        ${isClicking ? "is-clicking" : ""}
        ${isTouching ? "is-touching" : ""}
      `}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      {/* Touch / Mouse Trail */}
      <div className="medical-trail">
        <span className="trail-dot trail-dot-1" />
        <span className="trail-dot trail-dot-2" />
        <span className="trail-dot trail-dot-3" />
        <span className="trail-dot trail-dot-4" />
        <span className="trail-dot trail-dot-5" />
      </div>

      {/* ECG */}
      <div className="medical-ecg">
        <span className="ecg-line ecg-line-1" />
        <span className="ecg-line ecg-line-2" />
        <span className="ecg-line ecg-line-3" />
        <span className="ecg-line ecg-line-4" />
      </div>

      {/* Scanner */}
      <div className="medical-scanner">
        <div className="scanner-ring ring-1" />
        <div className="scanner-ring ring-2" />
        <div className="scanner-ring ring-3" />
        <div className="scanner-sweep" />
      </div>

      {/* Orbit */}
      <div className="medical-orbit">
        <span className="orbit-dot orbit-dot-1" />
        <span className="orbit-dot orbit-dot-2" />
        <span className="orbit-dot orbit-dot-3" />
      </div>

      {/* Medical Cross */}
      <div className="medical-cross">
        <span className="cross-horizontal" />
        <span className="cross-vertical" />
      </div>

      {/* Center */}
      <div className="medical-center">
        <span />
      </div>

      {/* Click / Touch Ripple */}
      {isClicking && <div className="medical-ripple" />}
    </div>
  );
}
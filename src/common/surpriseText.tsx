import clsx from "clsx";
import { CSSProperties, useEffect, useRef, useState } from "react";

interface Text {
  value: string;
  style?: CSSProperties;
  className?: string;
}

interface Props {
  text: Text;

  style?: CSSProperties;
  className?: string;

  btnClassName?: string;
  btnStyle?: CSSProperties;

  surpriseText: Text;

  dur?: number;
}

export default function SurpriseText({
  text,
  btnStyle,
  btnClassName,
  className,
  style,
  dur = 1000,
  surpriseText,
}: Props) {
  const timeout = useRef<number | null>(null);
  const [showSurprise, setShowSurprise] = useState(false);

  useEffect(() => {
    return () => {
      if (timeout.current != null) clearTimeout(timeout.current);
    };
  }, []);

  const handleOnClick = () => {
    if (timeout.current != null) {
      clearTimeout(timeout.current);
      timeout.current = null;
    }

    setShowSurprise(true);
    timeout.current = setTimeout(() => {
      setShowSurprise(false);
      timeout.current = null;
    }, dur);
  };

  const minWidth = Math.max(text.value.length, surpriseText.value.length);
  return (
    <button
      onClick={handleOnClick}
      className={clsx("relative overflow-hidden", btnClassName)}
      style={{
        minWidth: `${minWidth}ch`,
        ...btnStyle,
      }}
    >
      <div
        className={clsx(
          "absolute top-1/2 left-1/2 whitespace-nowrap",
          className,
          surpriseText.className
        )}
        style={{
          ...style,
          ...surpriseText.style,
          transform: `translate(-50%, ${showSurprise ? -50 : -200}%)`,
          transition: "transform 300ms ease",
        }}
      >
        {surpriseText.value}
      </div>
      <div
        className={clsx(className, text.className)}
        style={{
          ...style,
          ...text.style,
          transform: `translateY(${showSurprise ? 100 : 0}%)`,
          transition: "transform 300ms ease",
        }}
      >
        {text.value}
      </div>
    </button>
  );
}

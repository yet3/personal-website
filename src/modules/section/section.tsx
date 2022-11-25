import clsx from "clsx";
import { ReactNode, useEffect, useRef, useState } from "react";
import { WINDOW_CONTENT_DELAY } from "@constants";

interface Props {
  id?: string;
  title: string;
  description?: string;
  className?: string;
  children?: ReactNode;

  observerThreshold?: number;
}

export default function Section({
  id,
  className,
  title,
  description,
  children,
  observerThreshold = 0.1,
}: Props) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            observer.disconnect();

            setIsVisible(true);
          }
        });
      },
      { threshold: observerThreshold }
    );

    const timeout = setTimeout(() => {
      if (!sectionRef.current) return;
      observer.observe(sectionRef.current);
    }, WINDOW_CONTENT_DELAY * 0.75);

    return () => {
      if (timeout != null) clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={clsx(
        "w-full h-full flex flex-col items-center pb-24",
        className,
        isVisible && "show"
      )}
    >
      <header className={clsx(!description && "mb-6")}>
        <h2 className={clsx("relative flex items-end")}>
          <span
            className={clsx(
              isVisible && "motion-safe:animate-fade-in-left-s",
              "text-accent motion-safe:opacity-0 leading-none fluid-text-xl-2xl"
            )}
          >
            #
          </span>

          <div
            className={clsx(
              isVisible && "motion-safe:animate-fade-in-right-s",
              "motion-safe:opacity-0 leading-none fluid-text-2xl-3xl"
            )}
          >
            {title}
          </div>
        </h2>
      </header>
      {description && (
        <p
          className={clsx(
            isVisible && "motion-safe:animate-fade-in-bottom-m",
            "motion-safe:opacity-0 mt-2 mb-6 fluid-text-base-lg text-center min-w-[300px] w-10/12 max-w-lg"
          )}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}

      {children}
    </section>
  );
}

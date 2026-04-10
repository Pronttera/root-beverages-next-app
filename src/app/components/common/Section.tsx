import React from "react";

type SectionProps = {
  children: React.ReactNode | null;
  className?: string;
  style?: React.CSSProperties;
  disableContainer?: boolean;
  id?: string;
};

const Section: React.FC<SectionProps> = ({
  children = null,
  className = "",
  style,
  disableContainer = false,
  id,
}) => {
  if (disableContainer)
    return (
      <section
        id={id}
        className={`relative px-4 py-12 md:py-24 md:px-4 ${className}`}
        style={style}
      >
        {children}
      </section>
    );
  return (
    <section
      id={id}
      className={`relative px-4 py-12 md:py-24 md:px-4 ${className}`}
      style={style}
    >
      <div className="mx-auto max-w-[1900px]">{children}</div>
    </section>
  );
};

export default Section;

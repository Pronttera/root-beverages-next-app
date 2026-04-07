import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  style,
}) => {
  return (
    <div
      className={`mx-auto max-w-[1400px] px-0 md:px-4 ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default Container;

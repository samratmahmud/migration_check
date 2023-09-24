import React, {ReactNode} from "react";

interface AlternativeTextProps {
  children?: ReactNode;
}

function AlternativeText(props: AlternativeTextProps) {
  const {children} = props;

  return <p className="text-center text-md">{children}</p>;
}

export default AlternativeText;

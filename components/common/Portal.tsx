import { ReactNode, useEffect, useState } from "react";
import ReactDOM from "react-dom";

interface IPortalProps {
  children: ReactNode;
  selector?: string;
}

const Portal = ({ children, selector }: IPortalProps) => {
  const [element, setElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setElement(document.getElementById(selector));
  }, [selector]);

  if (!element) return null;

  return ReactDOM.createPortal(children, element);
};

export default Portal;

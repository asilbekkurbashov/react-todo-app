import { createPortal } from "react-dom";

interface IPorps {
  children: React.ReactNode;
  container: Element;
}

export function Portal({ children, container = document.body }: IPorps) {
  return createPortal(children, container);
}

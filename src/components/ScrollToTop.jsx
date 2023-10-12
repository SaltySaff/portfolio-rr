import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const htmlElement = document.documentElement;

    htmlElement.style.scrollBehaviour = "auto";
    console.log(htmlElement.style.backgroundColor)

    window.scrollTo(0, 0);

    htmlElement.style.scrollBehaviour = "smooth";
  }, [pathname]);

  return null;
}

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {

  useEffect(() => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
  }, []);

  return null;
}
"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"], a[href^="/#"]');
      
      if (anchor) {
        const href = anchor.getAttribute("href");
        if (!href) return;
        
        const hashIndex = href.indexOf("#");
        if (hashIndex === -1) return;
        
        const hash = href.substring(hashIndex);
        const targetElement = document.querySelector(hash);
        
        if (targetElement) {
          e.preventDefault();
          
          const headerOffset = 100;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });

          window.history.pushState(null, "", hash);
        }
      }
    };

    document.addEventListener("click", handleClick);
    
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}


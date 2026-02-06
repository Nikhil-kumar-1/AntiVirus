import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Smooth scroll ke liye behavior: "smooth" use kar sakte hain
    // Lekin page change par "instant" zyada professional lagta hai
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]); // Jab bhi pathname badlega, ye trigger hoga

  return null; // Ye component kuch render nahi karta, sirf logic handle karta hai
};

export default ScrollToTop;

import { useEffect, useState } from 'react';

export default function useDetectScroll(scrollRef) {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const element = scrollRef.current;

    if (!element) return;

    const handleScroll = () => {
      const currentScrollY = element.scrollTop;

      if (currentScrollY > lastScrollY + 5) {
        setShowNav(false);
      } else if (currentScrollY < lastScrollY - 5) {
        setShowNav(true);
      }

      setLastScrollY(currentScrollY);
    };

    element.addEventListener('scroll', handleScroll);

    return () => {
      element.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, scrollRef]);

  return { showNav };
}
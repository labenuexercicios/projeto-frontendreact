import React from 'react';
import Flecha from "../utils/flecha.png"

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  React.useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-8 right-3 z-10">
      {isVisible && (
        <img
          className="w-8 h-8 rounded-full cursor-pointer"
          src={Flecha}
          alt="Voltar ao Topo"
          title="Clique para voltar ao topo"
          onClick={scrollToTop}
        />
      )}
    </div>
  );
};

export default ScrollToTop;

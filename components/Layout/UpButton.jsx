import React, { useRef } from 'react';
import { useEffect } from 'react';
import { throttle } from '../../utils/helepers.js';

const UpButton = () => {
  const toTopBtnRef = useRef();

  useEffect(() => {
    const scrollHandler = () => {
      const toTopBtn = toTopBtnRef.current;
      toTopBtn.classList.toggle('active', window.scrollY >= 300);

      let pos = document.documentElement.scrollTop,
        scrollHeight = document.documentElement.scrollHeight,
        clientHeight = document.documentElement.clientHeight,
        calcHeight = scrollHeight - clientHeight,
        scrollValue = Math.round((pos * 100) / calcHeight) + 5;

      toTopBtn.style.background = `conic-gradient(var(--color-primary) ${scrollValue}%, #fff ${scrollValue}%)`;
    };

    window.addEventListener('scroll', throttle(scrollHandler));

    return () => window.removeEventListener('scroll', throttle(scrollHandler));
  }, []);

  const toTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  console.log('UP_BTN [Re-rendered..]');
  return (
    <div ref={toTopBtnRef} className="toTop" onClick={toTopHandler}>
      <div className="bg-white">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.6568 8.96219L16.2393 10.3731L12.9843 7.10285L12.9706 20.7079L10.9706 20.7059L10.9843 7.13806L7.75404 10.3532L6.34314 8.93572L12.0132 3.29211L17.6568 8.96219Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
};

export default React.memo(UpButton);

import React, { useRef } from 'react';
import { useEffect } from 'react';

const UpButton = () => {
  const toTopBtnRef = useRef();

  console.log('UP_BTN [Re-rendered..]');

  const throttle = (fn, delay = 100) => {
    let lastTime = 0;
    let id = 0;
    return (...args) => {
      const now = new Date().getTime();
      id++;
      if (now - lastTime < delay) return;
      lastTime = now;
      fn(...args);
    };
  };

  const scrollHandler = () => {
    const toTopBtn = toTopBtnRef.current;
    toTopBtn.classList.toggle('active', window.scrollY >= 300);
    let pos = document.documentElement.scrollTop,
      scrollHeight = document.documentElement.scrollHeight,
      clientHeight = document.documentElement.clientHeight,
      calcHeight = scrollHeight - clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    toTopBtn.style.background = `conic-gradient(var(--color-primary) ${
      scrollValue + 5
    }%, var(--color-primary-reverse) ${scrollValue + 5}%)`;
  };

  const toTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', throttle(scrollHandler));

    return () => {
      console.log('Cleaing');
      window.removeEventListener('scroll', throttle(scrollHandler));
    };
  }, []);

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

export const throttle = (fn, delay = 100) => {
    let lastTime = 0;
    return (...args) => {
        const now = new Date().getTime();
        if (now - lastTime < delay) return;
        lastTime = now;
        fn(...args);
    };
};
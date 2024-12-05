const smoothScroll = () => {
  try {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time * 0.8);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  } catch (error) {
    console.warn(error);
  }
};

export default smoothScroll;

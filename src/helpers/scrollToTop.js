export default () => {
  if (typeof window !== 'undefined') {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
};

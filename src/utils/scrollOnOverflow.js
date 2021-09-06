const scrollOnOverflow = () => {
  const el = document.getElementById('chat-feed');
  if (el) {
    el.scrollTop = el.scrollHeight;
  }
};
export default scrollOnOverflow;

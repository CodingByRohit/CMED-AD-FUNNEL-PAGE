// Basic starter JS

document.addEventListener('DOMContentLoaded', () => {
  console.log('script.js loaded');

  const btn = document.querySelector('.js-test-btn');
  if (btn) {
    btn.addEventListener('click', () => {
      alert('Button clicked!');
    });
  }
});

// theme.js
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('vibe-dark-mode') === 'true') {
    document.body.classList.add('dark-mode');
  }
});

document.getElementById('toggle-contrast').addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-mode');
  localStorage.setItem('vibe-dark-mode', isDark);
});

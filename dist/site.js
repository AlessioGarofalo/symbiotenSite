const toggle = document.querySelector('.menu-toggle');
const menu = document.getElementById('mobile-menu');
function closeMenu() { menu.hidden = true; toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', 'Open navigation'); }
toggle.addEventListener('click', () => { const opening = menu.hidden; menu.hidden = !opening; toggle.setAttribute('aria-expanded', String(opening)); toggle.setAttribute('aria-label', opening ? 'Close navigation' : 'Open navigation'); });
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !menu.hidden) { closeMenu(); toggle.focus(); } });
window.matchMedia('(min-width:701px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
document.getElementById('year').textContent = new Date().getFullYear();

const currentYear = new Date().getFullYear();
const show = document.getElementById('copyright').textContent = `© ${currentYear} 📍 Samuel Peter 📍 Nigeria`;
document.getElementById('last-modified').textContent = `Last modified: ${document.lastModified}`;
const bars = document.querySelector('#menu');
const navigation = document.querySelector('.toolbar');

bars.addEventListener('click', () => {
	navigation.classList.toggle('open');
	bars.classList.toggle('open');
});
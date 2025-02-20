const currentYear = new Date().getFullYear();
let bottom = document.getElementById('foot').textContent = `© ${currentYear} 📍 Samuel Peter 📍 Nigeria`;
document.getElementById('last-modified').textContent = `Last modified: ${document.lastModified}`;

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];


const productSelect = document.getElementById('products');
products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});
function incrementReviewCount() {
    let reviewCount = localStorage.getItem('reviewCount') || 0;
    reviewCount = parseInt(reviewCount) + 1;
    localStorage.setItem('reviewCount, reviewCount');
}
document.addEventListener('DOMContentLoaded', incrementReviewCount);

function dislayReview() {
    const reviewCountDisplay = document.getElementById('reviewCount');
    const reviewCount = localStorage.getItem('reviewCount') || 0;
    reviewCountDisplay.textContent = `Number of review completed ${reviewCount}`;
}


document.addEventListener('DOMContentLoaded', displayReview);


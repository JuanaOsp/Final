function saveProductDetails(button) {
    // Obtener los datos del producto
    const card = button.closest('.card');
    const imageSrc = card.querySelector('img').src;
    const title = card.querySelector('.card-title').innerText;
    const price = card.querySelector('.card-text').innerText;
    
    // Guardar en localStorage
    localStorage.setItem('productImage', imageSrc);
    localStorage.setItem('productTitle', title);
    localStorage.setItem('productPrice', price);
}
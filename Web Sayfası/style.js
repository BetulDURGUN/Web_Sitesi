function searchProducts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase(); // Arama çubuğundaki değeri al
    const products = document.querySelectorAll('.product-card'); // Tüm ürün kartlarını seç

    products.forEach(product => {
        const productName = product.getAttribute('data-name').toLowerCase(); // Ürünün adını al

        // Arama inputu ile ürün adını karşılaştır
        if (productName.includes(searchInput)) {
            product.style.display = 'block'; // Eşleşen ürünleri göster
        } else {
            product.style.display = 'none'; // Eşleşmeyen ürünleri gizle
        }
    });
}
//sayfa yüklemesinde resim boyutlarını kontrol edip ayarlama yapıldı
window.addEventListener('load', function() {
    const productImages = document.querySelectorAll('.product-card img');
    productImages.forEach(image => {
        image.style.width = '100%';  // Sabit genişlik
        image.style.height = '350px';  // Sabit yükseklik
        image.style.objectFit = 'cover';  // Resmi kapsayıcıya sığdır
        image.style.objectPosition = 'center';  // Resmin ortasına hizala
    });
});

//slider bölümü için
const indicator = document.getElementById('carousel-indicator');
document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('myButton');
    console.log(button);
});

document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("gallery");
    const modalImage = document.getElementById("modalImage");
    const imageModal = new bootstrap.Modal(document.getElementById("imageModal"));

    // Örnek resim URL'leri
    const images = [
        "../resim-galerisi/images/manzara1.jpg",
        "../resim-galerisi/images/manzara2.jpg",
        "../resim-galerisi/images/manzara3.jpg",
        "../resim-galerisi/images/manzara4.jpg",
        "../resim-galerisi/images/manzara5.jpg",
        "../resim-galerisi/images/manzara6.jpg",
    ];

    // Resimleri galeriye ekle
    images.forEach((src, index) => {
        const col = document.createElement("div");
        col.className = "col-md-4 col-sm-6 gallery-item";
        col.innerHTML = `<img src="${src}" alt="Resim ${index + 1}" class="img-fluid">`;
        gallery.appendChild(col);

        col.addEventListener("click", function () {
            modalImage.src = src;
            imageModal.show();
        });
    });
});

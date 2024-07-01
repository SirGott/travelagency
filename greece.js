document.addEventListener('DOMContentLoaded', function() {
    const images = [
        'greece1.jpeg',
        'greece2.jpeg',
        'greece3.jpeg',
        'greece4.jpeg',
        'greece5.jpeg'
    ];
    let currentIndex = 0;
    const galleryImg = document.getElementById('gallery-img');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    function showImage(index) {
        galleryImg.src = images[index];
    }
    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        showImage(currentIndex);
    });
    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        showImage(currentIndex);
    });

    showImage(currentIndex);
});

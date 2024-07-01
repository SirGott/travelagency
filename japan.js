document.addEventListener('DOMContentLoaded', function() {
    const images = [
        'japan1.jpeg',
        'japan2.jpeg',
        'japan3.jpeg',
        'japan4.jpeg',
        'japan5.jpeg'
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
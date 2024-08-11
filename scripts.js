document.querySelectorAll('.video-item').forEach(item => {
    item.addEventListener('click', function() {
        const videoPopup = document.getElementById('video-popup');
        const videoSource = this.getAttribute('data-video-src');
        videoPopup.style.display = 'flex';
        videoPopup.querySelector('video source').setAttribute('src', videoSource);
        videoPopup.querySelector('video').load();
    });
});

document.getElementById('video-popup').addEventListener('click', function() {
    this.style.display = 'none';
});

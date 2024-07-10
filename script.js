document.addEventListener('DOMContentLoaded', function () {
    const messageBox = document.getElementById('messageBox');

    messageBox.addEventListener('mouseover', function () {
        messageBox.style.transform = 'scale(1.05)';
        messageBox.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    });

    messageBox.addEventListener('mouseout', function () {
        messageBox.style.transform = 'scale(1)';
        messageBox.style.boxShadow = 'none';
    });
});
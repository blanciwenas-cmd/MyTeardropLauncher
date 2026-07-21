// Interactive JavaScript for MyTeardrop Launcher UNOFFICIAL
document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.getElementById('downloadBtn');

    if (downloadBtn) {
        downloadBtn.addEventListener('click', (event) => {
            const currentHref = downloadBtn.getAttribute('href');
            
            // Check if link hasn't been set yet
            if (currentHref === '#' || currentHref === 'YOUR_MEGA_LINK_HERE') {
                event.preventDefault();
                alert('The MEGA download link is not configured yet! Please edit index.html and replace YOUR_MEGA_LINK_HERE with your link.');
            }
        });
    }

    console.log('MyTeardrop Launcher UNOFFICIAL website loaded successfully.');
});

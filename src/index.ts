function updateContent() {
    const contentDiv = document.getElementById('content');
    if (contentDiv) {
        contentDiv.innerHTML = `Current time: ${new Date().toLocaleTimeString()}`;
    }
}

// Update content every second
updateContent();
setInterval(updateContent, 1000);
document.querySelectorAll('.node').forEach(node => {
    node.addEventListener('click', () => {
        alert(`You clicked on ${node.textContent}`);
        // Or navigate to another page
        // window.location.href = 'path-to-destination.html';
    });
});

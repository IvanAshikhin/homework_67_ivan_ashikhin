let container = document.getElementById('container');
let addButton = document.getElementById('add-item-btn');
addButton.addEventListener('click', () => {
    let notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = "Это любой текст"
    let closeButton = document.createElement('button');
    closeButton.innerText = 'Закрыть';
    notification.appendChild(closeButton);
    closeButton.addEventListener('click', () => {
        notification.remove();
    });
    container.appendChild(notification);
    setTimeout(() => {
        notification.remove();
    }, 5000);
});
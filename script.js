document.getElementById('attendance-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    if (name) {
        const list = document.getElementById('list');
        const listItem = document.createElement('li');
        const currentDate = new Date();
        const timeString = currentDate.toLocaleString();
        listItem.textContent = `${name} - ${timeString}`;
        list.appendChild(listItem);
        document.getElementById('name').value = '';
    }
});

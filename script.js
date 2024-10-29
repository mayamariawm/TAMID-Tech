document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('timeButton').addEventListener('click', printTime);
});

function printTime() {
    const currentTime = new Date().toLocaleTimeString();
    alert('Current Time: ' + currentTime);
}
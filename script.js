document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById('clickMe');
    if (btn) {
        btn.addEventListener('click', function() {
            alert('Thanks for clicking!');
        });
    }
});

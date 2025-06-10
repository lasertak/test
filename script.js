document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById('clickMe');
    if (btn) {
        btn.addEventListener('click', function() {
            alert('Thanks for clicking!');
        });
    }

    var calcBtn = document.getElementById('calcBtn');
    if (calcBtn) {
        calcBtn.addEventListener('click', function() {
            var amount = parseFloat(document.getElementById('amount').value) || 0;
            var rate = parseFloat(document.getElementById('rate').value) || 0;
            var months = parseInt(document.getElementById('months').value) || 0;
            var resultEl = document.getElementById('result');
            var monthlyRate = rate / 100 / 12;
            var finalAmount = amount * Math.pow(1 + monthlyRate, months);
            var profit = finalAmount - amount;
            resultEl.classList.remove('show');
            resultEl.textContent = 'Estimated Profit: ' + profit.toFixed(2);
            setTimeout(function(){
                resultEl.classList.add('show');
            }, 10);
        });
    }
});

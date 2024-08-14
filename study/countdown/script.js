// 倒计时函数
function startCountdown(containerId, eventDate) {
    var countdownElement = document.getElementById(containerId);

    function updateCountdown() {
        var now = new Date();
        var distance = eventDate - now;

        // 计算时间差
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // 显示倒计时
        countdownElement.textContent = days + '天 ' + hours + '时 ' + minutes + '分 ' + seconds + '秒 ';

        // 如果倒计时结束，显示一条消息
        if (distance < 0) {
            clearInterval(countdownInterval);
            countdownElement.textContent = '事件已发生!';
        }
    }

    // 每秒更新一次倒计时
    var countdownInterval = setInterval(updateCountdown, 1000);

    // 初始显示倒计时
    updateCountdown();
}

// 设置并启动两个倒计时
var eventDate4 = new Date("2024-08-18T11:00:00");
var eventDate5 = new Date("2025-06-07T08:00:00");
var eventDate6 = new Date("2025-01-07T08:00:00");
startCountdown('countdown4', eventDate4);
startCountdown('countdown5', eventDate5);
startCountdown('countdown6', eventDate6);
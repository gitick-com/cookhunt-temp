document.addEventListener('DOMContentLoaded', function () {
    // Set the launch date in IST (Indian Standard Time)
    const launchDate = new Date('December 07, 2024 20:00:00 GMT+0530').getTime();

    // Update the countdown every second
    const timer = setInterval(updateCountdown, 1000);

    function updateCountdown() {
        const currentDate = new Date().getTime();
        const timeDifference = launchDate - currentDate;

        if (timeDifference <= 0) {
            // If launch date has passed, display a message
            clearInterval(timer);
            // Remvove the heading
            document.querySelector('#heading').remove();
            document.getElementById('timer').innerHTML = "CookHunt is now live!";
        } else {
            // Calculate days, hours, minutes, and seconds
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            // Display the countdown
            document.getElementById('timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
    }
});

const currentStatus = document.getElementById("status");

function updateStatus() {
    const now = new Date();

    const openingHour = new Date();
    openingHour.setHours(7, 0, 0);

    const closingHour = new Date();
    closingHour.setHours(23, 0, 0);

    let diff; // diff == 시간 차, 단위는 ms

    if (now < openingHour) {
        diff = openingHour.getTime() - now.getTime();

        let h = Math.floor((diff / (1000 * 60 * 60)) % 24); // ms -> h로 바꿈: diff / (1000ms * 60s * 60m)  // %24: 24로 나눈 니머지를 남김으로써 >시간<에 해당하는 숫자만 남김
        let m = Math.floor((diff / (1000 * 60)) % 60); // ms -> m으로 바꿈: 1000ms * 60s   // %60: 60으로 나눈 니머지를 남김으로써 >분<에 해당하는 숫자만 남김
        let s = Math.floor((diff / 1000) % 60);  // ms -> s로 바꿈: diff / 1000   // %60: 60으로 나눈 니머지를 남김으로써 >초<에 해당하는 숫자만 남김

        currentStatus.innerText = "금일 오픈까지 남은 시간: " + h + ":" + m + ":" + s;
    
    } else if (now >= openingHour && now < closingHour) {
        diff = closingHour.getTime() - now.getTime();

        let h = Math.floor((diff / (1000 * 60 * 60)) % 24);
        let m = Math.floor((diff / (1000 * 60)) % 60);
        let s = Math.floor((diff / 1000) % 60);

        currentStatus.innerText = "금일 마감까지 남은 시간: " + h + ":" + m + ":" + s;

    } else {
        currentStatus.innerText = "금일 마감";
    }
}

updateStatus();
setInterval(updateStatus, 1000);
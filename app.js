//DOM API 
const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

//카운트 다운 구현 부분
const dischargeDay = new Date('2025/11/27/12:00:00');

function intervalTimer(endTime, timeout) {
	const timerId = setInterval(() => {
		const now = Date.now();
		const end = endTime;
		const timeLeft = end - now;
		if (timeLeft <= 0 ){
		console.log('축하해 전역했어!')
		clearInterval(timerId);
		} else {
			const remainingDays = Math.ceil(timeLeft / (1000 * 60 * 60 * 24));
			const remainingHours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			const remainingMinutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
			const remainingSeconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
			days.innerText = remainingDays;
			hours.innerText = remainingHours;
			minutes.innerText = remainingMinutes;
			seconds.innerText = remainingSeconds;
		}
	}, timeout);
}

intervalTimer(dischargeDay, 100);
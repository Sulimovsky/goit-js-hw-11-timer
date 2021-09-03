class CountdownTimer {
    constructor({ date, selector } ) {
        this.refs = {
            days: document.querySelector('[data-value="days"]'),
            hours: document.querySelector('[data-value="hours"]'),
            mins: document.querySelector('[data-value="mins"]'),
            secs: document.querySelector('[data-value="secs"]'),
            value: document.querySelectorAll('.value'),
            timer: document.querySelector(selector),
        };
        this.timerId = null;
        this.date = date;
    }

    calcTimer = () => {
        const currentTime = new Date();
        const time = this.date - currentTime;
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((time % (1000 * 60)) / 1000);

        this.refs.days.textContent = days < 10 ? '0' + days : days;
        this.refs.hours.textContent = hours < 10 ? '0' + hours : hours;
        this.refs.mins.textContent = mins < 10 ? '0' + mins : mins;
        this.refs.secs.textContent = secs < 10 ? '0' + secs : secs;

        this.timerStop(time);
    }

    timerStart = () => {
        this.timerId = setInterval(this.calcTimer, 1000);
    }

    timerStop = (time) => {
        if (time <= 0) {
            clearInterval(this.timerId)

            this.refs.value.forEach(el => {
                el.textContent = 'Finish'
            });
        }
    }
} 

const timer = new CountdownTimer({
    date: new Date('September 11, 2021 15:00:00'),
    selector: "#timer-1",
});

timer.timerStart();
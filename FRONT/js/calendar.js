const calendar = {
    currentMonth: new Date().getMonth(),
    currentYear: new Date().getFullYear(),
    events: [
        { date: new Date(2024, 6, 22), title: "Evento 1" },
        { date: new Date(2024, 6, 23), title: "Evento 2" },
        { date: new Date(2024, 6, 25), title: "Día de Dulces" }
    ],
    init: function() {
        this.renderCalendar();
        document.getElementById('prev-month').addEventListener('click', this.prevMonth.bind(this));
        document.getElementById('next-month').addEventListener('click', this.nextMonth.bind(this));
    },
    renderCalendar: function() {
        const monthYear = document.getElementById('month-year');
        const dates = document.getElementById('dates');
        dates.innerHTML = '';

        const firstDay = new Date(this.currentYear, this.currentMonth, 1).getDay();
        const lastDate = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();

        monthYear.textContent = `${new Date(this.currentYear, this.currentMonth).toLocaleString('default', { month: 'long' })} ${this.currentYear}`;

        for (let i = 0; i < firstDay; i++) {
            dates.innerHTML += '<div class="date empty"></div>';
        }

        for (let i = 1; i <= lastDate; i++) {
            const date = new Date(this.currentYear, this.currentMonth, i);
            const event = this.events.find(e => e.date.toDateString() === date.toDateString());
            dates.innerHTML += `
                <div class="date ${event ? 'event' : ''}" title="${event ? event.title : ''}">
                    ${i}
                    ${event ? `<span class="event-title">${event.title}</span>` : ''}
                </div>`;
        }
    },
    prevMonth: function() {
        this.currentMonth--;
        if (this.currentMonth < 0) {
            this.currentMonth = 11;
            this.currentYear--;
        }
        this.renderCalendar();
    },
    nextMonth: function() {
        this.currentMonth++;
        if (this.currentMonth > 11) {
            this.currentMonth = 0;
            this.currentYear++;
        }
        this.renderCalendar();
    }
};

document.addEventListener('DOMContentLoaded', () => calendar.init());

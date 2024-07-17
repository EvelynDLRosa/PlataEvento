document.addEventListener("DOMContentLoaded", function() {
    $('#calendar').fullCalendar({
        events: [
            {
                title: 'Evento 1',
                start: '2023-07-01'
            },
            {
                title: 'Evento 2',
                start: '2023-07-05'
            }
        ]
    });
});

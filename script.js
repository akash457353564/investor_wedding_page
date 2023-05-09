
const calendar_node = document.querySelector('.calender')

const calendar = new FullCalendar.Calendar(calendar_node, {
    initialView: 'dayGridMonth',
    headerToolbar: {
        left: 'prev',
        center: 'title',
        right: 'next'
    },
    events: [
        {
            title: 'Booked',
            date: '2023-05-09',
            backgroundColor: '#FF6296'
        },
        {
            title: 'Booked',
            date: '2023-05-10',
            backgroundColor: '#FF6296'
        },
        {
            title: 'Booked',
            date: '2023-05-13',
            backgroundColor: '#FF6296'
        }
    ]
  });
  calendar.render();
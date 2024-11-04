

const ctx = document.getElementById('Bar');

  const barChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['STUDENTS', 'TEACHERS', 'STAFFS'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 15],
        borderWidth: 0.5
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
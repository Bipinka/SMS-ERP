

const ctx = document.getElementById('Bar');

let barCharts = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['students', 'staffs','teachers'],
    datasets: [{
      label: 'ATTENDENCE OF TODAY',
      data: [12, 19,15 ],
      borderWidth: 1,
      radius:10,
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


const ctx = document.getElementById("Bar");

const barChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ['ATTANDENCE'],
    datasets: [
      {
        label: "students",
        data: [12],
        borderWidth: 0.5,
        borderRadius: 10,
        backgroundColor: ["#64b5f6"],
        // options: {
        //   animation: {
        //     onComplete: () => {
        //       delayed = true;
        //     },
        //     delay: (context) => {
        //       let delay = 1;
        //       if (
        //         context.type === "data" &&
        //         context.mode === "default" &&
        //         !delayed
        //       ) {
        //         delay = context.dataIndex * 300 + context.datasetIndex * 100;
        //       }
        //       return delay;
        //     },
        //   },
        // },
      },
       {
        label:'teachers',
        data:[16],
        borderWidth:0.5,
        borderRadius: 10,
        backgroundColor:["#a4161a"],
       },
       {
        label:"staffs",
        data:[14],
        borderWidth:0.5,
        borderRadius: 10,
        backgroundColor:["#788bff"],
       }
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
  
});

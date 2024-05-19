var chart_config = {
    type: 'bar',
    data: {
        labels: ['One', 'Two', 'Three'],
        datasets: [
            {
                label: 'Dataset 1',
                backgroundColor: '#848484',
                data: [4, 2, 6]
            },
            {
                label: 'Dataset 2',
                backgroundColor: '#848484',
                data: [1, 6, 3]
            },
            {
                label: 'Dataset 3',
                backgroundColor: '#848484',
                data: [7, 5, 2]
            }
        ]
    },
    options: {
        title: {
            display: false,
            text: 'Stacked Bars'
        },
        tooltips: {
            mode: 'label'
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [
                {
                    stacked: true
                }
            ],
            yAxes: [
                {
                    stacked: true
                }
            ]
        },
        onClick: handleClick
    }
};
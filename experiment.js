// Create the timeline array that holds the experiment flow
let timeline = []

// N-Back Stimuli, 9 in Total
const stimuli = [
	{
		stimulus: render_grid(1),
		data: {
			numeric_value: 1,
			test_part: 'n-back'
		}
	},
	{
		stimulus: render_grid(2),
		data: {
			numeric_value: 2,
			test_part: 'n-back'
		}
	},
	{
		stimulus: render_grid(3),
		data: {
			numeric_value: 3,
			test_part: 'n-back'
		}
	},
	{
		stimulus: render_grid(4),
		data: {
			numeric_value: 4,
			test_part: 'n-back'
		}
	},
	{
		stimulus: render_grid(5),
		data: {
			numeric_value: 5,
			test_part: 'n-back'
		}
	},
	{
		stimulus: render_grid(6),
		data: {
			numeric_value: 6,
			test_part: 'n-back'
		}
	},
	{
		stimulus: render_grid(7),
		data: {
			numeric_value: 7,
			test_part: 'n-back'
		}
	},
	{
		stimulus: render_grid(8),
		data: {
			numeric_value: 8,
			test_part: 'n-back'
		}
	},
	{
		stimulus: render_grid(9),
		data: {
			numeric_value: 9,
			test_part: 'n-back'
		}
	}
];


const intro = introduction()
timeline.push(intro)


// N-Back 1-5 experiments
// 25 in total
for(let n = 1; n<=5;n++){
	timeline.push({
		timeline: [
			start_card(n),
			n_back_experiment(n, 30),
			end_card()
		],
		repetitions: 5
	});
}


// initialize the experiment
jsPsych.init({
	timeline: timeline,
	on_finish: function() {
    	jsPsych.data.displayData();
  	}
});

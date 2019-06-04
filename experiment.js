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


const introduction = {
	type: 'html-keyboard-response',
	stimulus: "<h1>N-Back Experiment</h1> \
		<p> You will see a <b>3x3</b> Grid and the cells will light \
		up <span class=\"blue\"><b>blue</b></span> and you have to determine if that was \
		same cell as <b>n</b> steps before. We will start with <b>n</b>=2 and \
		raise the difficulty</p> \
		<div style=\"margin: auto; display: inline-block\">" + empty_grid() +
		"</div><p> Press <b>s</b> if the cell is the same as <b>n</b> steps before and \
		<b>n</b> if it's not</p>",
	choices: jsPsych.ALL_KEYS,
	data: {
		test_part: 'introduction'
	}
}
timeline.push(introduction)

// End card between trials
const end_card = {
	type: 'html-keyboard-response',
	stimulus: 'Here we go again',
	choices: jsPsych.ALL_KEYS
}



// pipeline for a single stimulus
const n_back_exp = n_back_experiment(1, 10);

// experinemt chain
let experiment_chain = {
	timeline: [n_back_exp, end_card],
	repetitions: 1
}
timeline.push(experiment_chain)


// initialize the experiment
jsPsych.init({
	timeline: timeline,
	on_finish: function() {
    	jsPsych.data.displayData();
  	}
});

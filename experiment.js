// Create the timeline array that holds the experiment flow
let timeline = []

// N-Back Stimuli, 9 in Total
const stimuli = [
	{
		stimulus: '1',
		data: {
			numeric_value: 1,
			test_part: 'n-back'
		}
	},
	{
		stimulus: '2',
		data: {
			numeric_value: 2,
			test_part: 'n-back'
		}
	},
	{
		stimulus: '3',
		data: {
			numeric_value: 3,
			test_part: 'n-back'
		}
	},
	{
		stimulus: '4',
		data: {
			numeric_value: 4,
			test_part: 'n-back'
		}
	},
	{
		stimulus: '5',
		data: {
			numeric_value: 5,
			test_part: 'n-back'
		}
	},
	{
		stimulus: '6',
		data: {
			numeric_value: 6,
			test_part: 'n-back'
		}
	},
	{
		stimulus: '7',
		data: {
			numeric_value: 7,
			test_part: 'n-back'
		}
	},
	{
		stimulus: '8',
		data: {
			numeric_value: 8,
			test_part: 'n-back'
		}
	},
	{
		stimulus: '9',
		data: {
			numeric_value: 9,
			test_part: 'n-back'
		}
	}
];


// End card between trials
const end_card = {
	type: 'html-keyboard-response',
	stimulus: 'Here we go again',
	choices: jsPsych.ALL_KEYS
}

// fixation between the n-back values
const fixation = {
	type: 'html-keyboard-response',
	choices: jsPsych.NO_KEYS,
	stimulus: '+',
	trial_duration: 500,
	data: {
		test_part: 'fixation'
	}
}

// n back display in the trial
const n_back_event = {
	type: 'html-keyboard-response',
	stimulus: jsPsych.timelineVariable('stimulus'),
	choices: ['s', 'n'],
	trial_duration: 2000,
	data: jsPsych.timelineVariable('data'),
	on_finish: function(data) {
		const this_value = data.numeric_value;
		const last_trial = jsPsych.data.get().filter({
			test_part: 'n-back'
		}).last(2).values()[0];
		// if the last trial is available
		if(last_trial){
			const last_value = last_trial.numeric_value;
			const same = last_value == this_value;
			// determine whether the user said it was the same
			const user_reponse = data.key_press == 83 ? true : false;
			// store if the answer was correct
			data.correct = same == user_reponse;
		}
	}
}

// pipeline for a single stimulus
let n_back_experiment = {
	timeline: [n_back_event, fixation],
	timeline_variables: stimuli,
	sample: {
		type: 'with-replacement',
		size: 10
	},
};

// experinemt chain
let experiment_chain = {
	timeline: [n_back_experiment, end_card],
	repetitions: 3
}
timeline.push(experiment_chain)


// initialize the experiment
jsPsych.init({
	timeline: timeline,
	on_finish: function() {
    	jsPsych.data.displayData();
  	}
});

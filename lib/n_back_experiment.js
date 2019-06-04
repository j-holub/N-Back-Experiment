
// Creates an experiment card for the N-Back experiment containing the grids
// with the blue cells
//
// Choices are s - "same" and n - "not the same"
// The on_finish functions computes if the input was correct or not
//
// n - how many steps to look back for the same tile
//
function n_back_card(n){
	return {
		type: 'html-keyboard-response',
		stimulus: jsPsych.timelineVariable('stimulus'),
		choices: ['s', 'n'],
		trial_duration: 2000,
		data: jsPsych.timelineVariable('data'),
		// function to calculate if the input was correct
		on_finish: function(data) {
			const this_value = data.numeric_value;
			const last_trial = jsPsych.data.get().filter({
				test_part: 'n-back'
			}).last(n+1).values()[0];
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
}

// creates and empty grid fixation card in between stimuli
function fixation_card(duration){
	return {
		type: 'html-keyboard-response',
		choices: jsPsych.NO_KEYS,
		stimulus: empty_grid(),
		trial_duration: duration,
		data: {
			test_part: 'fixation'
		}
	}
}

// creates an N-Back experiment
//
// n    - steps to look back
// size - number of stimuli
function n_back_experiment(n, size){
	return {
		timeline: [n_back_card(n), fixation_card(300)],
		timeline_variables: stimuli,
		sample: {
			type: 'with-replacement',
			size: size
		}
	};
}

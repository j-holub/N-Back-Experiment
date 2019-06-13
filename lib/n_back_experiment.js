
// Creates an experiment card for the N-Back experiment containing the grids
// with the blue cells
//
// Choices are s - "same" and n - "not the same"
// The on_finish functions computes if the input was correct or not
//
// n 		- how many steps to look back for the same tile
// stimulus - the numerical value for the stimulus grid
//
function n_back_card(n, stimulus){
	return {
		type: 'html-keyboard-response',
		stimulus: render_grid(stimulus),
		choices: ['s', 'n'],
		trial_duration: 1500,
		response_ends_trial: false,
		data: {
			test_part: 'n-back',
			n: n,
			numeric_value: stimulus
		},
		on_start: function(trial) {
			// add the starting timestamp
			trial.data.trial_start = Date.now();
		},
		// function to calculate if the input was correct
		on_finish: function(data) {
			const this_value = data.numeric_value;
			const last_trial = jsPsych.data.getLastTimelineData().filter({
				test_part: 'n-back'
			}).last(n+1).values()[0];
			// if the last trial is available
			if(last_trial){
				const last_value = last_trial.numeric_value;
				const same = last_value == this_value;
				// alert(same);
				// determine whether the user said it was the same
				const user_reponse = data.key_press == 83;

				// store if the answer was correct
				data.correct = data.key_press == null ? false : same == user_reponse;
			}
			// add the trial end
			data.trial_end = Date.now();
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

// creates a sequence of stimuli for an n-back trial
//
// n    			 - how many steps to look back for the correct answer
// size 			 - how many stimuli to include in the trial. Will be size+n
// fixation_duration - the duration the fixation stimuli should be visible between
// 					   each trial
//
// return: the timeline consiting of n-back and fixation cards
//
function create_n_back_sequence(n, size, fixation_duration){
	let timeline_sequence = []
	// create the first n entries that are not relevant to the test
	let random_number = 0
	for(let i=0; i<n; i++){
		// create a random integer in range of [1,9]
		let random_number = Math.floor(Math.random() * 9) +1 ;
		// creathe the first n_back card
		timeline_sequence.push(n_back_card(n, random_number));
		timeline_sequence.push(fixation_card(fixation_duration));
	}

	// fill the rest of the sequence
	for(let i=n*2; i<(size+n)*2;i=i+2){
		last_relevant_stimulus = timeline_sequence[i-(n*2)].data.numeric_value;
		// random number in the range of [0,1)
		random_number = Math.random();
		// same one as before
		if(random_number<=0.40){
			timeline_sequence.push(n_back_card(n, last_relevant_stimulus));
		}
		// different number (possibly the same but very unlikely)
		else{
			random_number = Math.floor(Math.random() * 9) + 1;
			timeline_sequence.push(n_back_card(n, random_number));
			// update the last relevant stimulus according to how far you look back
		}
		// add a fixation card
		timeline_sequence.push(fixation_card(fixation_duration));
	}

	return timeline_sequence
}

// creates an N-Back experiment
//
// n    - steps to look back
// size - number of stimuli
function n_back_experiment(n, size){
	return {
		timeline: create_n_back_sequence(n, size, 300),
	};
}

// Create the timeline array that holds the experiment flow
let timeline = []

timeline.push({
  type: 'fullscreen',
  fullscreen_mode: true
});

// introduction
const intro = introduction();
timeline.push(intro);

// how many trials per n step
const trials_per_n = 4
//  list of n steps
const n_steps = [1,2,3,4]
// stimuli per trial
const stimuli = 10

// create a random list of 1-4 back trials, 10 each
const n_back_trial_sequence = jsPsych.randomization.repeat(n_steps, trials_per_n);

// create n-back trials according to the sequence
n_back_trial_sequence.forEach(function(n){
	timeline.push({
		timeline: [
			start_card(n),
			n_back_experiment(n, stimuli),
			end_card(stimuli, 10000)
		]
	});
});


// initialize the experiment
jsPsych.init({
	timeline: timeline,
    show_progress_bar: true,
	on_finish: function() {
        // download the data
        jsPsych.data.get().localSave('json', 'N-Back-' + Date.now() + '.json');
  	}
});

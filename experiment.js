// Create the timeline array that holds the experiment flow
let timeline = []

// introduction
const intro = introduction();
timeline.push(intro);


// create a random list of 1-4 back trials
const n_back_trial_sequence = jsPsych.randomization.repeat([1,2,3,4], 10);

// create n-back trials according to the sequence
n_back_trial_sequence.forEach(function(n){
	timeline.push({
		timeline: [
			start_card(n),
			n_back_experiment(n, 30),
			end_card()
		]
	});
});


// initialize the experiment
jsPsych.init({
	timeline: timeline,
	on_finish: function() {
    	jsPsych.data.displayData();
  	}
});

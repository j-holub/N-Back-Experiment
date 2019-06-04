// Create the timeline array that holds the experiment flow
let timeline = []

// introduction
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

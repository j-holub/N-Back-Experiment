// Experiment Introduction
function introduction(){
	return {
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
}

// Start Card before every session
function start_card(n, size){
	return {
		type: 'html-keyboard-response',
		stimulus: "<h3>"+n+"-back Session</h3> \
			<p>Memorize the tiles and choose whether the current tile was the \
			same as the one <b>"+n+"</b> steps before</p> \
			<p>Press <b>s</b> if it was the same and <b>n</b> otherweise</p> \
			<p><i>Press any key to continue</i></p>",
		choices: jsPsych.ALL_KEYS,
		data: {
			test_part: 'start_card'
		}
	}
}

// End card after every session
function end_card(size){
	return {
		type: 'html-keyboard-response',
		stimulus: function(data) {

			// get the number of correct answers from the last trial session
			const correct_trials = jsPsych.data.getLastTimelineData().filter({
				test_part: 'n-back',
				correct: true
			}).count();



			return "<h1>Break</h1> \
				<p>You got <b>"+correct_trials+"</b> right answers</p> \
				<p>Take a short break</p> \
				<p><i>Press any key to continue</i></p>";
		},
		choices: jsPsych.ALL_KEYS,
		data: {
			test_part: 'end_card'
		}
	}
}

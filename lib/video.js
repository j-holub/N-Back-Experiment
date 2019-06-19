
function lecture_video(video_src){
	return {
		type: 'video',
		sources: [video_src],
		data: {
			test_part: 'video-lecture'
		},
		width: 1280,
		height: 720,
		on_start: function(trial) {
			// add the starting timestamp
			trial.data.trial_start = Date.now();
		},
		on_finish: function(data) {
			data.trial_end = Date.now();
		}
	}
}

function video_introduction(){
	return {
		type: 'html-keyboard-response',
		choices: jsPsych.ALL_KEYS,
		stimulus: "<h3>Lecture Video Part</h3>\
				<p>The experiment is almost over, all that is left is to watch the following\
				   roughly 7 minutes long video. That's it. Try to stay focused and follow\
				   the content</p>\
				<p><i>Press any key to continue</i></p>",
		data: {
			test_part: 'video-lecture-introduction'
		}
	}
}

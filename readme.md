# N-Back Experiment

A well known psychological experiment described [here](https://en.wikipedia.org/wiki/N-back), where participants have to solve problems of different difficulties.

In this case it's the so called **n-back** problem, where *stimuli* are presented and the participants have to say if it was the same stimulus as the one **n** steps before.

In this experiment the level ranges from **1-5**. **1** is rather easy and **5** is pretty difficult.

The trials are presented at random order.
## Settings

The default settings are

* **1-5** n-back steps
* **10** stimuli per trial
* **5** repitions per n-back step

This can easily be changed in the `experiment.js` file in the lines **15-19**.

## Install

Download this repository and execute the `download_external_dependecies.sh` script. This will download **JsPsych**, **ProgressBarJs** and the **lecture video**. To download the lecture video [youtube-dl](https://github.com/ytdl-org/youtube-dl/) is required.

That's it. To start the experiment open `experiment.html` in your browser of choice.

## Goal

The goal is to use **machine learning** methods, **neural networks** in particular to estimate which of the difficulty levels the participant is solving.

## Video

At the end of the lecture the participant is presented with an academic lecture video. We used this to record data from the participant while watching a real lecture and test our model on it, just to see how it behaves.

The video we used was from the great [MIT OpenCourseWare YouTube Channel](https://www.youtube.com/user/MIT/videos) and is linked unter the *References*

## References

* [JsPsych](https://www.jspsych.org) - JavaScript Framework for psychological experiments
* [ProgressBarJs](https://progressbarjs.readthedocs.io/en/latest/) - JavaScript library to create a progress bar
* [YouTube-dl](https://github.com/ytdl-org/youtube-dl/) - Python Script to download videos from YouTube
* [MIT OpenCourseWare Lecture on Linear Optimization](0be1d232e2310a7be74b9d3af7bbc39cc068f265)

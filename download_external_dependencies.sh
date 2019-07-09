echo "Downloading JsPsych..."
wget https://github.com/jspsych/jsPsych/releases/download/v6.0.5/jspsych-6.0.5.zip
echo "Creating Directory Structure"
mkdir -p jsPsych-6
echo "Extracting Zip Archive"
unzip jspsych-6.0.5.zip -d jsPsych-6
echo "Deleting Zip Archive"
rm jspsych-6.0.5.zip

echo "Downloading ProgressBarJs..."
wget https://raw.githubusercontent.com/kimmobrunfeldt/progressbar.js/master/dist/progressbar.min.js
touch lib/progressbar.min.js
head -1 progressbar.min.js > lib/progressbar.min.js
rm progressbar.min.js

echo "Downloading Lecture Video..."
youtube-dl -k -f 22 https://www.youtube.com/watch?v=e8yvJp0VqtI
mv "5.2.6 An Introduction to Text Analytics - Video 4 - Bag of Words-e8yvJp0VqtI.mp4" lecture-video.mp4

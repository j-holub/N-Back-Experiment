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
mv progressbar.min.js lib/

echo "Downloading Lecture Video..."
youtube-dl -f 22 https://www.youtube.com/watch?v=ixRKeQMa7Nc
rm CAMERA\ BASICS\!-ixRKeQMa7Nc.mkv CAMERA\ BASICS\!-ixRKeQMa7Nc.f251.webm
rm CAMERA\ BASICS\!-ixRKeQMa7Nc.mkv
mv CAMERA\ BASICS\!-ixRKeQMa7Nc.f137.mp4 "lecture-video.mp4"

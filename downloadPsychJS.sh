echo "Downloading PsychJS..."
wget https://github.com/jspsych/jsPsych/releases/download/v6.0.5/jspsych-6.0.5.zip
echo "Creating Directory Structure"
mkdir -p PsychJS-6
echo "Extracting Zip Archive"
unzip jspsych-6.0.5.zip -d PsychJS-6
echo "Deleting Zip Archive"
rm jspsych-6.0.5.zip

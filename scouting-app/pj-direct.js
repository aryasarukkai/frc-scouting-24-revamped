const fs = require('fs');
const { firebase } = require('firebase');
const { initializeApp } = require('firebase/app');
const { getDatabase, ref, onValue } = require('firebase/database');

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAso045mvuwi4VgaqCFVBT0bz1u3_e9O9g",
    authDomain: "crescendo-scouting-app-649.firebaseapp.com",
    databaseURL: "https://crescendo-scouting-app-649-default-rtdb.firebaseio.com",
    projectId: "crescendo-scouting-app-649",
    storageBucket: "crescendo-scouting-app-649.appspot.com",
    messagingSenderId: "1043419769449",
    appId: "1:1043419769449:web:448a22c410c3efd37c50f8"
  };

firebase.initializeApp(firebaseConfig);

// Reference to the "formData-mbr" node in the database
const formDataRef = firebase.database().ref('formData-mbr');

// Fetch the data from Firebase
formDataRef.once('value', snapshot => {
  const data = snapshot.val();

  // Extract the keys (match IDs) from the data object
  const matchKeys = Object.keys(data);

  // Define the CSV headers
  const headers = [
    'Match Number',
    'Scout Name',
    'Team Number',
    'Alliance Color',
    'Speakers Scored Auton',
    'Speakers Failed Auton',
    'Amps Scored Auton',
    'Amps Failed Auton',
    'Speakers Scored Teleop',
    'Speakers Failed Teleop',
    'Amps Scored Teleop',
    'Amps Failed Teleop',
    'Ground Auton',
    'Ground Teleop',
    'Source Teleop',
    'Amplified Notes Auton',
    'Amplified Notes Teleop',
    'Defense Bot',
    'Harmony',
    'Onstage',
    'Spotlight',
    'Trap',
    'Disabled/Damaged Bot',
    'Non-Functional Bot',
    'Notes',
    'Action Logs'
  ];

  // Create an array to store the CSV rows
  const csvRows = [];

  // Iterate over each match key
  matchKeys.forEach(matchKey => {
    const match = data[matchKey];

    // Convert the actionLogs array to a JSON string
    const actionLogsJson = JSON.stringify(match.actionLogs);

    // Replace newline characters with semicolons in the notes field
    const notes = match.notes.replace(/\n/g, ';');

    // Extract the relevant data from the match object
    const row = [
      match.matchNumber,
      match.scoutName,
      match.teamNumber,
      match.allianceColor,
      match.speakersScoredAuton,
      match.speakersFailedAuton,
      match.ampsScoredAuton,
      match.ampsFailedAuton,
      match.speakersScoredTeleop,
      match.speakersFailedTeleop,
      match.ampsScoredTeleop,
      match.ampsFailedTeleop,
      match.groundAuton,
      match.groundTeleop,
      match.sourceTeleop,
      match.amplifiedNotesAuton,
      match.amplifiedNotesTeleop,
      match.defenseBot,
      match.harmony,
      match.onstage,
      match.spotlight,
      match.trap,
      match.disabledDamagedBot || '',
      match.nonFunctionalBot || '',
      notes,
      actionLogsJson
    ];

    // Add the row to the CSV rows array
    csvRows.push(row);
  });

  // Convert the CSV rows array to a CSV string
  const csvString = [headers.join(','), ...csvRows.map(row => row.map(field => `"${field.toString().replace(/"/g, '""')}"`).join(','))].join('\n');

  // Write the CSV string to a file
  fs.writeFileSync('output.csv', csvString, 'utf8');

  console.log('CSV file generated successfully!');
}, error => {
  console.error('Error fetching data from Firebase:', error);
});
const fs = require('fs');

// Read the JSON file
const jsonData = fs.readFileSync('data.json', 'utf8');
const data = JSON.parse(jsonData);

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
const fs = require('fs');

// Read JSON data from file
const jsonData = fs.readFileSync('data.json', 'utf8');
const data = JSON.parse(jsonData);

// Extract headers from JSON data
const headers = Object.keys(Object.values(data)[0]);

// Convert JSON data to CSV format
const csvRows = [headers.join(',')];
for (const key in data) {
  if (data.hasOwnProperty(key)) {
    const row = headers.map(header => {
      const value = data[key][header];
      return typeof value === 'string' ? `"${value.replace(/"/g, '""')}"` : value;
    });
    csvRows.push(row.join(','));
  }
}
const csvData = csvRows.join('\n');

// Write CSV data to file
fs.writeFileSync('data.csv', csvData, 'utf8');

console.log('Conversion complete. CSV file written to data.csv');
const fs = require('fs');
const axios = require('axios');

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

// Function to upload file to Pastebin
async function uploadToPastebin() {
  try {
    const apiDevKey = 'LliMmY94XNVbOOM2Ysyvw7-VOdElxodI';
    const response = await axios.post('https://pastebin.com/api/api_post.php', null, {
      params: {
        api_dev_key: apiDevKey,
        api_option: 'paste',
        api_paste_code: csvData,
        api_paste_name: 'data.csv',
        api_paste_private: '1', // Unlisted
        api_paste_expire_date: '1D', // Expire in 1 day
        api_paste_format: 'csv'
      }
    });

    if (response.data.startsWith('https://pastebin.com/')) {
      const pasteUrl = response.data;
      const pasteId = pasteUrl.split('/').pop();
      const rawUrl = `https://pastebin.com/raw/${pasteId}`;
      return rawUrl;
    } else {
      throw new Error(`Pastebin API error: ${response.data}`);
    }
  } catch (error) {
    console.error('Error uploading to Pastebin:', error.message);
    return null;
  }
}

// Upload file to Pastebin and get the raw link
uploadToPastebin()
  .then(rawLink => {
    if (rawLink) {
      console.log('Conversion complete. CSV file uploaded to:', rawLink);
    } else {
      console.log('Conversion complete. File upload to Pastebin failed.');
    }
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
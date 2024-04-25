const fs = require('fs');

// Specify the existing file name and the new file name
const existingFileName = 'existing_file.txt';
const newFileName = 'new_file.txt';

// Rename the file
fs.rename(existingFileName, newFileName, (err) => {
  if (err) {
    console.error('Error renaming file:', err);
  } else {
    console.log('File renamed successfully!');
  }
});

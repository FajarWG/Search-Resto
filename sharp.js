const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const directory = 'src/public/images';

fs.readdirSync(directory).forEach((file) => {
  sharp(`${directory}/${file}`)
    .resize(480)
    .toFile(path.resolve(__dirname, `${directory}/${file.split('.').slice(0, -1).join('.')}-small.jpg`));
});

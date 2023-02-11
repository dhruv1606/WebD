var fs = require('fs');
const folderName = process.argv[2] || 'Project';

fs.mkdirSync(folderName);
// fs.writeFileSync(`${folderName}/index.html`, '');
// fs.writeFileSync(`${folderName}/app.js`, '');
// fs.writeFileSync(`${folderName}/styles.css`, '');


fs.writeFile(`${folderName}/index.html`, '', function(){});
fs.writeFile(`${folderName}/app.js`, '', function(){});
fs.writeFile(`${folderName}/styles.css`, '', function(){});
const fs = require('fs');
const content = fs.readFileSync('login.html', 'utf8');
const lines = content.split('\n');
for (let i = 210; i < 300; i++) {
  console.log(`${i+1}: ${lines[i]}`);
}

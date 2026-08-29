const https = require('https');
const fs = require('fs');

https.get('https://raw.githubusercontent.com/luisdalmolin/mapa-brasil-svg/master/mapa.html', (resp) => {
  let data = '';
  resp.on('data', (chunk) => { data += chunk; });
  resp.on('end', () => {
    // Extract just the svg part
    const match = data.match(/<svg[\s\S]*?<\/svg>/i);
    if (match) {
        fs.writeFileSync('src/components/BrazilMap.svg', match[0]);
        console.log('SVG downloaded and saved!');
    } else {
        console.log('SVG not found in the HTML');
        fs.writeFileSync('src/components/BrazilMap.svg', data);
    }
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});

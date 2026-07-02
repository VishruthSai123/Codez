const fs = require('fs');
const svgs = {
  'java.svg': '#f89820',
  'kotlin.svg': '#7F52FF',
  'c.svg': '#A8B9CC',
  'cpp.svg': '#00599C',
  'csharp.svg': '#239120',
  'go.svg': '#00ADD8',
  'rust.svg': '#dea584'
};
for (const [file, color] of Object.entries(svgs)) {
  const text = file.replace('.svg', '').toUpperCase().substring(0,3);
  const content = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="20" fill="${color}"/><text x="50" y="65" font-family="sans-serif" font-size="30" font-weight="bold" fill="white" text-anchor="middle">${text}</text></svg>`;
  fs.writeFileSync('./public/' + file, content);
}

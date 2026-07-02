const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const original = content;
      content = content.replace(/source="imageSrc"/g, 'source="image_src"');
      content = content.replace(/source="audioSrc"/g, 'source="audio_src"');
      content = content.replace(/source="courseId"/g, 'source="course_id"');
      content = content.replace(/source="unitId"/g, 'source="unit_id"');
      content = content.replace(/source="lessonId"/g, 'source="lesson_id"');
      content = content.replace(/source="challengeId"/g, 'source="challenge_id"');
      if (content !== original) {
        fs.writeFileSync(fullPath, content);
        console.log('Updated ' + fullPath);
      }
    }
  }
}
replaceInDir('app/admin');

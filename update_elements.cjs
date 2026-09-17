const fs = require('fs');
let code = fs.readFileSync('src/components/studio/CourseDetailModal.tsx', 'utf8');

const regexes = [
  {
    find: /id="course-detail-modal-content"([\s\S]*?)className="([\s\S]*?)border border-white\/20([\s\S]*?)"([\s\S]*?)style=\{\{[\s\S]*?\}\}/g,
    replace: `id="course-detail-modal-content"$1className="$2$3"$4style={glassCardStyle}`
  },
  {
    find: /id="course-info-glass-card"([\s\S]*?)className="([\s\S]*?)border border-white\/20([\s\S]*?)"([\s\S]*?)style=\{\{[\s\S]*?\}\}/g,
    replace: `id="course-info-glass-card"$1className="$2$3"$4style={glassCardStyle}`
  },
  {
    find: /id="course-progress-glass-panel"([\s\S]*?)className="([\s\S]*?)border border-white\/20([\s\S]*?)"([\s\S]*?)style=\{\{[\s\S]*?\}\}/g,
    replace: `id="course-progress-glass-panel"$1className="$2$3"$4style={glassCardStyle}`
  },
  {
    find: /id="course-tool-01-glass-card"([\s\S]*?)className="([\s\S]*?)border border-white\/20([\s\S]*?)"([\s\S]*?)style=\{\{[\s\S]*?\}\}/g,
    replace: `id="course-tool-01-glass-card"$1className="$2$3"$4style={glassCardStyle}`
  },
  {
    find: /id="course-tool-02-glass-card"([\s\S]*?)className="([\s\S]*?)border border-white\/20([\s\S]*?)"([\s\S]*?)style=\{\{[\s\S]*?\}\}/g,
    replace: `id="course-tool-02-glass-card"$1className="$2$3"$4style={glassCardStyle}`
  },
  {
    find: /id="course-tool-03-glass-card"([\s\S]*?)className="([\s\S]*?)border border-white\/20([\s\S]*?)"([\s\S]*?)style=\{\{[\s\S]*?\}\}/g,
    replace: `id="course-tool-03-glass-card"$1className="$2$3"$4style={glassCardStyle}`
  },
  {
    find: /id="course-tool-04-glass-card"([\s\S]*?)className="([\s\S]*?)border border-white\/20([\s\S]*?)"([\s\S]*?)style=\{\{[\s\S]*?\}\}/g,
    replace: `id="course-tool-04-glass-card"$1className="$2$3"$4style={glassCardStyle}`
  }
];

let newCode = code;
for (const r of regexes) {
  newCode = newCode.replace(r.find, r.replace);
}

fs.writeFileSync('src/components/studio/CourseDetailModal.tsx', newCode);
console.log('updated elements');

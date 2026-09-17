const fs = require('fs');
let code = fs.readFileSync('src/components/studio/CourseDetailModal.tsx', 'utf8');

code = code.replace(
  `0 0 0 9999px rgba(0, 0, 0, 0.75)`,
  ``
);

code = code.replace(
`    <div
      id="course-detail-modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8 bg-transparent animate-fade-in"
    >
      {/* 1. Large Outer Rounded WebGL Glass Shell */}`,
`    <div
      id="course-detail-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8 bg-transparent animate-fade-in pointer-events-none"
    >
      {/* Backdrop Layer */}
      <div 
        className="absolute inset-0 z-0 bg-black/40 backdrop-blur-[4px] pointer-events-auto"
        onClick={onClose}
      />
      {/* 1. Large Outer Rounded WebGL Glass Shell */}`
);

// We need to add pointer-events-auto to the content since the wrapper is pointer-events-none
code = code.replace(
  `id="course-detail-modal-content"
        className="relative`,
  `id="course-detail-modal-content"
        className="relative pointer-events-auto z-10`
);

fs.writeFileSync('src/components/studio/CourseDetailModal.tsx', code);
console.log('Test file written');

const fs = require('fs');

// 1. Update CourseDetailModal.tsx to add glassCardStyle
let modalCode = fs.readFileSync('src/components/studio/CourseDetailModal.tsx', 'utf8');

if (!modalCode.includes('isLightBg?: boolean;')) {
  modalCode = modalCode.replace(
    'interface CourseDetailModalProps {',
    'interface CourseDetailModalProps {\n  isLightBg?: boolean;'
  );
}

if (!modalCode.includes('isLightBg = false,')) {
  modalCode = modalCode.replace(
    '  onOpenOverview,\n}) => {',
    '  onOpenOverview,\n  isLightBg = false,\n}) => {'
  );
}

// Add the exact same glassCardStyle from StudioView.tsx
if (!modalCode.includes('const glassCardStyle = {')) {
  modalCode = modalCode.replace(
    '  const collectionsCount =',
    `  const glassCardStyle = {
    background: isLightBg ? 'rgba(15, 20, 38, 0.55)' : 'rgba(255, 255, 255, 0.035)',
    border: isLightBg ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: isLightBg
      ? '0 25px 50px -12px rgba(0, 0, 0, 0.3), inset 0 1px 1px 0 rgba(255, 255, 255, 0.4)'
      : '0 25px 50px -15px rgba(0, 0, 0, 0.5), inset 0 1px 1px 0 rgba(255, 255, 255, 0.35)',
  };

  const collectionsCount =`
  );
}

fs.writeFileSync('src/components/studio/CourseDetailModal.tsx', modalCode);
console.log('updated props and added glassCardStyle');

// const menuItems = document.querySelectorAll('.menu li');

// menuItems.forEach(item => {
//   item.addEventListener('mouseover', () => {
//     const randomColor = getRandomColor();
//     item.style.backgroundColor = randomColor;
//   });

//   item.addEventListener('mouseleave', () => {
//     item.style.backgroundColor = ''; // Reset background color on mouseout
//   });
// });

// function getRandomColor() {
//   const letters = '0123456789ABCDEF';
//   let color = '#';
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

// function addClassToCSS(className) {
//     const styleSheet = document.styleSheets[0]; // Assuming the first stylesheet
//     const existingRule = Array.from(styleSheet.cssRules).find(rule => rule.selectorText === `.${className}`);

//     if (!existingRule) {
//         const rule = `.${className} { /* Your default styles here */ }`;
//         styleSheet.insertRule(rule, styleSheet.cssRules.length);
//     }
// }

// ... (rest of the code remains the same)
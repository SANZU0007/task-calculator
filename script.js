// Get DOM elements
const display = document.querySelector('.display');
const keys = document.querySelector('.keys');

// Add event listener to keys container
keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target;
    const keyValue = key.value;

    if (key.classList.contains('clear')) {
      // Clear display
      display.textContent = '';
    } else if (key.classList.contains('equal')) {
      // Evaluate expression
      try {
        const result = eval(display.textContent);
        display.textContent = result;
      } catch (error) {
        alert('Invalid expression');
      }
    } else if (key.classList.contains('operator')) {
      // Add operator to display
      display.textContent += ` ${keyValue} `;
    } else {
      // Add number or decimal point to display
      display.textContent += keyValue;
    }
  }
});

// Add event listener to document for keyboard input
document.addEventListener('keydown', e => {
  // Only allow number keys
  if (e.key >= '0' && e.key <= '9') {
    display.textContent += e.key;
  } else if (e.key === '.') {
    // Only allow one decimal point
    if (!display.textContent.includes('.')) {
      display.textContent += e.key;
    }
  } else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
    display.textContent += ` ${e.key} `;
  } else if (e.key === 'Enter') {
    // Evaluate expression
    try {
      const result = eval(display.textContent);
      display.textContent = result;
    } catch (error) {
      alert('Invalid expression');
    }
  } else {
    alert('Only numbers are allowed');
  }
});

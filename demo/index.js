import './styles.css';

import balanceText from '../src/index.js';

document.addEventListener('DOMContentLoaded', () => {
  const test1 = document.getElementById('test1');
  const text = document.getElementById('balance-text');
  const inputWidth = document.getElementById('input-width');
  const inputToggleTextWrap = document.getElementById('input-toggle-text-wrap');

  inputWidth.addEventListener('input', () => {
    test1.style.setProperty('--ratio', 50 + inputWidth.value * 50);

    balanceText({
      el: text,
      useParent: true,
      ratio: 1,
      debug: true,
    });
  });

  inputToggleTextWrap.addEventListener('change', () => {
    if (inputToggleTextWrap.checked) {
      text.style.textWrap = 'balance';
      text.style.removeProperty('max-width');
    } else {
      text.style.removeProperty('text-wrap');
      text.style.maxWidth = '100%';
    }
  });
});

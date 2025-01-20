let TEXT_WRAP_BALANCE_SUPPORT = -1;
let NOTIFIED = false;

export default function balanceText({ el, ratio = 1, useParent = false, debug = false } = {}) {
  if (TEXT_WRAP_BALANCE_SUPPORT === -1) {
    TEXT_WRAP_BALANCE_SUPPORT = typeof CSS !== 'undefined' && typeof CSS.supports === 'function' && CSS.supports('text-wrap', 'balance');
  }

  const container = useParent ? el.parentElement : el;
  if (!container) return;

  const computedStyle = window.getComputedStyle(el);

  if (TEXT_WRAP_BALANCE_SUPPORT && computedStyle.textWrap === 'balance') {
    if (debug && !NOTIFIED) {
      console.warn('`text-wrap: balance` is supported by this browser, no need to use `balanceText` here');
      NOTIFIED = true;
    }
    return;
  }

  const update = (width) => (el.style.maxWidth = `${Math.ceil(width)}px`);

  // Reset el width
  el.style.maxWidth = '';

  // Get the initial container size
  const width = container.clientWidth;
  const height = container.clientHeight;

  // Synchronously do binary search and calculate the layout
  let lower = width / 2 - 0.25;
  let upper = width + 0.5;
  let middle;

  let maxTry = 0;
  if (width) {
    while (lower + 1 < upper && maxTry < 2000) {
      middle = Math.round((lower + upper) / 2);
      update(middle);
      if (container.clientHeight === height) {
        upper = middle;
      } else {
        lower = middle;
      }
      maxTry++;
    }

    // Update the el width
    update(upper * ratio + width * (1 - ratio));
  }
}

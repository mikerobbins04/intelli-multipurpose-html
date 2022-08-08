function animateValue(el, start = 0, end = 0, is_price = false, duration = 800) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
  
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      el.innerHTML = is_price
        ? prettyPrice(Math.floor(progress * (end - start) + start))
        : prettyNum(Math.floor(progress * (end - start) + start))
  
      // if not at end, continue
      // if at end, return final number WITHOUT math operation to preserve decimals
      if (progress < 1) window.requestAnimationFrame(step);
      else el.innerHTML = is_price
        ? this.prettyPrice(end)
        : this.prettyNum(end)
    };
    window.requestAnimationFrame(step);
  }
  
  function prettyNum(value = 0) {
    return value.toLocaleString('en-US');	
  }
  
  function prettyPrice(value = 0) {
    if (typeof value === 'string' && value.includes('$')) {
      value = this.numericCurrency(value);
    }
  
    // if 0, manually convert to currency. otherwise !Number is falsy and returns unformatted 0
    if (value == 0) return '$0';
  
    // preserve string and exit, no need for currency conversion
    if (!Number(value)) return value;
  
    return Number(value).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 1,
      maximumFractionDigits: 1
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.count-up').forEach(el => {
      animateValue(el, 0, el.dataset.value, el.dataset.isPrice);
    })
  })
  
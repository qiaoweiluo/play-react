// 格式化数字类型 (相比toLocaleString(),不会省略小数点后的0)
export const formatNumberString = (num) => {
  const value = String(num).split('.');
  if (value[1]) {
    return value[0].replace(/(?=(\B\d{3})+$)/g, ',') + '.' + value[1];
  } else {
    return value[0].replace(/(?=(\B\d{3})+$)/g, ',');
  }
};

// 百分比默认保留一位小数
export const numToPercent = (val, fixnum = 1, abs = false) => {
  if (!val && val !== 0) {
    return '-';
  }
  if (!abs) {
    return !parseFloat((val * 100).toFixed(fixnum))
      ? '0%'
      : `${(val * 100).toFixed(fixnum)}%`;
  } else {
    return !parseFloat((val * 100).toFixed(fixnum))
      ? '0%'
      : `${Math.abs(val * 100).toFixed(fixnum)}%`;
  }
};
// 取整带分隔符
export const numToInteger = (
  val,
  fixnum = 1,
  divisor = 1,
  defaultNum = 2,
  abs = false
) => {
  if (!val && val !== 0) {
    return '-';
  }
  if (!abs) {
    if (Math.abs(val / divisor) < 1) {
      // 等于0的不保留小数点
      return !parseFloat(`${(val / divisor).toFixed(defaultNum)}`)
        ? `${Number((val / divisor).toFixed(defaultNum))}`
        : `${(val / divisor).toFixed(defaultNum)}`;
    }
    return this.formatNumberString((val / divisor).toFixed(fixnum));
  } else {
    if (Math.abs(val / divisor) < 1) {
      // 等于0的不保留小数点
      return !parseFloat(`${(val / divisor).toFixed(defaultNum)}`)
        ? `${Number((val / divisor).toFixed(defaultNum))}`
        : `${Math.abs(val / divisor).toFixed(defaultNum)}`;
    }
    return this.formatNumberString(Math.abs(val / divisor).toFixed(fixnum));
  }
};

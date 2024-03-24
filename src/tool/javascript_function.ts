// 字符串技巧

// 比较时间
const compareTime = (time1: string, time2: string) => {
  return time1 < time2;
};

// 格式化 money
const thousandNum = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// 生成随机 ID
const randomId = (len: number) => {
  return Math.random().toString(36).substr(3, len);
};

// Generate star ratings
const startScore = (rate: number) => {
  return "★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate);
};

// 网址查询参数
const params = () => {
  return new URLSearchParams(location.search.replace(/\?/gi, ""));
};

// 数字技能

// 零填充
const fillZero = (num: number, len: number) =>
  num.toString().padStart(len, "0");

// 转数字
const transformNumber = (data: any) => {
  return +data;
};

// 时间戳
const timestamp = (date: string) => {
  return +new Date(date);
};

// 精确小数
const roundNum = (num: number, decimal: number) =>
  Math.round(num * 10 ** decimal) / 10 ** decimal;

// 取最小值最大值
const min = (arr: number[]) => {
  return Math.min(...arr);
};
const max = (arr: number[]) => {
  return Math.max(...arr);
};

// 生成范围随机数
const randomNum = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// 确定数据类型
const dataType = (tgt: any, type?: any) => {
  const dataType = Object.prototype.toString
    .call(tgt)
    .replace(/\[object (\w+)\]/, "$1")
    .toLowerCase();
  return type ? dataType === type : dataType;
};

// 检查数组是否为空

const flag = (arr: any) => {
  return Array.isArray(arr) && !arr.length;
};

// 对象不为空

const notEmpty = (obj: Record<string, any>) => {
  return !!Object.keys(obj).length;
};

// 清空数组
const clearArr = (arr: any[]) => {
  arr.length = 0;
  return arr;
};

// 过滤空值
const clearEmpty = (arr: any[]) => {
  return arr.filter(Boolean);
};

// 计算数组成员的数量
const count = (arr: any[]) => {
  return arr.reduce((t, v) => {
    t[v] = t[v] ? ++t[v] : 1;
    return t;
  }, {});
};

// 创建指定长度的数组
const createArrayLimit = (num: number) => {
  return [...new Array(num).keys()];
};

// 创建一个指定长度和相等值的数组
const createArrayLimitFill = (num: number, value: any) => {
  return new Array(num).fill(value);
};

// 对象技能

// 克隆对象

const cloneObj = (obj: Record<string, any>) => {
  // return { ...obj };
  return JSON.parse(JSON.stringify(obj));
};

// 处理多个函数返回值

const mulFn = (fn1: Function, fn2: Function) => {
  1;
  return Promise.all([fn1, fn2]);
};
export {
  compareTime,
  thousandNum,
  randomId,
  startScore,
  params,
  fillZero,
  transformNumber,
  timestamp,
  roundNum,
  min,
  max,
  randomNum,
  dataType,
  flag,
  notEmpty,
  clearArr,
  clearEmpty,
  count,
  createArrayLimit,
  createArrayLimitFill,
  cloneObj,
  mulFn,
};

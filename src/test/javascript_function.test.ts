// sum.test.js
import { expect, test } from "vitest";
import {
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
} from "../tool";

const toBeFn = (des: string, fn: Function, toBeValue: any) => {
  test(des, () => {
    expect(fn()).toBe(toBeValue);
  });
};
const toEqualFn = (des: string, fn: Function, toBeValue: any) => {
  test(des, () => {
    expect(fn()).toEqual(toBeValue);
  });
};
toBeFn(
  "compareTime",
  () => {
    const time1 = "2022-03-02 09:00:00";
    const time2 = "2022-03-02 09:00:01";
    return compareTime(time1, time2);
  },
  true
);
toBeFn(
  "thousandNum",
  () => {
    const money = 1000000;
    return thousandNum(money);
  },
  "1,000,000"
);
// todo
// toBeFn(
//   "randomId",
//   () => {
//     return randomId(10);
//   },
//   "xdeguewg1f"
// );
toBeFn(
  "startScore",
  () => {
    return startScore(3);
  },
  "★★★☆☆"
);
// todo
// toBeFn("params", () => {});
toBeFn(
  "fillZero",
  () => {
    return fillZero(1234, 5);
  },
  "01234"
);
toEqualFn(
  "transformNumber",
  () => {
    const data = [null, "", false, "169"];
    return data.map((item) => {
      return transformNumber(item);
    });
  },
  [0, 0, 0, 169]
);
toBeFn(
  "timestamp",
  () => {
    return timestamp("2022-03-22");
  },
  1647907200000
);
toBeFn(
  "roundNum",
  () => {
    return roundNum(1.2345, 2);
  },
  1.23
);
toBeFn(
  "min",
  () => {
    return min([0, 1, 2, 3]);
  },
  0
);
toBeFn(
  "max",
  () => {
    return max([0, 1, 2, 3]);
  },
  3
);
// todo
// toBeFn(
//   "randomNum",
//   () => {
//     return randomNum(1, 10);
//   },
//   5
// );
toEqualFn(
  "dataType",
  () => {
    const data = ["test", 20220314, true, [[], "array"], [{}, "array"]];
    return data.map((item) => {
      if (Array.isArray(item)) {
        return dataType(item[0], item[1]);
      } else {
        return dataType(item);
      }
    });
  },
  ["string", "number", "boolean", true, false]
);
toBeFn(
  "flag",
  () => {
    return flag([]);
  },
  true
);
toBeFn(
  "notEmpty",
  () => {
    const obj = { a: 0, b: 1, c: 2 };
    return notEmpty(obj);
  },
  true
);
toEqualFn(
  "clearArr",
  () => {
    const arr = [0, 1, 2];
    return clearArr(arr);
  },
  []
);
toEqualFn(
  "clearEmpty",
  () => {
    return clearEmpty([undefined, null, "", 0, false, NaN, 1, 2]);
  },
  [1, 2]
);
toEqualFn(
  "count",
  () => {
    const arr = [0, 1, 1, 2, 2, 2];
    return count(arr);
  },
  { 0: 1, 1: 2, 2: 3 }
);
toEqualFn(
  "createArrayLimit",
  () => {
    return createArrayLimit(3);
  },
  [0, 1, 2]
);
toEqualFn(
  "createArrayLimitFill",
  () => {
    return createArrayLimitFill(3, 0);
  },
  [0, 0, 0]
);
toEqualFn(
  "cloneObj",
  () => {
    const _obj = { a: 0, b: 1, c: 2 };
    return cloneObj(_obj);
  },
  { a: 0, b: 1, c: 2 }
);
// todo
// toBeFn("mulFn", () => {
//   const [user, comment] = await Func();
// });

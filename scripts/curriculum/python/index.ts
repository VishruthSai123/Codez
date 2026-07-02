import { pythonUnits } from "./units";
import { pythonUnit1Lessons } from "./units_1";
import { pythonUnit2Lessons } from "./units_2";
import { pythonUnit3Lessons } from "./units_3";
import { pythonUnit4Lessons } from "./units_4";
import { pythonUnit5Lessons } from "./units_5";
import { pythonUnit6Lessons } from "./units_6";

export const allPythonUnits = pythonUnits;
export const allPythonLessons = [
  ...pythonUnit1Lessons,
  ...pythonUnit2Lessons,
  ...pythonUnit3Lessons,
  ...pythonUnit4Lessons,
  ...pythonUnit5Lessons,
  ...pythonUnit6Lessons,
];

import { generateExerciseData } from "./data/exerciseData.js";
import { createExercise, getExercises } from "./models/exercises.js";
import { login, register } from "./models/user.js";

// login("chinh.dovan@gmail.com", "12345678");
// register("Chinh Do", "dochinhthtn@gmail.com", "12345678");

// getExercises(); // đơn giản gọi hàm thôi nhé


// createExercise({
//     name: "ABS WORKOUT",
//     description: "des here",
//     instruction: "instruction here",
//     muscle: ["abs"],
//     calories: 500,
//     difficulty: "easy"
// });

generateExerciseData();
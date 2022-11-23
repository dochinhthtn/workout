import { getExerciseById } from "../models/exercises.js";

let exerciseData = {};

window.onload = function () {
    // lấy exercise_id tại queryString
    const params = new URLSearchParams(window.location.search);
    const exerciseId = params.get("exercise_id");

    getExerciseById(exerciseId).then(function (exercise) {
        exerciseData = exercise;
        showExerciseDetail(exerciseData);
    }).catch(function (error) {
        showNotFound();
    });
}

function showExerciseDetail(exercise) {
    let $name = document.getElementById("exercise-name");
    let $calories = document.getElementById("exercise-calories");
    let $difficulty = document.getElementById("exercise-difficulty");
    let $equipments = document.getElementById("exercise-equipments");
    let $muscle = document.getElementById("exercise-muscle");
    let $description = document.getElementById("exercise-description");
    let $instruction = document.getElementById("exercise-instruction");
    let $video = document.getElementById("exercise-video");

    $name.innerHTML = exercise.name;
    $calories.innerHTML = exercise.calories;
    $difficulty.innerHTML = exercise.difficulty;
    $equipments.innerHTML = exercise.equipments ?? "Không";
    $muscle.innerHTML = exercise.muscle.map(item => `<span class="badge bg-info">${item}</span>`).join('&nbsp;');
    $description.innerHTML = exercise.description;
    $instruction.innerHTML = exercise.instruction;
    $video.src = exercise.video;
}

function showNotFound() {

}

function showComments(comments) {

}
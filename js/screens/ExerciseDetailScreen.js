import "../app.js";
import { makeRateSelect, showRating } from "../helpers.js";
import { getExerciseById } from "../models/exercises.js";
import { getCurrentUser } from "../models/user.js";
import { getViewsByExerciseId } from "../models/user_exercise.js";

let exerciseData = {};

window.addEventListener('load', function () {
    // lấy exercise_id tại queryString
    const params = new URLSearchParams(window.location.search);
    const exerciseId = params.get("exercise_id");

    if (!exerciseId) {
        showNotFound();
        return;
    }

    // lấy chi tiết exercise
    getExerciseById(exerciseId).then(function (exercise) {
        exerciseData = exercise;
        showExerciseDetail(exerciseData);
    }).catch(function (error) {
        // console.log(error)
        showNotFound();
    });

    // xử lý thêm bình luận
    const $commentForm = document.getElementById('comment-form');
    const currentUser = getCurrentUser();
    if (currentUser == null) {
        $commentForm.classList.add('d-none');
    } else {
        let $rateSelect = makeRateSelect('rate-select');
        let $scoreError = document.getElementById('score-error');
        let $commentError = document.getElementById('comment-error');

        $commentForm.onsubmit = function (event) {
            event.preventDefault();
            let rate = $rateSelect.getValue();
            let comment = $commentForm.comment.value.trim();

            let isPassed = true;
        };
    }

    // lấy danh sách comment
    const $commentList = document.getElementById('comment-list');
    getViewsByExerciseId(exerciseId).then(function (views) {
        $commentList.innerHTML = '';

        const comments = views.filter(v => v.score !== null);

        for (let view of comments) {
            let $commentContainer = document.createElement('div');
            $commentContainer.className = 'comment-container border d-flex mb-3 p-3';
            $commentContainer.innerHTML = `
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" width="50" height="50">
                <div class="w-100 ms-3">
                    <div>
                        <b class="comment-user">${view.user?.name || 'User 1'}</b>
                        &nbsp;&nbsp;&nbsp;
                        ${showRating(view.score)}
                    </div>
                    <div>${view.comment}</div>
                </div>
            `;

            $commentList.append($commentContainer);
        }
    });

});

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
    $equipments.innerHTML = exercise.equipments.length > 0
        ? exercise.equipments.map(item => `<span class="badge bg-warning">${item}</span>`).join('&nbsp;')
        : "Không";
    $muscle.innerHTML = exercise.muscles.map(item => `<span class="badge bg-info">${item}</span>`).join('&nbsp;');
    $description.innerHTML = exercise.description;
    $instruction.innerHTML = exercise.instruction;
    $video.src = exercise.video;
}

function showNotFound() {
    const $exerciseDetail = document.getElementById('exercise-detail');
    const $notFound = document.getElementById('not-found');

    $exerciseDetail.classList.add('d-none');
    $notFound.classList.remove('d-none');
}

function showComments(comments) {

}

import "../app.js"
import { getCurrentUser } from "../models/user.js";


window.addEventListener('load', function () {
    const currentUser = getCurrentUser();
    if (!currentUser) {
        window.location = './login.html';
        return;
    }

    const $profileForm = document.getElementById('profile-form');
    $profileForm.onsubmit = function (event) {
        event.preventDefault();
    }

    // fill các giá trị vào trường thông tin tương ứng
    console.log(currentUser);
    $profileForm.fullname.value = currentUser.name;
    $profileForm.age.value = currentUser.age;
    $profileForm.gender.value = currentUser.gender;
    for (const option of $profileForm.purposes.options) {
        option.selected = currentUser.purposes.includes(option.value);
    }

    $profileForm.email.value = currentUser.email;

    const $changePasswordForm = document.getElementById('change-password-form');
    $changePasswordForm.onsubmit = function (event) {
        event.preventDefault();
    }
});
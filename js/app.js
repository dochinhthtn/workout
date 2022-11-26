import { autoLogin, getCurrentUser } from "./models/user.js";

window.addEventListener('load', function () {
    autoLogin();

    const $navLoggedIn = document.getElementById('nav-logged-in');
    const $navNotLoggedIn = document.getElementById('nav-not-logged-in');
    const currentUser = getCurrentUser();

    if (currentUser) {
        $navLoggedIn.classList.remove('d-none');
        $navNotLoggedIn.classList.add('d-none');
    } else {
        $navLoggedIn.classList.add('d-none');
        $navNotLoggedIn.classList.remove('d-none');
    }
});
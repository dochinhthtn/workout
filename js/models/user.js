import { transformDoc } from "../helpers.js";
import {
    auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile,
    setDoc, doc, db, getDocs, onAuthStateChanged, getDoc, collection
} from "../init.js";
import { getViewsByUserId } from "./user_exercise.js";

// cú pháp của function
/*
    function <tên_hàm> (<tham số 1>, ...) {
        <code của function ở đây>
    }

    <tên_hàm>(<giá trị 1>, ...);
*/

/**
 * Đăng nhập với email và password
 * @param {string} email 
 * @param {string} password
 * @returns {Promise}
 */
function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

/**
 * Đăng ký với tên, email, password. Ngoài ra có thêm các thông tin khác: tuổi, giới tính, mục đích tập luyện, ...
 * @param {string} name 
 * @param {string} email 
 * @param {string} password 
 * @param {object} otherInfo 
 * @returns {Promise}
 */
function register(name, email, password, otherInfo) {
    return createUserWithEmailAndPassword(auth, email, password).then(function (response) {
        // lấy user từ response
        const user = response.user;

        // cập nhật profile user: tên hiển thị
        updateProfile(user, {
            displayName: name
        });

        // lưu otherInfo vào firestore với ID user tương ứng
        setDoc(doc(db, "users", user.uid), {
            name: name,
            email: email,
            photoURL: "",
            ...otherInfo
        });
    });
}

function getUserById(userId) {
    return getDoc(doc(db, "users", userId)).then(function (response) {
        console.log(response);
        return transformDoc(response);
    });
}

/**
 * Lấy thông tin tài khoản hiện tại
 * @returns {object}
 */
function getCurrentUser() {
    const json = localStorage.getItem('current_user');
    if (!json) return null;
    return JSON.parse(json);
}

/**
 * Đồng bộ thông tin tài khoản hiện tại
 * @param {Object} data
 */
function syncCurrentUser(data) {
    localStorage.setItem('current_user', JSON.stringify(data));
}

/**
 * Load dữ liệu của người dùng đăng nhập
 */
function loadCurrentUserData(isReload = false) {
    const currentUser = auth.currentUser;
    if (!currentUser) return;

    if (!localStorage.getItem('current_user') || isReload) {
        let info = null;
        let views = null;
        return Promise.all([
            getUserById(currentUser.uid).then(data => info = data),
            getViewsByUserId(currentUser.uid).then(data => views = data)
        ]).then(function () {
            const tmp = { ...info, views };
            localStorage.setItem("current_user", JSON.stringify(tmp));
        });
    }

    return new Promise(function () {
        return getCurrentUser();
    });
}

/**
 * Đăng xuất tài khoản hiện tại
 */
function logout() {
    localStorage.removeItem('current_user');
    auth.signOut();
}

window.logout = logout;

/**
 * Tự động kiểm tra trạng thái đăng nhập của người dùng
 */
function autoLogin(loggedInCallback = null, notLoggedInCallback = null) {
    onAuthStateChanged(auth, function (user) {
        // code được thực thi khi: đăng nhập, đăng ký, đăng xuất
        if (user != null) {
            loadCurrentUserData().then(function () {
                loggedInCallback && loggedInCallback(user);
            });
        } else {
            notLoggedInCallback && notLoggedInCallback();
        }
    });
}

export { login, register, getCurrentUser, syncCurrentUser, logout, autoLogin };
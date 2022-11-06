import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, signOut } from "../init.js";

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
    return createUserWithEmailAndPassword(auth, email, password).then(function (user) {
        // cập nhật profile user: tên hiển thị
        updateProfile(user, {
            displayName: name
        });

        // TO-DO: lưu otherInfo vào firestore với ID user tương ứng
    });
}

/**
 * Lấy thông tin tài khoản hiện tại
 * @returns {object}
 */
function getCurrentUser() {
    return auth.currentUser;
}

/**
 * Đăng xuất tài khoản hiện tại
 */
function logout() {
    signOut();
}

export { login, register, getCurrentUser, logout };
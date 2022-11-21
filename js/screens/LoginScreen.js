import { register } from "../models/user.js";

// truy xuất form đăng ký
const $registerForm = document.getElementById('register-form');

// truy xuất các thẻ báo lỗi
const $emailError = document.getElementById('email-error');
const $passwordError = document.getElementById('password-error');

// xử lý khi form đăng ký được submit
$registerForm.onsubmit = function (event) {
    // chặn gửi dữ liệu đến action của form -> xử lý dữ liệu của form ngay trên trang web
    event.preventDefault();

    // lấy dữ liệu người dùng nhập vào các ô input, select
    let email = $registerForm.email.value;
    let password = $registerForm.password.value;
    
    // xóa nội dung của các thẻ thông báo lỗi
    $emailError.innerHTML = '';
    $passwordError.innerHTML = '';

    // kiểm tra tính hợp lệ của dữ liệu nhập vào
    let isPassed = true;

    if (email == '') {
        isPassed = false;
        $emailError.innerHTML = 'Email không được bỏ trống';
    }

    if (password == '') {
        isPassed = false;
        $passwordError.innerHTML = 'Mật khẩu không được bỏ trống';
    }

    //TODO:
    // check xem email & password có tồn tại trong hệ thống ko

    //TODO: 
    //check xem email và password có phải của cùng 1 user ko 



    //if (password != '' && passwordConfirmation != '' && password != passwordConfirmation) {
        //isPassed = false;
        //$passwordConfirmationError.innerHTML = 'Xác nhận mật khẩu không đúng';
    //}

    // nếu toàn bộ dữ liệu nhập vào đều hợp lệ -> thực hiện đăng ký tài khoản

    login("chinh.dovan@gmail.com", "12345678");

    if (isPassed) {
        register(email, password,
        }).then(function () {
            alert('Đăng ký tài khoản thành công');
        }).catch(function (error) {
            if (error.message.includes('email-already-in-use')) $emailError.innerHTML = 'Email này đã tồn tại. Vui lòng lựa chọn email khác!';
        });

    }

    // register thực thi bất đồng bộ -> cần phải có "then" để thực hiện sau khi chạy register xong
    // catch thực hiện việc bắt & xử lý lỗi nếu có khi đăng ký tài khoản

}
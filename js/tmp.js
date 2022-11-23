// let car = {
//     year: "2022",
//     name: "aaaa",
//     speed: 200,
// };

// console.log(car.year);
// console.log(car['year']);

// function sum3Numbers(a, b, c) {
//     return a + b + c;
// }

// let s = sum3Numbers(1,2,3);

// cho 1 mảng gồm thông tin các xe, mỗi xe có thuộc tính: tên, hãng, năm sản xuất, quốc gia
let cars = [
    { name: 'A', brand: 'A1', year: 2022, country: 'VN' },
    { name: 'B', brand: 'B1', year: 2019, country: 'US' },
    { name: 'C', brand: 'C1', year: 2017, country: 'US' },
    { name: 'D', brand: 'B1', year: 2010, country: 'VN' },
    { name: 'E', brand: 'A1', year: 2022, country: 'UK' },
];

// tìm những xe có năm sản xuất = 2022
// let result = [];
// for (let i = 0; i < cars.length; i++) {
//     if (cars[i].year == 2022) result.push(cars[i]);
// }

let result = cars.filter(function (car) {
    return car.year == 2022;
});
console.log(result);



// tìm những xe thuộc những quốc gia: Việt Nam, Hoa Kỳ
let result2 = [];
for (let i = 0; i < cars.length; i++) {
    if (cars[i].country == 'VN' || cars[i].country == 'US') result.push(cars[i]);
}

console.log(result2);

// DOM: Document Object Model
/* 
    Dùng DOM để:
        - Thay đổi nội dung, thuộc tính, định dạng của phần tử HTML trên trang web
        - Thêm mới, xóa thuộc tính của phần tử HTML
        - Thêm mới, xóa phần tử HTML
    
    Truy xuất (Lấy ra) 1 phần tử trên trang web
        - truy xuất thông qua id của phần tử: 
            document.getElementById('id của phần tử'); -> trả về 1 phần tử có id tương ứng, trả về null nếu ko có phần tử thỏa mãn

        - truy xuất thông qua class của phần tử
            document.getElementsByClassName('tên class'); -> trả về tất cả phần tử có class tương ứng, trả về tập rỗng nếu không có phần tử thỏa mãn

        - truy xuất thông qua tên phần tử
            document.getElementsByTagName('tên phần tử'); -> trả về tất cả phần tử có tên tương ứng, trả về tập rỗng nếu không có phần tử thỏa mãn

    Quy ước:
        biến lưu DOM -> có tiền tố $
*/

const $veryBigHeading = document.getElementById('very-big-heading');
const $meme = document.getElementById('meme');
const $smallerHeading = document.getElementById('smaller-heading-1');
const $willDeleteHeading = document.getElementById('smaller-heading-2');
const $newContent = document.getElementById('new-content');
const $clickMagicBtn = document.getElementById('click-magic-btn');
const $changeImgSrcInput = document.getElementById('change-img-src-input');

// thay đổi nội dung của phần tử
$veryBigHeading.innerHTML = 'Nội dung mới, 😐😀';
console.log('Nội dung của thẻ h1 là', $veryBigHeading.innerHTML);

// thêm/thay đổi giá trị của thuộc tính của 1 phần tử
$veryBigHeading.setAttribute('data-name', 'This is public');
$meme.setAttribute('src', 'https://tindep.com/wp-content/uploads/2019/07/na-ni-la-gi-1.jpg');
$meme.setAttribute('alt', "Nà ní meme");

// lấy giá trị thuộc tính của 1 phần tử
let memeSrc = $meme.getAttribute('src');

// xóa thuộc tính của 1 phần tử
$meme.removeAttribute('src');

// thay đổi định dạng của 1 phần tử
$veryBigHeading.style.color = 'green';
$veryBigHeading.style.backgroundColor = 'orange';
$veryBigHeading.style.fontStyle = 'italic';

$smallerHeading.style.color = 'red';
$smallerHeading.style.backgroundColor = 'green';
$smallerHeading.style.border = '10px solid pink';
$smallerHeading.style.cursor = 'pointer';

const $littleBigHeading = document.getElementById('little-big-heading');
$littleBigHeading.innerHTML = 'Goodbye 🤣';

// xóa 1 phần tử trên trang web
$willDeleteHeading.remove();

// thêm 1 phần tử vào trang web
// B1 - tạo ra phần tử (chưa xuất hiện trên trang web)
const $newElement = document.createElement('h1');
$newElement.innerHTML = 'Thẻ h1 mới';
$newElement.setAttribute('id', 'new-very-big-heading');

// chèn phần tử vào 1 phần tử có sẵn trên trang web
// document.body.append($newElement); // chèn phần tử vào cuối <body>
$newContent.append($newElement);


// bắt sự kiện click vào nút -> thực thi 1 chức năng nào đó
$clickMagicBtn.onclick = function () {
    // làm cho h1 bay màu (xóa khỏi trang web)
    $veryBigHeading.remove();
}

// bắt sự kiện thay đổi giá trị của ô input -> thực thi 1 chức năng nào đấy
$changeImgSrcInput.onchange = function () {
    // lấy ra giá trị nhập vào ô input
    let value = $changeImgSrcInput.value;

    // thay đổi src của img theo giá trị mới
    $meme.setAttribute('src', value);
}
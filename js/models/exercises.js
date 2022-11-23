// trong file này sẽ có 4 thao tác cơ bản: Create-Read-Update-Delete
// cái filters sẽ có nhiệm vụ lọc ra những bài tập nếu người dùng thực hiện thao tác tìm kiếm, sắp xếp
// chỗ filters a cứ truyền vào trước, xử lý thì để sau nhé
// 

import { transformDoc, transformDocs } from "../helpers.js";
import { addDoc, collection, db, doc, getDoc, getDocs } from "../init.js";

/**
 * Lấy toàn bộ exercises
 * @param {object} filters 
 * @returns {Promise}
 */
function getExercises(filters = null) {
    return getDocs(collection(db, "exercises")).then(function (response) {
        let result = transformDocs(response.docs);
        return result;
    });
}

/**
 * Lấy 1 exercise theo id
 * @param {object} filters 
 * @returns {Promise}
 */
function getExerciseById(id) {
    return getDoc(doc(db, "exercises", id)).then(function (response) {
        return transformDoc(response);
    });
}

/**
 * Tạo mới exericse
 * @param {*} exercise 
 * @returns {Promise}
 */
function createExercise(exercise) {
    return addDoc(collection(db, "exercises"), exercise);
}

export { getExercises, getExerciseById, createExercise };
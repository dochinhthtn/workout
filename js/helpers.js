// trong này chứa một vài hàm tiện ích để sử dụng

/**
 * Thực hiện biến đổi nhiều doc lấy từ firestore
 * @param {Array<object>} docs 
 * @return {object}
 */
function transformDocs(docs) {
    let result = [];

    for (let i = 0; i < docs.length; i++) {
        let newDoc = transformDoc(docs[i]);
        result.push(newDoc);
    }

    return result;
}

/**
 * Thực hiện biến đổi 1 document lấy từ firestore
 * @param {object} docs 
 * @return {object}
 */
function transformDoc(doc) {
    let newDoc = doc.data(); // newDoc là 1 object
    newDoc.id = doc.id; // thêm thuộc tính id vào newDoc
    newDoc._original = doc;
    newDoc._ref = doc.ref;
    console.log(newDoc)
    return newDoc;
}

/**
 * 
 * @param {Number} score
 * @return {String} 
 */
function showRating(score) {
    return `<i class="fas fa-star"></i>`.repeat(Math.ceil(score));
}

export { transformDocs, transformDoc, showRating };
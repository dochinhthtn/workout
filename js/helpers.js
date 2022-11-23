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
    return newDoc;
}

export { transformDocs, transformDoc };
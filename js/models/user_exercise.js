import { transformDocs } from "../helpers.js";
import { collection, db, getDocs, query, where } from "../init.js";

function getViewByUserId(userId) {
    const ref = query(collection(db, "user_exercise"), where("user_id", "==", userId));
    return getDocs(ref).then(function (response) {
        return transformDocs(response.docs);
    });
}

function getRatingByExerciseId(exerciseId) {
    const ref = query(
        collection(db, "user_exercise"),
        where("exercise_id", "==", exerciseId),
        where("exercise_id", "==", exerciseId)
    );
    return getDocs(ref).then(function (response) {
        return transformDocs(response.docs);
    });
}

export { getViewByUserId, getRatingByExerciseId };
import { transformDocs } from "../helpers.js";
import { addDoc, collection, db, doc, getDoc, getDocs, query, setDoc, where } from "../init.js";
import { getCurrentUser } from "./user.js";

function getViewsByUserId(userId) {
    const ref = query(
        collection(db, "user_exercise"),
        where("user_id", "==", userId)
    );
    return getDocs(ref).then(function (response) {
        return transformDocs(response.docs);
    });
}

function getViewsByExerciseId(exerciseId) {
    const ref = query(
        collection(db, "user_exercise"),
        where("exercise_id", "==", exerciseId)
    );
    return getDocs(ref).then(function (response) {
        return transformDocs(response.docs);
    });
}

function viewExercise(exerciseId, completed = false) {
    const currentUser = getCurrentUser();
    if (!currentUser) return;

    return createOrUpdateUserExercise(exerciseId, currentUser.id, {
        is_completed: completed
    });
}

function rateExercise(exerciseId, score, comment) {
    const currentUser = getCurrentUser();
    if (!currentUser) {
        alert("Bạn cần đăng nhập để thực hiện đánh giá");
        return;
    }

    return createOrUpdateUserExercise(exerciseId, currentUser.id, {
        score,
        comment
    });

}

async function createOrUpdateUserExercise(exerciseId, userId, data = {}) {
    const ref = query(
        collection(db, "user_exercise"),
        where("user_id", "==", userId),
        where("exercise_id", "==", exerciseId)
    );

    const response = await getDoc(ref);

    const tmp = {
        exercise_id: exerciseId,
        exercise: doc(db, "exercises", exerciseId),
        user_id: userId,
        user: doc(db, "users", userId),
        is_completed: false,
        is_favorite: false,
        score: null,
        comment: null,
        latest_watch_at: new Date().toISOString(),
        ...data,
    };

    if (response.docs.length == 0) {
        await addDoc(collection(db, "user_exercise"), tmp);
    } else {
        const id = response.docs[0].id;
        await setDoc(doc(db, "user_exercise", id), tmp);
    }
}

export { getViewsByUserId, getViewsByExerciseId, viewExercise, rateExercise, createOrUpdateUserExercise };
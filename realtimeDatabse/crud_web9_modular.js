import { ref as refDb, push, remove, set } from "firebase/database";
import { getDatabase } from "firebase/database";

function addRecord(collectionName, data) {
    const db = getDatabase();
    const collectionrefDb = refDb(db, collectionName);

    return push(collectionrefDb, data, (error) => {
        if (error) {
            console.error("Error adding document: ", error);
            return null;
        } else {
            console.log("Document written with ID: ", collectionrefDb.key);
            return collectionrefDb.key;
        }
    });
}


function deleteRecord(collectionName, documentId) {
    const db = getDatabase();
    const docrefDb = refDb(db, `${collectionName}/${documentId}`);

    return remove(docrefDb, (error) => {
        if (error) {
            console.error("Error removing document: ", error);
            return false;
        } else {
            console.log("Document successfully deleted!");
            return true;
        }
    });
}



function updateRecord(collectionName, documentId, data) {
    const db = getDatabase();
    const docrefDb = refDb(db, `${collectionName}/${documentId}`);

    return set(docrefDb, data, (error) => {
        if (error) {
            console.error("Error updating document: ", error);
            return false;
        } else {
            console.log("Document successfully updated!");
            return true;
        }
    });
}
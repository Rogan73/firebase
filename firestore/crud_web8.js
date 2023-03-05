function addRecord(collectionName, data) {
    // Get a reference to the collection
    const collectionRef = firebase.firestore().collection(collectionName);

    // Add the new document to the collection
    return collectionRef.add(data)
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            return docRef.id;
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
            return null;
        });
}

function deleteRecord(collectionName, documentId) {
    // Get a reference to the document
    const docRef = firebase.firestore().collection(collectionName).doc(documentId);

    // Delete the document
    return docRef.delete()
        .then(() => {
            console.log("Document successfully deleted!");
            return true;
        })
        .catch((error) => {
            console.error("Error removing document: ", error);
            return false;
        });
}

function updateRecord(collectionName, documentId, data) {
    // Get a reference to the document
    const docRef = firebase.firestore().collection(collectionName).doc(documentId);

    // Update the document
    return docRef.update(data)
        .then(() => {
            console.log("Document successfully updated!");
            return true;
        })
        .catch((error) => {
            console.error("Error updating document: ", error);
            return false;
        });
}
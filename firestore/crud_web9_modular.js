import { getFirestore, collection, addDoc } from "firebase/firestore";

async function addRecord(collectionName, data) {
    const db = getFirestore();
    const collectionRef = collection(db, collectionName);
    try {
        const docRef = await addDoc(collectionRef, data);
        console.log("Document written with ID: ", docRef.id);
        return docRef.id;
    } catch (error) {
        console.error("Error adding document: ", error);
        return null;
    }
}


import { getFirestore, doc, deleteDoc } from "firebase/firestore";

async function deleteRecord(collectionName, documentId) {
    const db = getFirestore();
    const docRef = doc(db, collectionName, documentId);
    try {
        await deleteDoc(docRef);
        console.log("Document successfully deleted!");
        return true;
    } catch (error) {
        console.error("Error removing document: ", error);
        return false;
    }
}


import { getFirestore, doc, updateDoc } from "firebase/firestore";

async function updateRecord(collectionName, documentId, data) {
    const db = getFirestore();
    const docRef = doc(db, collectionName, documentId);
    try {
        await updateDoc(docRef, data);
        console.log("Document successfully updated!");
        return true;
    } catch (error) {
        console.error("Error updating document: ", error);
        return false;
    }
}
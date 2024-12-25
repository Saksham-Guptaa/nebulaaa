import { useState, useEffect } from "react";
import { collection, getDocs, query, where, addDoc, updateDoc, doc, deleteDoc, DocumentData, Query, CollectionReference, WhereFilterOp } from "firebase/firestore";
import { db } from "../utils/firebase";

export const useFirestore = (collectionName: string) => {
  const [documents, setDocuments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchDocuments = async (filters?: { field: string; operator: WhereFilterOp; value: any }[]) => {
    setLoading(true);
    try {
      let ref: CollectionReference<DocumentData> | Query<DocumentData> = collection(db, collectionName);
      if (filters) {
        const conditions = filters.map((filter) => where(filter.field, filter.operator, filter.value));
        ref = query(ref, ...conditions);
      }
      const snapshot = await getDocs(ref);
      const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setDocuments(docs);
    } catch (error) {
      console.error("Error fetching documents:", error);
    } finally {
      setLoading(false);
    }
  };

  const addDocument = async (data: any) => {
    try {
      await addDoc(collection(db, collectionName), data);
    } catch (error) {
      console.error("Error adding document:", error);
    }
  };

  const updateDocument = async (id: string, data: any) => {
    try {
      await updateDoc(doc(db, collectionName, id), data);
    } catch (error) {
      console.error("Error updating document:", error);
    }
  };

  const deleteDocument = async (id: string) => {
    try {
      await deleteDoc(doc(db, collectionName, id));
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };

  return { documents, fetchDocuments, addDocument, updateDocument, deleteDocument, loading };
};

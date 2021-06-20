import React, { createContext } from 'react'
import { firestore } from '../config/firebase';
import { useCollection } from 'react-firebase-hooks/firestore';

export const FirestoreContext = createContext();
export const FirestoreConsumer = FirestoreContext.Consumer;

export const FirestoreProvider = ({ children }) => {
  const query = firestore.collection('pages');
  const [pages, loading, error] = useCollection(query);

  return (
    <FirestoreContext.Provider value={{ pages, loading, error }}>
      {children}
    </FirestoreContext.Provider>
  )
}

import React, { useContext } from 'react';
import { FirestoreContext } from '../../context';

export const Home = () => {
  const { pages, loading, error } = useContext(FirestoreContext);

  return (
    <div>
      <h1>Home</h1>

      {error && error}
      {loading && 'Loading...'}

      {pages && (
        pages.docs.map((doc, idx) => {
          const page = doc.data();
          return (
            <div key={idx}>
              {page.title}
              <p>{page.body}</p>
            </div>
          )
        })
      )}
    </div>
  )
}

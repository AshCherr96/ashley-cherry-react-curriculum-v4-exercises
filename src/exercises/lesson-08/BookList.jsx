import React, { useMemo } from 'react';
import {
  useRenderCounter,
  RenderCounter,
} from '../../private/components/renderCounter.jsx';
import BookCard from './BookCard.jsx';
import styles from './BookList.module.css';

// Book List Component - Expensive sorting operation runs on every render
function BookList({ books, sortBy, favorites, onToggleFavorite }) {
  const { count } = useRenderCounter('BookList');

  // TODO #3: Optimize this expensive sorting operation with useMemo
  // This sorting runs on every render, even when books haven't changed
  const sortedBooks = useMemo(() => {
    return [...books].sort((a, b) => {
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      if (sortBy === 'author') return a.author.localeCompare(b.author);
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'year') return b.year - a.year;
      if (sortBy === 'price') return a.price - b.price;
      return 0;
    });
  }, [books, sortBy]);

  return (
    <div className={styles.listContainer}>
      <RenderCounter
        componentName="BookList"
        count={count}
        className={styles.renderCounter}
      />
      <h2 className={styles.listTitle}>Books ({sortedBooks.length} found)</h2>
      {sortedBooks.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          isFavorite={favorites.includes(book.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}

export default BookList;

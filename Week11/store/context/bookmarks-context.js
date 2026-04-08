import { createContext, useState } from "react";

export const BookmarksContext = createContext({
  // create context/basic blueprint
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function BookmarksContextProvider({ children }) {
  // Create state variable for bookmark ids list
  const [bookmarkIds, setBookmarkIds] = useState([]);

  function addFavorite(id) {
    setBookmarkIds((currentBookmarkIds) => {
      // Add bookmark to current bookmarks
      return [...currentBookmarkIds, id];
    });
  }

  function removeFavorite(id) {
    setBookmarkIds((currentBookmarkIds) => {
      // Take current bookmarks, and remove bookmark matching bookid
      return currentBookmarkIds.filter((bookId) => bookId != id);
    });
  }

  const value = {
    // Assign state/list and functions
    ids: bookmarkIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <BookmarksContext.Provider value={value}>
      {children}
    </BookmarksContext.Provider>
  );
}

export default BookmarksContextProvider;
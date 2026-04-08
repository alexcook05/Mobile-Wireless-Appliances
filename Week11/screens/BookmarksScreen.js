import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { BookmarksContext } from "../store/context/bookmarks-context";
import { ARTICLES } from "../data/dummy_data";
import List from "../components/List/List";
import Colors from "../constants/colors";

function BookmarksScreen() {
  // Create context for bookmarked articles
  const bookmarkedArticlesCtx = useContext(BookmarksContext);

  // Filter through the all articles and only add articles that are bookmarked
  const bookmarkedArticles = ARTICLES.filter((articleItem) => {
    return bookmarkedArticlesCtx.ids.includes(articleItem.id);
  });

  return <List items={bookmarkedArticles} />;
}

export default BookmarksScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.primary300,
  },
});

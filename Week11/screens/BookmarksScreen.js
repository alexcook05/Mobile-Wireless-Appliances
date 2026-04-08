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

  // If there are no bookmarked articles
  if (bookmarkedArticles.length === 0) {
    return (
      // Display no saved articles message
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no saved articles yet!</Text>
      </View>
    );
  } else { // Else return the bookmarked articles
    return <List items={bookmarkedArticles} />;
  }
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
    fontFamily: "playfairBold",
    color: Colors.primary300,
  },
});

import { View, Text, StyleSheet, Image } from "react-native";
import { useState, useLayoutEffect, useContext } from "react";
import { ARTICLES } from "../data/dummy_data";
import BookmarkButton from "../components/BookmarkButton";
import Colors from "../constants/colors";
import { BookmarksContext } from "../store/context/bookmarks-context";

function ArticleDetailsScreen(props) {

  // Create context for bookmarked articles
  const bookmarkedArticlesCtx = useContext(BookmarksContext);

  // Get selected article from NewsItem
  const articleId = props.route.params.articleId;
  // Find article matching selected article's id
  const selectedArticle = ARTICLES.find((article) => article.id === articleId);

  // Check if current bookmarks includes current article the page is on
  const articleIsBookmarked = bookmarkedArticlesCtx.ids.includes(articleId)

  function changeBookmarkStatusHandler(){
    // Call this function when bookmark button is pressed
    if (articleIsBookmarked) { // if article is already bookedmarked, remove it
      bookmarkedArticlesCtx.removeFavorite(articleId);

    } else { // else bookmark it
      bookmarkedArticlesCtx.addFavorite(articleId)
    }
  }

  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: "",
      headerRight: () => {
        return (
          <BookmarkButton
            pressed={articleIsBookmarked}
            onPress={changeBookmarkStatusHandler}
          />
        );
      },
    });
  }, [props.navigation, changeBookmarkStatusHandler]);

  return (
    <View style={styles.rootContainer}>
      <View style={styles.imageContainer}>
        <Image // Display article image
          style={styles.image}
          source={{ uri: selectedArticle.imageUrl }}
        />
      </View>

      <View style={styles.infoContainer}>
        {/* Display article headline/date/author/agency/description */}
        <Text style={styles.headline}>{selectedArticle.headline}</Text>
        <Text style={styles.subtitle}>{selectedArticle.date}</Text>
        <Text style={styles.author}>By: {selectedArticle.author}</Text>

        <Text style={styles.subtitle}>Agency: {selectedArticle.agency}</Text>

        <Text style={styles.description}>{selectedArticle.description}</Text>
      </View>
    </View>
  );
}
export default ArticleDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  imageContainer: {
    marginVertical: 10,
    height: 300,
  },
  image: {
    height: "100%",
    resizeMode: "cover",
    borderRadius: 7,
  },
  infoContainer: {
    borderRadius: 7,
    backgroundColor: Colors.primary500o8,
    flex: 1,
    alignItems: "center",
  },
  headline: {
    color: Colors.primary300,
    textAlign: "center",
    fontSize: 35,
    fontFamily: "playfairBold",
    paddingBottom: 5,
  },
  subtitle: {
    color: Colors.primary300,
    fontSize: 20,
    fontFamily: "playfair",
    paddingBottom: 5,
  },
  author: {
    color: Colors.primary300,
    fontSize: 25,
    fontFamily: "playfair",
    paddingBottom: 5,
  },
  description: {
    color: Colors.primary300,
    width: "90%",
    textAlign: "justify",
    fontSize: 15,
    fontFamily: "playfair",
  },
});

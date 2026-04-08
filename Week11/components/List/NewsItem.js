import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

function NewsItem(props) {
  const navigation = useNavigation();

    function selectedArticleHandler() {
      // Navigate to article details screen and record selected article id
      navigation.navigate("ArticleDetail", {
        articleId: props.id,
      });
    }

  return (
    <View
      style={[
        styles.itemContainer,
        // alternate news item background color
        { backgroundColor: props.articleIndex % 2 == 0 ? "#ccc" : "#fff" },
      ]}
    >
      {/* When article is pressed, move to details screen */}
      <Pressable onPress={selectedArticleHandler}>
        {/* Display article image */}
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
        </View>
        <View style={styles.infoContainer}>
          {/* Display article headline and publication date */}
          <Text style={styles.headline}>{props.headline}</Text>
          <Text style={styles.space}>
            Published: {props.date}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default NewsItem;

const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 5,
    paddingTop: 5,
    marginBottom: 10,
    borderRadius: 7,
  },
  button: {
    flex: 1,
  },
  imageContainer: {
    height: 300
  },
  image: {
    height: "100%",
    resizeMode: "cover",
    borderRadius: 7,
  },
  infoContainer: {
    flex: 1,
    alignItems: "center"
  },
  headline: {
    fontSize: 35,
    fontFamily: "playfairBold",
    paddingBottom: 5,
    textAlign: "center"
  },
  space: {
    fontSize: 25,
    fontFamily: "playfair",
    paddingBottom: 5
  },
  address: {
    textAlign: "center",
    width: "100%",
    fontSize: 15,
    fontFamily: "playfair",
    paddingBottom: 5
  }
});

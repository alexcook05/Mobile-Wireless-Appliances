import { View, StyleSheet, FlatList } from "react-native";
import NewsItem from "./NewsItem";

function List(props) {
  // Function to render news item
  function renderNewsItem(itemData) {
    const newsItemProps = {
      // Get item data and store the props
      id: itemData.item.id,
      category: itemData.item.category,
      headline: itemData.item.headline,
      date: itemData.item.date,
      author: itemData.item.author,
      agency: itemData.item.agency,
      imageUrl: itemData.item.imageUrl,
      description: itemData.item.description,
      articleIndex: itemData.index,
    };
    // Return data in NewsItem component with article details
    return <NewsItem {...newsItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
      // Display articles in flat list
        data={props.items}
        keyExtractor={(item) => item.id}
        // render news items
        renderItem={renderNewsItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "black"
  },
  backgroundImage: {
    opacity: 0.1,
  },
});

import List from "../components/List/List";
import { ARTICLES } from "../data/dummy_data";

function TechNewsScreen() {
  // Set category to match against articles
  const category = "Tech";
  // Filter through articles and find matching categories
  const displayedArticles = ARTICLES.filter((articleItem) => {
    return articleItem.category === category;
  });
  // Return articles with matching categories
  return <List items={displayedArticles} />;
}

export default TechNewsScreen;

class Article {
  // Create class contructor
    constructor(
      // Create props
      id,
      category,
      headline,
      date,
      author,
      agency,
      imageUrl,
      description
    ) {
      // Store props
      this.id = id;
      this.category = category;
      this.headline = headline;
      this.date = date;
      this.author = author;
      this.agency = agency;
      this.imageUrl = imageUrl;
      this.description = description;
    }
  
    toString() {
      return `${this.category} News Article - Headline: ${this.headline} - Author: ${this.author} - Agency: ${this.agency} - Date: ${this.date} - Description: ${this.description} - Image URL: ${this.imageUrl}`;
    }
  }
  
  export default Article;
  
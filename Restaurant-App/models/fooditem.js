class FoodItem {
  // Create class contructor
    constructor(
      // Create props
      id,
      category,
      name,
      price,
      calories,
      ingredients,
      imageUrl,
      description
    ) {
      // Store props
      this.id = id;
      this.category = category;
      this.name = name;
      this.price = price;
      this.calories = calories;
      this.ingredients = ingredients;
      this.imageUrl = imageUrl;
      this.description = description;
    }
  
    toString() {
      return `Food Item - ${this.name}\nFood Category - ${this.category}\nFood Price - ${this.price}\nCalories - ${this.calories}\nIngredients - ${this.ingredients}\nDescription - ${this.description}`;
    }
  }
  
  export default FoodItem;
  
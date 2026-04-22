import FoodItem from "../models/fooditem";
import Category from "../models/foodcategories";

// Create food category data
export const CATEGORIES = [
    new Category(
        1,
        "Entrees",
        "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80"
    ),
    new Category(
        2,
        "Desserts",
        "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80"
    )
]

// Create food item data
export const FOODITEMS = [
    new FoodItem (
        1,
        "Entrees",
        "Chicken Sandwich",
        4.99,
        450,
        "• Buttered White Bun\n• Fried Chicken Filet\n• 2 Pickles",
        "https://www.alyonascooking.com/wp-content/uploads/2020/04/chick-fil-a-chicken-sandwich-6.jpg",
        "A boneless breast of chicken season to perfection, freshly breaded, pressure cooked in 100% refined peanut oil and served on a toasted, buttery bun with dill pickle chips."
    ),
    new FoodItem (
        2,
        "Entrees",
        "Grilled Chicken Sandwich",
        4.99,
        450,
        "• Buttered White Bun\n• Fried Chicken Filet\n• 2 Pickles",
        "https://www.alyonascooking.com/wp-content/uploads/2020/04/chick-fil-a-chicken-sandwich-6.jpg",
        "A boneless breast of chicken season to perfection, freshly breaded, pressure cooked in 100% refined peanut oil and served on a toasted, buttery bun with dill pickle chips."
    ),
    new FoodItem (
        3,
        "Desserts",
        "Sundae",
        4.99,
        450,
        "• Buttered White Bun\n• Fried Chicken Filet\n• 2 Pickles",
        "https://www.alyonascooking.com/wp-content/uploads/2020/04/chick-fil-a-chicken-sandwich-6.jpg",
        "A boneless breast of chicken season to perfection, freshly breaded, pressure cooked in 100% refined peanut oil and served on a toasted, buttery bun with dill pickle chips."
    ),
    new FoodItem (
        4,
        "Desserts",
        "Banana Sundae",
        4.99,
        450,
        "• Buttered White Bun\n• Fried Chicken Filet\n• 2 Pickles",
        "https://www.alyonascooking.com/wp-content/uploads/2020/04/chick-fil-a-chicken-sandwich-6.jpg",
        "A boneless breast of chicken season to perfection, freshly breaded, pressure cooked in 100% refined peanut oil and served on a toasted, buttery bun with dill pickle chips."
    ),
];
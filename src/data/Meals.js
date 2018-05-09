import MealItemModel from '../models/MealItemModel';

const meals = [
    ['Mediterranean Turkey Burger', 248, 30, 6, 12],
    ['Rx Bar', 210, 12, 22, 8],
    ['Total 2% Yogurt', 140, 20, 6, 4],
    ['Orgain Protein', 150, 21, 15, 4],
    ['Casein Protein', 120, 24, 3, 1],
    ['Lemon Chicken', 276, 32, 1, 14],
    ['Latte', 136, 7, 11, 7],
    ['Bagel', 245, 10, 48, 1.5],
    ['Eggs', 180, 12, 2, 14]
];

let mealItems = [];
meals.forEach(function(meal) {
    mealItems.push(new MealItemModel({
        name: meal[0],
        calories: meal[1],
        protein: meal[2],
        carbs: meal[3],
        fat: meal[4]
    }));
});

export default mealItems;

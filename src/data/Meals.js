import MealItemModel from '../models/MealItemModel';

const meals = [
    // ['Mediterranean Turkey Burger', 248, 30, 6, 12],
    // ['Rx Bar', 210, 12, 22, 8],
    // ['Total 2% Yogurt', 140, 20, 6, 4],
    // ['Orgain Protein', 150, 21, 15, 4],
    // ['Casein Protein', 120, 24, 3, 1],
    // ['Lemon Chicken', 276, 32, 1, 14],
    // ['Latte', 136, 7, 11, 7],
    // ['Bagel', 245, 10, 48, 1.5],
    // ['Scrambled Eggs (2)', 180, 12, 2, 14],
    // ['Almonds (12)', 82, 3, 3, 7],
    ['Babybel Cheese', 70, 5, 0, 6]
];

let mealItems = [];
meals
    // sort meals alphabetically according to name
    .sort(function(a, b) {
        return a[0].localeCompare(b[0]);
    })
    // create MealItemModel objects to seed database
    .forEach(function(meal) {
        mealItems.push(new MealItemModel({
            name: meal[0],
            calories: meal[1],
            protein: meal[2],
            carbs: meal[3],
            fat: meal[4]
        }));
    });

export function addMealItem() {
    mealItems.push(new MealItemModel({
        name: 'foo bar',
        calories: 100,
        protein: 50,
        carbs: 3,
        fat: 9
    }));
    console.log(mealItems);
}

export function getMealItems() {
    return mealItems;
}

export default { addMealItem, getMealItems };

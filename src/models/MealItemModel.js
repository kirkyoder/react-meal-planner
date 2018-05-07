class MealItemModel {
    constructor(properties = {}) {
        this.name = properties.name;
        this.calories = properties.calories;
        this.protein = properties.protein;
        this.carbs = properties.carbs;
        this.fat = properties.fat;
    }
}

export default MealItemModel;
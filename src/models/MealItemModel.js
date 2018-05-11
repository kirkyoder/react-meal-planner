class MealItemModel {
    constructor(properties = {}) {
        this.name = properties.name;
        this.calories = tryParseFloat(properties.calories);
        this.protein = tryParseFloat(properties.protein);
        this.carbs = tryParseFloat(properties.carbs);
        this.fat = tryParseFloat(properties.fat);
    }
}

function tryParseFloat(value) {
    let float = parseFloat(value);
    if (!isFinite(float)) {
        return 0;
    }

    return float;
}

export default MealItemModel;

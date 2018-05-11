export default {
    isPositiveNumber(val) {
        const parsed = parseFloat(val);
        return {
            isValid: isFinite(parsed) && parsed >= 0,
            message: 'This field must be a positive number.'
        };
    },

    isValidString(val) {
        const isValid = (
            val !== null &&
            val !== undefined &&
            val.length > 0
        );

        return {
            isValid: isValid,
            message: 'This field must be a valid string.'
        }
    }
};

export const keyBy = (array, key) => {
    return array.reduce((result, item) => {
        if (item[key] !== undefined) {
            result[item[key]] = item;
        }
        return result;
    }, {});
};
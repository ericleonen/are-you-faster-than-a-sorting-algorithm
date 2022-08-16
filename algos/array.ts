export const generateRandomArray = (maxValue: number, size: number) => {
    const arr = [];

    for (let i = 1; i <= size; i++) {
        arr.push(i);
    }

    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    return arr;
};

export const isSorted = (arr: Array<number>) => {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }

    return true;
}
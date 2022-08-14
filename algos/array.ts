export const generateRandomArray = (maxValue: number, size: number) => {
    const arr = [];

    for (let i = 0; i < size; i++) {
        const rand = Math.random() * (maxValue) + 1;
        arr.push(Math.floor(rand));
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
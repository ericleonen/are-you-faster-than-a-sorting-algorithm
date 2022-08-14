export interface SortingAlgorithm {
    name: string,
    icon: string
};

interface IAlgosData {
    [route: string]: SortingAlgorithm
};

const bogoSort = {
    name: "BogoSort",
    icon: "🗑️"
};

const selectionSort = {
    name: "Selection Sort",
    icon: "☝️"
};

const bubbleSort = {
    name: "Bubble Sort",
    icon: "🫧"
};

const insertionSort = {
    name: "Insertion Sort",
    icon: "🔍"
};

const quickSort = {
    name: "QuickSort",
    icon: "⚡"
};

export const algosData: IAlgosData = {
    bogoSort,
    selectionSort,
    bubbleSort,
    insertionSort,
    quickSort
};
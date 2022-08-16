import { useEffect, useState } from "react";
import { SortingAlgoProps } from "./SortingAlgo";


const QuickSort = ({ children, swap, arr, setComputerSelections, setComputerDone }: SortingAlgoProps) => {
    const [intervalStack, setIntervalStack] = useState([[0, arr.length - 1]]);
    const [pivot, setPivot] = useState(arr[arr.length - 1]);
    const [left, setLeft] = useState(0);
    const [right, setRight] = useState(arr.length - 1);

    const addIntervalStack = (interval: Array<number>) => {
        setIntervalStack(stack => [...stack, interval]);
    }
    const popIntervalStack = () => {
        setIntervalStack(stack => stack.slice(1));
    };

    useEffect(() => {
        const delay = setTimeout(() => {
            if (intervalStack.length > 0) {
                setComputerSelections([left, right]);
                if (left < 0 && right < 0 && pivot < 0) {
                    const interval = intervalStack[0];

                    setLeft(interval[0]);
                    setRight(interval[1]);
                    setPivot(arr[interval[1]]);
                }
                else if (left < right) {
                    let canSwap = true;

                    if (arr[left] < pivot) {
                        setLeft(left => left + 1);
                        canSwap = false;
                    }
                    if (arr[right] > pivot) {
                        setRight(right => right - 1);
                        canSwap = false;
                    }

                    if (canSwap) {
                        swap(left, right);
                    }
                }
                else {
                    const interval = intervalStack[0];

                    if (interval[0] < left - 1) {
                        addIntervalStack([interval[0], left - 1])
                    }
                    if (interval[1] > left + 1) {
                        addIntervalStack([left + 1, interval[1]])
                    }

                    popIntervalStack();

                    setLeft(-1);
                    setRight(-1);
                    setPivot(-1);
                }
            }
            else {
                setComputerSelections([0]);
                setComputerDone(true);
            }
        }, 200);

        return () => clearTimeout(delay);
    }, [intervalStack, setIntervalStack, pivot, setPivot, left, setLeft, right, setRight, arr, setComputerDone, setComputerSelections]);
    
    return children;
};

export default QuickSort;
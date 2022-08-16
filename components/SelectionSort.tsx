import { useEffect, useState } from "react";
import { SortingAlgoProps } from "./SortingAlgo";


const SelectionSort = ({ children, swap, arr, setComputerSelections, setComputerDone }: SortingAlgoProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [minIndex, setMinIndex] = useState(0);
    const [minFinderIndex, setMinFinderIndex] = useState(1);

    useEffect(() => {
        const delay = setTimeout(() => {
            if (currentIndex < arr.length - 1) {
                setComputerSelections([currentIndex, minIndex, minFinderIndex])

                if (minFinderIndex < arr.length) {
                    if (arr[minFinderIndex] < arr[minIndex]) {
                        setMinIndex(minFinderIndex);
                    }

                    setMinFinderIndex(index => index + 1);
                }
                else {
                    swap(currentIndex, minIndex);
                    setMinIndex(currentIndex + 1);
                    setCurrentIndex(index => index + 1);
                    setMinFinderIndex(currentIndex + 2);
                }
            }
            else {
                setComputerSelections([0]);
                setComputerDone(true);
            }
        }, 200);

        return () => clearTimeout(delay);
    }, [currentIndex, setCurrentIndex, minIndex, setMinIndex, minFinderIndex, setMinFinderIndex, arr, setComputerDone, setComputerSelections]);
    
    return children;
};

export default SelectionSort;
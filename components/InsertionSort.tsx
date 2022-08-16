import { useEffect, useState } from "react";
import { SortingAlgoProps } from "./SortingAlgo";

const InsertionSort = ({ children, swap, arr, setComputerSelections, setComputerDone }: SortingAlgoProps) => {
    const [mainIndex, setMainIndex] = useState(1);
    const [secondIndex, setSecondIndex] = useState(1);

    useEffect(() => {
        const delay = setTimeout(() => {
            if (mainIndex < arr.length) {
                setComputerSelections([mainIndex, secondIndex]);

                if (secondIndex > 0 && arr[secondIndex] < arr[secondIndex - 1]) {
                    swap(secondIndex, secondIndex - 1);
    
                    setSecondIndex(index => index - 1);
                }
                else {
                    setMainIndex(index => index + 1);
                    setSecondIndex(mainIndex + 1);
                }
            }
            else {
                setComputerSelections([0]);
                setComputerDone(true);
            }
        }, 200);

        return () => clearTimeout(delay);
    }, [mainIndex, setMainIndex, secondIndex, setSecondIndex, arr, setComputerDone, setComputerSelections, swap])
    
    return children;
};

export default InsertionSort;
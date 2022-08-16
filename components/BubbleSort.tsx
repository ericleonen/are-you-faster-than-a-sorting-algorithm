import { useEffect, useState } from "react";

import { SortingAlgoProps } from "./SortingAlgo";

const BubbleSort = ({ children, swap, arr, setComputerSelections, setComputerDone }: SortingAlgoProps) => {
    const [index1, setIndex1] = useState(0);
    const [index2, setIndex2] = useState(0);

    useEffect(() => {
        const delay = setTimeout(() => {
            if (index1 < arr.length - 1) {
                setComputerSelections([index1, index2]);

                if (index2 >= arr.length - 1 - index1) {
                    setIndex1(index => index + 1);
                    setIndex2(0);
                }
                else if (arr[index2] > arr[index2 + 1]) {
                    swap(index2, index2 + 1);
                    setIndex2(index => index + 1)
                }
                else {
                    setIndex2(index => index + 1);
                }
            }
            else {
                setComputerSelections([0]);
                setComputerDone(true);
            }
        }, 200);

        return () => clearTimeout(delay);
    }, [index1, setIndex1, index2, setIndex2, arr, setComputerDone, setComputerSelections, swap]);
    
    return children;
};

export default BubbleSort;
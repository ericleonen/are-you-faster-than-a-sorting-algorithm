import { useEffect } from "react";
import { isSorted } from "../algos/array";
import { SortingAlgoProps } from "./SortingAlgo";


const BogoSort = ({ children, swap, arr, setComputerSelections, setComputerDone }: SortingAlgoProps) => {
    useEffect(() => {
        const delay = setTimeout(() => {
            if (!isSorted(arr)) {
                const index1 = Math.floor(Math.random() * arr.length);
                const index2 = Math.floor(Math.random() * arr.length);
                
                setComputerSelections([index1, index2]);

                swap(index1, index2);
            }
            else {
                setComputerSelections([0]);
                setComputerDone(true);
            }
        }, 200);

        return () => clearTimeout(delay);
    });
    
    return children;
};

export default BogoSort;
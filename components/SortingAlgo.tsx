import BogoSort from "./BogoSort";
import BubbleSort from "./BubbleSort";
import InsertionSort from "./InsertionSort";
import QuickSort from "./QuickSort";
import SelectionSort from "./SelectionSort";

export interface SortingAlgoProps {
    algo: string,
    children: any,
    swap: Function,
    arr: Array<number>,
    setComputerSelections: Function,
    setComputerDone: Function
};

const SortingAlgo = (props: SortingAlgoProps) => {
    if (props.algo === "bogoSort") {
        return <BogoSort {...props} />;
    }
    else if (props.algo === "selectionSort") {
        return <SelectionSort {...props} />;
    }
    else if (props.algo === "bubbleSort") {
        return <BubbleSort {...props} />
    }
    else if (props.algo === "insertionSort") {
        return <InsertionSort {...props} />
    }
    else if (props.algo === "quickSort") {
        return <QuickSort {...props} />
    }
};

export default SortingAlgo;
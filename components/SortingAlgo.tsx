import BubbleSort from "./BubbleSort";
import InsertionSort from "./InsertionSort";
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
        return <></>;
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
};

export default SortingAlgo;
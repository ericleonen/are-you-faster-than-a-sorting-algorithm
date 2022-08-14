interface ArrayBarProps {
    size: number,
    maxSize: number,
    player: "player" | "computer",
    index: number,
    selected: boolean,
    addPlayerSelection?: Function
};

const ArrayBar = ({ size, maxSize, index, player, selected, addPlayerSelection }: ArrayBarProps) => {
    if (!selected) {
        if (player === "computer") {
            return (
                <div 
                    className="w-6 ml-3 bg-gray-200" 
                    style={{ "height": (size / maxSize * 13) + "rem" }}
                />
            );
        }
        else {
            return (
                <button 
                    onClick={() => addPlayerSelection(index)}
                    className="w-6 ml-3 bg-gray-200 hover:bg-green-300" 
                    style={{ "height": (size / maxSize * 13) + "rem" }}
                />
            );
        }
    }
    else {
        return (
            <div
                className="w-6 ml-3 bg-green-300" 
                style={{ "height": (size / maxSize * 13) + "rem" }}
            />
        );
    }
};

export default ArrayBar;
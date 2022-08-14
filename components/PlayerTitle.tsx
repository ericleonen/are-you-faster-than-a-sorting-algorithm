interface PlayerTitleProps {
    icon: string,
    name: string,
    size: "large" | "tiny"
};

const PlayerTitle = ({ icon, name, size }: PlayerTitleProps) => {
    
    if (size === "large") {
        return (
            <h2 className="text-6xl font-medium">{icon} {name}</h2>
        );
    }
    else {
        return (
            <h2 className="text-2xl font-medium">{icon} {name}</h2>
        );
    }
};

export default PlayerTitle;
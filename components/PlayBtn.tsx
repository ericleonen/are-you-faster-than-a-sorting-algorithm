interface PlayBtnProps {
    onClick: Function
};

const PlayBtn = ({ onClick }: PlayBtnProps) => {
    return (
        <button 
            onClick={() => onClick()}
            className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
            <div className="text-8xl">
                ▶️
            </div>
        </button>
    );
};

export default PlayBtn;
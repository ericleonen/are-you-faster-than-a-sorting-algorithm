const PlayerSection = ({ children }: any) => {
    return (
        <div className="h-1/2 w-full flex flex-col justify-center items-center border-b-2 border-gray-100">
            {children}
        </div>
    );
};

export default PlayerSection;
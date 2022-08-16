
const Shader = ({ children }: any) => {
    return (
        <div className="absolute h-screen w-screen bg-black/70">
            {children}
        </div>
    );
};

export default Shader;
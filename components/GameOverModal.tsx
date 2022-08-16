import Link from "../node_modules/next/link";
import Shader from "./Shader";

interface GameOverModalProps {
    algoName: string,
    winner: string
};

const GameOverModal = ({ algoName, winner }: GameOverModalProps) => {
    return (
        <Shader>
            <div className="absolute flex flex-col items-center justify-center p-16 bg-white top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                <h3 className="text-3xl font-medium">
                    {winner === "player" ? "You beat " + algoName : algoName + " beat you."}
                </h3>
                <Link href="/">
                    <div className="text-xl px-4 py-2 bg-gray-200 rounded-xl mt-8 cursor-pointer hover:bg-gray-300">Go home 🏠</div>
                </Link>
            </div>
        </Shader>
    );
};

export default GameOverModal;
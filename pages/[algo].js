import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { algosData } from "../algos/algosData";
import { generateRandomArray, isSorted } from "../algos/array";
import ArrayBar from "../components/ArrayBar";
import GameOverModal from "../components/GameOverModal";
import PlayBtn from "../components/PlayBtn";
import PlayerSection from "../components/PlayerSection";
import PlayerTitle from "../components/PlayerTitle";
import SortingAlgo from "../components/SortingAlgo";
import SortingArea from "../components/SortingArea";

const Game = () => {
    const router = useRouter();
    const { algo } = router.query;

    const [gameState, setGameState] = useState("start");

    const maxSize = 20;

    const [computerArray, setComputerArray] = useState(generateRandomArray(maxSize, maxSize))
    const [playerArray, setPlayerArray] = useState(generateRandomArray(maxSize, maxSize));

    const [computerSelections, setComputerSelections] = useState([]);
    const [playerSelections, setPlayerSelections] = useState([]);

    const [computerDone, setComputerDone] = useState(false);

    const [winner, setWinner] = useState("");

    const addPlayerSelection = (index) => {
        setPlayerSelections(playerSelections => {
            return [...playerSelections, index];
        });
    };

    const swapArrayIndexes = (origArray, setArray, i1, i2) => {
        const newArray = [...origArray];

        const temp = newArray[i1];
        newArray[i1] = newArray[i2];
        newArray[i2] = temp;

        setArray(newArray);
    };

    useEffect(() => {
        if (playerSelections.length == 2) {
            swapArrayIndexes(playerArray, setPlayerArray, playerSelections[0], playerSelections[1]);
            setPlayerSelections([]);
        }
    }, [playerSelections, playerArray]);

    useEffect(() => {
        if (computerDone) {
            const interval = setInterval(() => {
                setComputerSelections(arr => {
                    if (arr[0] <= computerArray.length) {
                        return [arr[0] + 1];
                    }

                    clearInterval(interval);
                    if (winner.length === 0) {
                        setWinner("computer");
                    }
                    return [];
                });
            }, 200);
        }
    }, [computerDone, computerArray, winner]);

    useEffect(() => {
        if (isSorted(playerArray)) {
            setPlayerSelections([0]);
            const interval = setInterval(() => {
                setPlayerSelections(arr => {
                    if (arr[0] <= playerArray.length) {
                        return [arr[0] + 1];
                    }

                    clearInterval(interval);
                    if (winner.length === 0) {
                        setWinner("player");
                    }
                    return [];
                });
            }, 200);
        }
    }, [playerArray, winner]);

    return (
        <div className="relative h-screen w-screen">
            {
                winner.length > 0 && <GameOverModal algoName={algosData[algo].name} winner={winner}/>
            }
            <PlayerSection>
                <PlayerTitle 
                    icon={algosData[algo]?.icon}
                    name={algosData[algo]?.name}
                    size={gameState === "start" ? "large" : "tiny"}
                />
                { 
                    gameState !== "start" &&
                    <SortingAlgo 
                        algo={algo} 
                        arr={computerArray} 
                        swap={
                            (index1, index2) => swapArrayIndexes(computerArray, setComputerArray, index1, index2)
                        }
                        setComputerSelections={setComputerSelections}
                        setComputerDone={setComputerDone}
                    >
                        <SortingArea>
                        { 
                            computerArray.map((size, index) => {
                                return (
                                    <ArrayBar 
                                        size={size} 
                                        maxSize={maxSize} 
                                        key={`computer_bar_` + index}
                                        index={index}
                                        player="computer"
                                        selected={computerSelections.indexOf(index) !== -1}
                                    />
                                )
                            })
                        }
                    </SortingArea>

                    </SortingAlgo>
                }
                
            </PlayerSection>
            { gameState === "start" && <PlayBtn onClick={() => setGameState("play")} /> }
            <PlayerSection>
                <PlayerTitle 
                    icon="🤓"
                    name="You"
                    size={gameState === "start" ? "large" : "tiny"}
                />
                { 
                    gameState !== "start" &&
                    <SortingArea>
                        { 
                            playerArray.map((size, index) => {
                                return (
                                    <ArrayBar 
                                        size={size} 
                                        maxSize={maxSize} 
                                        key={`player_bar_` + index}
                                        index={index}
                                        player="player"
                                        addPlayerSelection={addPlayerSelection}
                                        selected={playerSelections.indexOf(index) !== -1}
                                    />
                                )
                            })
                        }
                    </SortingArea>
                }
            </PlayerSection>
        </div>
    );
};

export default Game;
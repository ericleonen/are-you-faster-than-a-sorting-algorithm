import LevelOption from "./LevelOption";
import { algosData } from "../algos/algosData";

const LevelSelector = () => {
    return (
        <div className="flex mt-12">
            {
                Object.keys(algosData).map((route: string) => {
                    return (
                        <LevelOption 
                            route={route}
                            icon={algosData[route].icon}
                            name={algosData[route].name}
                        />
                    );
                })
            }
        </div>
    );
};

export default LevelSelector;
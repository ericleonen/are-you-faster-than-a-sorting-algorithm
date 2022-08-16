import Link from "../node_modules/next/link";

interface LevelOptionProps {
    route: string,
    icon: string,
    name: string
};

const LevelOption = ({ route, icon, name }: LevelOptionProps) => {
    return (
        <Link href={{pathname: '/[algo]'}} as={{pathname:`/${route}`}}>
            <div className="flex justify-center items-center flex-col h-32 w-32 mr-8 last-of-type:mr-0 bg-gray-100 hover:bg-gray-300">
                <div className="text-2xl">{icon}</div>
                <p className="font-medium mt-2 text-gray-500">{name}</p>
            </div>
        </Link>
    );
};

export default LevelOption;
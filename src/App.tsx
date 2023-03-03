import { useEffect } from "react";
import { ISpecie } from "./helpers/interfaces/ISpecie";
const App = () => {
    const [species, setSpecies] = useState([]); 


    useEffect(() => {
        const species:Array<ISpecie> = getSpecies();
    },[]);

    return <></>;
};

export default App;

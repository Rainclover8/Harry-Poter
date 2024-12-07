import HangMan from "./component/HangMan";
import {useEffect, useState} from "react";


function App() {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://hp-api.onrender.com/api/characters")
            .then((res) => res.json())
            .then(data => setData(data))
    }, []);

    return (
        <div className="">
            <HangMan data={data}/>
        </div>
    )
}


export default App;
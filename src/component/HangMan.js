import '../App.css';
import { useState, useEffect } from "react";

function HangMan({ data }) {
    const [newData, setNewData] = useState([]);

    useEffect(() => {
        if (data) {
            setNewData(data);
        }
    }, [data]);

    if (!data) {
        return <div className="App">Yükleniyor...</div>;
    }

    return (
        <div className="App">
            {newData.map((item, index) => (
                <div key={index} className="main-container">
                    <div className="image-container">
                        <img
                            src={item.image || "https://via.placeholder.com/300"}
                            alt={item.name || "Karakter resmi yok"}
                            className="img-fluid"
                        />
                    </div>
                    <div className="character-info">
                        <h1>{item.name || "Bilinmeyen Karakter"}</h1>
                        {item.house && <p>Ev: {item.house}</p>}
                        {item.actor && <p>Oyuncu: {item.actor}</p>}
                        {item.dateOfBirth && <p>Doğum Tarihi: {item.dateOfBirth}</p>}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default HangMan;
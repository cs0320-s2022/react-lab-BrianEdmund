import TextBox from "./TextBox";
import { useState } from "react";
import axios from "axios";
// @ts-ignore
import { AwesomeButton } from "react-awesome-button";

function Horoscope() {
    const [sun, setSun] = useState("");
    const [moon, setMoon] = useState("");
    const [rising, setRising] = useState("");
    const [horoscope, setHoroscope] = useState([]);

    const requestHoroscope = () => {
        const toSend = {
            sun: sun,
            moon: moon,
            rising: rising,
        }
        
        let config = {
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
            }
        }
        
        axios.post("http://localhost:4567/horoscope", toSend, config)
            .then(res => {
                setHoroscope(res.data["horoscope"]);
            })
            .catch(err => {
                console.log(err);
            }
        );
    }

    return (
        <div>
            <p>Horoscope</p>
            <TextBox label="Sun" change={setSun} />
            <TextBox label="Moon" change={setMoon} />
            <TextBox label="Rising" change={setRising} />
            <AwesomeButton type="primary" onPress={requestHoroscope}>
                Submit
            </AwesomeButton>
            {horoscope.map((item, index) => {
                return (
                    <p>{item}</p>
                )
            })}
        </div>
    );
}

export default Horoscope;

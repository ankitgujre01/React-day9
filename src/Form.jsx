// Form.js
import { useState } from "react";

const Form = () => {
    const [name, setName] = useState('');
    const [city, setCity] = useState('');

    return (
        <>
            <h2>Application Form</h2>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                <br /><br />
                <label htmlFor="city">City:</label>
                <input type="text" id="city" name="city" value={city} onChange={(e) => setCity(e.target.value)} />
                <br /><br />
                <p><strong>Entered Name:</strong> {name}</p>
                <p><strong>Entered City:</strong> {city}</p>
            </form>
        </>
    );
};

export default Form;

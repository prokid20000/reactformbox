import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

function NewBoxForm({ addBox }) {
    const [formData, setFormData] = useState({
        height: "",
        width: "",
        backgroundColor: "",
    });

    /**Update form input */
    function handleChange(evt) {
        const { name, value } =evt.target;
        setFormData(formData => ({...formData, [name]: value}));
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        addBox(formData);
        setFormData({
            height: "",
            width: "",
            backgroundColor: "",
        });
    }

    return (<div>
        <form>
            <label for="height-input">Height:</label>
            <input id="height-input" name="height" />
            <label for="width-input">Width:</label>
            <input id="width-input" name="width" />
            <label for="background-color-input">Background Color:</label>
            <input id="background-color-input" name="backgroundColor" />

            <button>Add!</button>
        </form>
    </div>)

}


export default NewBoxForm;
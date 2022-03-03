import React, { useState } from 'react';

function NewBoxForm({ addBox }) {
  const [formData, setFormData] = useState({
    height: "",
    width: "",
    backgroundColor: "",
  });

  /**Update form input */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(formData => ({ ...formData, [name]: value }));
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
    <form onSubmit={handleSubmit}>
      <label for="height-input">Height:</label>
      <input id="height-input"
        name="height"
        value={formData.height}
        onChange={handleChange} />
      <label for="width-input">Width:</label>
      <input id="width-input"
        name="width"
        value={formData.width}
        onChange={handleChange} />
      <label for="background-color-input">Background Color:</label>
      <input id="background-color-input"
        name="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange} />
      <button>Add Box!</button>
    </form>
  </div>)

}


export default NewBoxForm;
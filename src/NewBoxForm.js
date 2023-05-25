import React, { useState } from "react";

/** Form for creating a new box
 *
 * Box data: { backgroundColor, width, height }
 *
 *  BoxList -> NewBoxForm
 *
 */

function NewBoxForm( { addBox }) {
  const initialState = { backgroundColor: "", width: "", height: "" };
  const [formData, setFormData] = useState(initialState);

  /** Send {backgroundColor, width, height} to parent
   *     & clear form
   */
  function handleSubmit(evt) {
    evt.preventDefault();
    addBox(formData);
    setFormData(initialState);
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  /** Render the form */
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="backgroundColor">Background Color:</label>
      <input
        id="backgroundColor"
        name="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange}
        />

      <label htmlFor="width">Width: </label>
      <input
        id="width"
        name="width"
        value={formData.width}
        onChange={handleChange}
        />

      <label htmlFor="height">Height: </label>
      <input
        id="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
        />

      <button>Add a new box!</button>
    </form>
  );
}

export default NewBoxForm;
import React, { useState } from "react";

const FormTodo = props => {
const [description, setDescription] = useState("");

const {addItem} = props;

const handleSubmit = e => {
    e.preventDefault(); // Limpia el input para ser llenado de nuevo.
    console.log(description)

    addItem({
        done: false,
        id: (new Date()).toString(),
        description
    });

    setDescription("");
}
    return(
        <form onSubmit={handleSubmit}>
            <div className="todo-list">
                <div className="file-input">
                    <input 
                    type="text"
                    className="text"
                    value={description}
                    onChange={e => setDescription(e.target.value)} 
                    />
                    <button
                        className="button pink"
                        disabled= {description ? "" : "disabled"}
                    >
                        Add Homework
                    </button>
                </div>
            </div>
        </form>
    );
}

export default FormTodo;








import React, { useState } from 'react';

function Tugas5() {
  const [todos, setName] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      setName([...todos, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setName(updatedTodos);
  };

  return (
    <div className="container mx-auto">
      <h3>Soal 5</h3>
      <form className="flex flex-col p-6 gap-4" onSubmit={handleSubmit}>
        <input
          className="form-label"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Nama"
        />
        <button
          className="btn btn-primary"
          type="submit"
        >
          Tambah
        </button>
      </form>
      <br />
      <ul className="list-group">
        {todos.map((todo, index) => (
          <h3
            className="list-group-item d-flex justify-content-between h4"
            key={index}
          >
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer"
              }}
              
            >
              {todo.text}
            </span>
            <button
              className="btn btn-danger"
              onClick={() => deleteTodo(index)}
            >
              Hapus
            </button>
          </h3>
        ))}
      </ul>
    </div>
  );
}

export default Tugas5;

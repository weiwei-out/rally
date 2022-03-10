import React, { useState } from "react";

function Events({ createNewEvent }) {
  const [rally, setRally] = useState({
    title: "",
    image_url: "",
    start: null,
    end: null,
    description: "",
    private: false,
  });

  const handleRally = (event) => {
    const field = event.target.name;
    const inputValue = event.target.value;
    setRally({ ...rally, [field]: inputValue });
  };

  const postRally = (event) => {
    event.preventDefault();
    createNewEvent(rally);
  };

  return (
    <div>
      <form>
        <input name="title" placeholder="title" onChange={handleRally}></input>
        <input
          name="image_url"
          placeholder="image url"
          onChange={handleRally}
        ></input>
        <input
          name="start"
          type="datetime-local"
          placeholder="start time"
          onChange={handleRally}
        ></input>
        <input
          name="end"
          type="datetime-local"
          placeholder="end time"
          onChange={handleRally}
        ></input>
        <input
          name="description"
          placeholder="description"
          onChange={handleRally}
        ></input>
        <button type="submit" onClick={(e) => postRally(e)}>
          rally the troops 🚩
        </button>
      </form>
    </div>
  );
}

export default Events;
// t.string :title
//       t.string :image_url
//       t.datetime :start
//       t.datetime :end
//       t.string :description
//       t.boolean :private

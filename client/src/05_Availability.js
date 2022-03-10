import React, { useState } from "react";
import AvCard from "./08_Availability_Card";

function Availability({
  user,
  createNewAvailability,
  free,
  deleteAvailability,
}) {
  const [availability, setAvailability] = useState({
    username: `${user.username}`,
    start: null,
    end: null,
    show: true,
  });

  const handleFree = (event) => {
    const field = event.target.name;
    const inputValue = event.target.value;
    setAvailability({ ...availability, [field]: inputValue });
  };

  const postFree = (event) => {
    event.preventDefault();
    createNewAvailability(availability);
  };

  return (
    <div>
      <div>
        add availability
        <form>
          <div>
            <span>start</span>
            <input
              name="start"
              placeholder="start"
              type="datetime-local"
              onChange={handleFree}
            ></input>
          </div>
          <div>
            <span>end</span>
            <input
              name="end"
              placeholder="end"
              type="datetime-local"
              onChange={handleFree}
            ></input>
          </div>
          <button type="submit" onClick={(e) => postFree(e)}>
            add
          </button>
        </form>
      </div>
      <div>
        my availability
        {free.map((i) => (
          <AvCard
            key={i.id}
            availability={i}
            deleteAvailability={deleteAvailability}
          />
        ))}
      </div>
    </div>
  );
}

export default Availability;

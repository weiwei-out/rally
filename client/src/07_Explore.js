import Card from "./08_Event_Card";
import "./07_Explore";

import React, { useState, useEffect } from "react";

function Explore({ events }) {
  return (
    <div id="shell">
      {events.map((i) => (
        <Card key={i.id} event={i} />
      ))}
    </div>
  );
}

export default Explore;

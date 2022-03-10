import "./08_Availability_Card.css";

function AvCard({ availability, deleteAvailability }) {
  return (
    <div className="Card">
      <div className="AvCardLeft">
        <div>Start:{availability.start}</div>
        <div>End:{availability.end}</div>
      </div>
      <div className="AvCardRight">
        <button onClick={deleteAvailability}>remove</button>
      </div>
    </div>
  );
}

export default AvCard;

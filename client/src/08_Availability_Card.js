function AvCard({ availability }) {
  return (
    <div>
      <span>Start:{availability.start}</span>
      <span> </span>
      <span>End:{availability.end}</span>
      <button>remove</button>
    </div>
  );
}

export default AvCard;

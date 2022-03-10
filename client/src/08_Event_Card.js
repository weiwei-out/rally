function Event_Card({ event }) {
  return (
    <div className="event_card">
      <img
        className="event_image"
        alt="missing event picture"
        src={`${event.image_url}`}
      />
      <h1 className="event_title">{event.title}</h1>
      <p className="event_description">{event.description}</p>
      <p>Start: {event.start}</p>
      <p>End: {event.end}</p>
      <button></button>
    </div>
  );
}

export default Event_Card;

// return (
//     <div className="item_card">
//       <div className="margin">
//         <img
//           alt="none loaded :("
//           src={`${item.image}`}
//           className="item_image"
//         />
//       </div>
//       <h1 className="item_title"> {item.item_name} </h1>
//       <p className="item_expiration_date">
//         {" "}
//         Purchase Date: {item.purchase_date}{" "}
//       </p>
//       <p className="item_expiration_date">
//         {" "}
//         Expiration Date: {item.expiry_date}{" "}
//       </p>
//       <p className="item_expiration_date"> {daysBetween()} Day(s) left </p>
//       <button className="delete" onClick={() => handleDelete(item.id)}>
//         Remove Item
//       </button>
//     </div>
//   );
// }

export default function Button({ color, id, value, handleClick, type }) {
  return (
    <button
      onClick={() => handleClick(value, type)}
      id={id}
      className={`btn btn-${color}`}
      value={value}
    >
      {value}
    </button>
  );
}

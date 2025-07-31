function Button(props) {
   

  return (
    <button
      className="bg-white border border-black py-1 px-2 rounded cursor-pointer"
      type="button"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}

export default Button;
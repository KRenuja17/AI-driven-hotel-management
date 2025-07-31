const Greeting = (props) => {
    

    return (
      <h1 className="text-blue-500 text-2xl">
        Hello, {props.name}! You are {props.age} years Old. 
      </h1>  
    );
};

export default Greeting;
// Code EyesOnMe Component Here
function EyesOnMe() {
    const handleButtonFocus = (e) => {
      e.preventDefault();
      console.log("Good!");
    };
    const handleButtonBlur = (e) => {
      e.preventDefault();
      console.log("Hey! Eyes on me!");
    };
    return (
      <div>
        <button onFocus={handleButtonFocus} onBlur={handleButtonBlur}>
          Eyes on me
        </button>
      </div>
    );
  }
  
  export default EyesOnMe;
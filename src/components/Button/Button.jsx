

export const Button = ({buttonText, handleClick}) => {
  return(
    <>
      {/* Render a button with the provided text and click handler */}
      <button 
        className='bg-gray-500 text-white py-2 px-4 rounded-md'
        onClick={handleClick} // Attach the handleClick function to the button's onClick event
      >
        {buttonText} {/* Display the text passed as a prop inside the button */}
      </button>
    </>
  );
};
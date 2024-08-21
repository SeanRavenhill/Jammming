export const Button = ({buttonText, handleClick}) => {
  return(
    <>
      <button 
        className='bg-gray-500 text-white py-2 px-4 rounded-md'
        onClick={handleClick}
      >
        {buttonText}
      </button>
    </>
  );
};
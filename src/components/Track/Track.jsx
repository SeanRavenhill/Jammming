

export const Track = ({ name, album, artist, image, id, addTrack, removeTrack }) => {
  
  // Handles the click event to either add or remove a track
  const handleClick = () => {
    addTrack ? addTrack(id) : removeTrack(id); // If addTrack is provided, call it; otherwise, call removeTrack
  };

  return (
    <div className='flex justify-between items-center p-3 border rounded-md'>
      
      <div className="flex gap-4 h-full">
        {/* Display the album artwork */}
        <div
          className='w-16 h-16 bg-cover bg-center'
          style={{ backgroundImage: `url(${image})` }}
        ></div>

        {/* Display track details: name, album, artist */}
        <div className="flex flex-col justify-between">
          <p className="~text-sm/base al">{name}</p>
          <p className="~text-sm/base">{album}</p>
          <p className="~text-sm/base">{artist}</p>  
        </div>  
      </div>
      
      {/* Button to add or remove a track, depending on the context */}
      <button className='justify-self-end' onClick={handleClick}>
        {addTrack ? `➕` : `➖`} {/* Show ➕ if adding, ➖ if removing */}
      </button>

    </div>
  );
};

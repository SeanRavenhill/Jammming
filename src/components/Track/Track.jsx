export const Track = ({ name, album, artist, image, id, addTrack, removeTrack }) => {
  
  const handleClick = () => {
    addTrack ? addTrack(id) : removeTrack(id);
  };

  return (
    <div className='flex justify-between items-center p-3 border rounded-md'>
      
      <div className="flex gap-4 h-full">
        <div
          className='w-16 h-16 bg-cover bg-center'
          style={{ backgroundImage: `url(${image})` }}
        ></div>

        <div className="flex flex-col justify-between">
          <p className="~text-sm/base al">{name}</p>
          <p className="~text-sm/base">{album}</p>
          <p className="~text-sm/base">{artist}</p>  
        </div>  
      </div>
      
      <button className='justify-self-end' onClick={handleClick}>
        {addTrack ? `➕` : `➖`}
      </button>

    </div>
  );
};

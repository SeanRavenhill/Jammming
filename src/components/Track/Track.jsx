export const Track = ({ name, album, artist, image, id, addTrack, removeTrack }) => {
  
  const handleClick = () => {
    addTrack ? addTrack(id) : removeTrack(id);
  };

  return (
    <div className='grid grid-cols-5 gap-4 items-center p-3 border rounded-md'>
      <div
        className='w-16 h-16 bg-cover bg-center'
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <p>{name}</p>
      <p>{album}</p>
      <p>{artist}</p>
      <button className='justify-self-end' onClick={handleClick}>
        {addTrack ? `➕` : `➖`}
      </button>
    </div>
  );
};

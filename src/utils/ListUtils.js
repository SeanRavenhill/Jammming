export const generateOrderMap = (results) => {
  return results.reduce((acc, track,index) => {
    acc[track.id] = index;  // Add track ID as key and index as value to accumulator
    return acc;             // Return the updated accumulator for the next iteration
  }, {});                   // Initial value of accumulator is an empty object
};

export const reorderResults = (results, orderMap) => {
  return results.sort((a, b) => orderMap[a.id] - orderMap[b.id]);
};
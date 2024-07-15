export const useRoom = async () => {
  const res = await fetch("./rooms.json");
  const rooms = await res.json();
//   console.log(data)
  return rooms;
};

import ClassRoom from './0-classroom';

export default function InitializeRooms() {
  const arr = [19, 20, 34];
  const resarr = [];

  for (const el of arr) {
    resarr.push(new ClassRoom(el));
  }
  return resarr;
}

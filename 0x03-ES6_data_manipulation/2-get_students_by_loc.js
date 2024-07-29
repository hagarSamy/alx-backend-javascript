export default function getStudentsByLocation(listOfSts, city) {
  return (listOfSts.filter((student) => student.location === city));
}

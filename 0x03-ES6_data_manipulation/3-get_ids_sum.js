export default function getStudentIdsSum(listOfSts) {
 return (listOfSts.reduce((acc, st) => acc + st.id, 0));
}

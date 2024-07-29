export default function getListStudentIds(arrayOfObjs) {
  if (!Array.isArray(arrayOfObjs)) {
    return [];
  }
  return (arrayOfObjs.map((elem) => elem.id));
}

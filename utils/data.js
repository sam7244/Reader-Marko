export const lectureQuery = `
*[_type == 'admin']{
  _id,
  courseCode,
   threshold,
  lectureDetails->{
    _id,
    name,
   
  }
}
`;

export const lectureQuery = `
*[_type == 'admin']{
  _id,
   threshold,
  lectureDetails->{
    _id,
    name,
   
  }
}
`;

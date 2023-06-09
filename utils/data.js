export const lectureQuery = `
*[_type == 'admin']{
  lectureDetails->{
    _id,
    name
  }
}
`;

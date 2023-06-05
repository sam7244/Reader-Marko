export const lectureQuery = `
*[_type == 'admin']{
  lectureDetails->{
    name
  }
}
`;

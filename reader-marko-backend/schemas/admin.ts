export default {
  name: 'admin',
  title: 'Admin',
  type: 'document',
  fields: [
    {
      name: 'courseCode',
      title: 'CourseCode',
      type: 'string',
    },
    {
      name: 'lectureDetails',
      title: 'Lecture Details',
      type: 'reference',
      to: [{type: 'lecture'}],
    },
  ],
}

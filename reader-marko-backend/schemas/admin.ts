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
      name: 'map',
      title: 'PO | CO Map',
      type: 'file',
    },
    {
      name:'threshold',
      title:'Threshold',
      type:'number'
    },
    {
      name: 'lectureDetails',
      title: 'Lecture Details',
      type: 'reference',
      to: [{type: 'lecture'}],
    },
  ],
   initialValue: {
    threshold: 60
  }
}

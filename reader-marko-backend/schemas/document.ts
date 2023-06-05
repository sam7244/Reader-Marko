export default {
  name: 'docs',
  title: 'Docs',
  type: 'document',
  fields: [
    {
      name: 'doc',
      title: 'Xlsx | Docx | Pdf',
      type: 'file',
    },
    {
      name: 'lectureName',
      title: 'LectureDetails',
      type: 'reference',
      to: [{type: 'lecture'}],
    },
  ],
}

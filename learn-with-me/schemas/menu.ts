export default {
  name: 'menu',
  type: 'document',
  title: 'Menu Category',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Category name',
      validation: (Rule: any) => Rule.required(),
    },
    //   image
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      description: 'The image of the menu category',
      validation: (Rule: any) => Rule.required(),
    },
  ],
}

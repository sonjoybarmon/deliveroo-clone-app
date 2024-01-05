export default {
  name: 'dish',
  type: 'document',
  title: 'Dish',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of Dish',
      validation: (Rule: any) => Rule.required(),
    },
    // short_description
    {
      name: 'short_description',
      type: 'text',
      title: 'Short Description',
      description: 'A short description of the restaurant',
      validation: (Rule: any) => Rule.max(250),
    },
    // price
    {
      name: 'price',
      type: 'number',
      title: 'Price',
      description: 'The price of the dish',
      validation: (Rule: any) => Rule.required(),
    },

    // image
    {
      name: 'image',
      type: 'image',
      title: 'Dish Image',
      description: 'The image of the dish',
      validation: (Rule: any) => Rule.required(),
    },
  ],
}

export default {
  name: 'restaurant',
  type: 'document',
  title: 'Restaurant',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Restaurant Name',
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
    // image
    {
      name: 'image',
      type: 'image',
      title: 'Restaurant Image',
      description: 'The image of the restaurant',
      validation: (Rule: any) => Rule.required(),
    },
    // lat
    {
      name: 'lat',
      type: 'number',
      title: 'Latitude',
      description: 'The latitude of the restaurant',
      validation: (Rule: any) => Rule.required(),
    },
    // long
    {
      name: 'long',
      type: 'number',
      title: 'Longitude',
      description: 'The longitude of the restaurant',
      validation: (Rule: any) => Rule.required(),
    },
    // address
    {
      name: 'address',
      type: 'string',
      title: 'Address',
      description: 'The address of the restaurant',
      validation: (Rule: any) => Rule.required(),
    },
    // rating
    {
      name: 'rating',
      type: 'number',
      title: 'Rating',
      description: 'Enter a rating from (1-5 Stars)',
      validation: (Rule: any) =>
        Rule.required().min(1).max(5).error('Please enter a value between 1 and 5'),
    },
    // category
    {
      name: 'type',
      title: 'Category',
      description: 'The category of the restaurant',
      validation: (Rule: any) => Rule.required(),
      type: 'reference',
      to: [{type: 'menu'}],
    },

    // {
    //   name: 'type',
    //   type: 'array',
    //   title: 'Category',
    //   description: 'The category of the restaurant',
    //   of: [{type: 'reference', to: [{type: 'menu'}]}],
    //   validation: (Rule: any) => Rule.required(),
    // },

    // dishes
    {
      name: 'dishes',
      type: 'array',
      title: 'Dishes',
      description: 'The dishes of the restaurant',
      of: [{type: 'reference', to: [{type: 'dish'}]}],
      validation: (Rule: any) => Rule.required(),
    },
  ],
}

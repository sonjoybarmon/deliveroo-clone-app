export default {
  name: 'featured',
  type: 'document',
  title: 'Featured Menu Categories',
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
    // restaurants
    {
      name: 'restaurants',
      type: 'array',
      title: 'Restaurants',
      description: 'The restaurants that are featured',
      of: [
        {
          type: 'reference',
          to: [{type: 'restaurant'}],
        },
      ],
    },
  ],
}

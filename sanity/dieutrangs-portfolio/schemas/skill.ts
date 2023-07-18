import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
   {
    name:'title',
    title:'Title',
    type:'string',
    description:'Title of skills'
   },
   {
    name:'image',
    title:'Image',
    type:'image',
    options:{
        hotspot:true
    }
   }
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});

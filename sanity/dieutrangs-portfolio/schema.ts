import { type SchemaTypeDefinition } from 'sanity';

import pageInfo from './schemas/pageInfo';
import experience from './schemas/experience';
import project from './schemas/project';
import social from './schemas/social';
import skill from './schemas/skill';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageInfo,experience,project,social,skill],
};

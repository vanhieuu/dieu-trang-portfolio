import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../../sanity';
import { Projects } from '../../../typing';

const query = groq`
*[_type == 'projects'] {
    ...,
    technologies[]->
}
`;

type Data = {
  project: Projects[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const project: Projects[] = await sanityClient.fetch(query);
  res.status(200).json({ project });
}

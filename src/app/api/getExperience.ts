import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../../sanity';
import { Experience } from '../../../typing';

const query = groq`
*[_type == 'experience']{
  ...,
  technologies[]->
}
`;

type Data = {
  experience: Experience[];
};

export default async function GET(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const experience: Experience[] = await sanityClient.fetch(query);
  res.status(200).json({ experience });
}

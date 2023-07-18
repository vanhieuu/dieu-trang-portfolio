import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../../sanity';
import { PageInfo } from '../../../typing';

const query = groq`
*[_type == 'pageInfo'][0]
`;

type Data = {
  userInfor: PageInfo;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const userInfor: PageInfo = await sanityClient.fetch(query);
  res.status(200).json({ userInfor });
}

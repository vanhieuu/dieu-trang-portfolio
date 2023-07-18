// import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../../../sanity';
import { Skills } from '../../../../typing';
import { NextResponse } from 'next/server';

const query = groq`
*[_type == 'skills']
`;

type Data = {
  skills: Skills[];
};



export async function GET(){
  const skills:Skills[] = await sanityClient.fetch(query)
  return NextResponse.json({skills})
}




// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>,
// ) {
//   const skills: Skills[] = await sanityClient.fetch(query);
//   res.status(200).json({ skills });
// }

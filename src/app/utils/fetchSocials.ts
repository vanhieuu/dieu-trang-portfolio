import { Socials } from '../../../typing';

export const fetchSkills = async () => {
  const res = await fetch(`localHost:3000/api/getSkill`);
  const data = await res.json();
  const socials: Socials[] = data.socials;
  return socials;
};

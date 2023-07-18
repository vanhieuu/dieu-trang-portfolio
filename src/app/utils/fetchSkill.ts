import { Skills } from '../../../typing';

export const fetchSkills = async () => {
  const res = await fetch(`localHost:3000/api/getSkill`);
  const data = await res.json();
  const skills: Skills[] = data.skills;
  return skills;
};

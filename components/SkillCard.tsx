import React from 'react';

type Props = {
  name: string;
};

const SkillCard = (props: Props) => {
  return (
    <div className='lg:flex gap-10 bg-ct-primary-02 rounded'>
      <h3 className='text-lg font-medium pt-8 pb-2  '>{props.name}</h3>
      <p className="text-ct-primary-text py-1">Photoshop</p>
    </div>
  );
};

export default React.memo(SkillCard);

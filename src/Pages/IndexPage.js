import React from 'react';

import { Github } from '../Components/Github/Github';

const Index = () => {
  return (
    <div
      className='bg-gray-300 p-0 m-0 min-h-screen'
      id='IndexPage'
      data-restid='IndexPageContainer'
    >
      <Github />
    </div>
  );
};

export default Index;

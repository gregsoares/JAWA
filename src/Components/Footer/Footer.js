import React from 'react';

export const Footer = () => {
  return (
    <div
      className='py-6 mt-0 border border-b-0 border-l-0 border-r-0 border-gray-300 bg-topnav'
      data-testid='FooterContainer'
    >
      <p className='text-xs text-center text-gray-700' id='FooterText'>
        <span id='footerSymbol'> &copy;2021 </span>
        GregSoares.com
        <span id='footerRightsReserved'>. All rights reserved.</span>
      </p>
    </div>
  );
};

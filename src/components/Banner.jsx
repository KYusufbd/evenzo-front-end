import React from 'react';

const Banner = ({text}) => {
  return (
    <div className="flex flex-row w-full bg-primary-content py-3 justify-center items-center">
      <h2 className="text-2xl text-primary font-medium text-center">{text}</h2>
    </div>
  );
};

export default Banner;

import React from 'react';

function MaterialCard({ title, values }) {
  return (
    <div className='w-[270px] h-[200px] mt-[30px] mx-auto border-b border-white flex flex-col'>
      <p className='text-white font-bold font-ANVYL text-center text-3xl'>{title}</p>
      <div className='w-full h-fit flex items-center justify-between mb-[40px] text-white font-bold text-2xl mt-3'>
        {values.map((value, index) => (
          <div key={index} className='w-[70px] flex flex-col items-center'>
            <p>{value.label}</p>
            <span>{value.number}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MaterialCard;

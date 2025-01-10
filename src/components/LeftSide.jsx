import React from 'react';
import MaterialCard from './cardOfAll.jsx';

export default function LeftSide() {
  const materials = [
    { title: 'ПВХ', values: [{ label: 'L', number: 12 }, { label: 'T', number: 12 }, { label: 'Z', number: 12 }] },
    { title: 'THERMO', values: [{ label: 'L', number: 12 }, { label: 'T', number: 12 }, { label: 'Z', number: 12 }] },
    { title: 'АЛЮМИНИЙ', values: [{ label: 'L', number: 12 }, { label: 'T', number: 12 }, { label: 'Z', number: 12 }] },
    { title: 'ШТАПИК АЛЮМИНИЙ', values: [{ label: 'L', number: 12 }, { label: 'T', number: 12 }, { label: 'Z', number: 12 }] },
    { title: 'ПОДОКОННИК', values: [{ label: 'Пакет', number: 12 }, { label: 'Один.', number: 12 }] },
    { title: 'ШТАПИК ПВХ', values: [{ label: 'Пакет', number: 12 }, { label: 'Один.', number: 12 }] },
  ];

  return (
    <div className='w-[300px] h-screen bg-[#af8d53] overflow-y-auto fixed z-10 top-0 left-0 flex pt-[100px] justify-between flex-col'>
      {materials.map((material, index) => (
        <MaterialCard key={index} title={material.title} values={material.values} />
      ))}
    </div>
  );
}

import React, { useState } from 'react';

function DeStructureThing() {
  const array_1 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

  const [a, b] = array_1;

  console.log('a:' + a);
  console.log('b:' + b);

  const weaponObject = {
    caliber: 5.56,
    model: 'ar-15',
    country: 'US',
  };

  // ### const { mdl, ctry, calbr } = weaponObject;
  //  must be exact same name
  const { country, model } = weaponObject;

  console.log('model:' + model);
  console.log('country:' + country);

  return (
    <div>
      <p></p>
    </div>
  );
}

export default DeStructureThing;

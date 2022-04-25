import Race from '../../src/Races';

let ok = true;
try {
  Race.createdRacesInstances();
  console.log('try');
  
} catch (err: any) {
  console.log('catch');

  if (err.message === 'Not implemented') {
    ok = false;
  }
}

const result = () => ok;

const reinforcementBarTypes = [
  { value: '4Φ10', area: 314.1592653589793 },
  { value: '4Φ12', area: 452.3893421169302 },
  { value: '4Φ16', area: 804.247719318987 },
  { value: '6Φ12', area: 678.5840131753953 },
  { value: '4Φ12 + 2Φ10', area: 609.4689747964198 },
  { value: '4Φ12 + 4Φ10', area: 766.5486074759095 },
  { value: '4Φ16 + 2Φ12', area: 1030.442390377452 },
  { value: '4Φ16 + 4Φ12', area: 1256.6370614359173 },
  { value: '8Φ16', area: 1608.495438637974 },
  { value: '4Φ20 + 2Φ16', area: 1658.7609210954108 },
  { value: '4Φ20 + 4Φ16', area: 2060.8847807549046 }
];

// reinforcementBarTypes.map(item => {
//   const splitted = item.value.split(' + ');
//   const splittedObj = splitted.map(val => ({ n: +val.split('Φ')[0], diameter: +val.split('Φ')[1] }));

//   return {
//     value: item.value,
//     area: area(splittedObj)
//   };
// });

// interface Area {
//   n: number;
//   diameter: number;
// }

// const area = (args: Area[]) => args.reduce((acc, cur) => acc + (cur.n * Math.PI * cur.diameter * cur.diameter) / 4, 0);

export default reinforcementBarTypes;

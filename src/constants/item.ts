export const ITEM_STANDARD_COLORS = new Map([
  ['black', '#000000'],
  ['silver', '#C0C0C0'],
  ['gray', '#808080'],
  ['white', '#FFFFFF'],
  ['maroon', '#800000'],
  ['red', '#FF0000'],
  ['purple', '#800080'],
  ['fuchsia', '#FF00FF'],
  ['green', '#008000'],
  ['lime', '#00FF00'],
  ['olive', '#808000'],
  ['yellow', '#FFFF00'],
  ['navy', '#000080'],
  ['blue', '#0000FF'],
  ['teal', '#008080'],
  ['aqua', '#00FFFF'],
]);
export const ITEMCAT_TO_NUM = new Map([
  ['mobile phone', 1],
  ['moblile accessory', 2],
  ['wearable device', 3],
  ['tablets', 4],
  ['power bank', 5],
  ['laptop', 6],
  ['desktop', 7],
  ['computer', 8],
  ['electronic device', 9],
  ['headphone', 10],
  ['speaker', 11],
  ['camera', 12],
  ['musical instrument', 12],
  ['women clothing', 13],
  ['watches', 14],
  ['handbag', 15],
  ['clutches', 16],
  ['diamond jewellery', 17],
  ['gold jewellery', 18],
  ['silver jewellery', 19],
  ['fashion jewellery', 20],
  ['sunglasses', 21],
  ['shoes', 22],
  ['sandals', 23],
  ['luggage', 24],
  ['wallet', 25],
  ['formal shoes', 26],
  ['sportswear', 27],
  ['toy', 28],
  ['car', 29],
  ['motorbike', 30],
  ['motorcycle', 31],
  ['industrial', 32],
  ['card', 33],
  ['id', 34],
  ['id card', 35],
  ['driving license', 36],
  ['aadhaar card', 37],
  ['PAN card', 38],
  ['passport', 39],
  ['indian passport', 40],
  ['voterid card', 41],
  ['ration card', 42],
  ['identity certificate', 43],
  ['railway identity', 44],
  ['arms license', 45],
  ['land certificate', 46],
  ['overseas citizen india', 47],
]);

export const NUM_TO_ITEMCAT = new Map(
  [...ITEMCAT_TO_NUM.entries()].map(([key, value]) => [value, key]),
);
export enum FILTERTYPE {
  LOST = 1,
  FOUNDED,
  ADDMORE,
}

export const WHITE_GRADIENT = [
  '#FFFFFF',
  '#FFFFFF',
  '#FFFFFF',
  '#FFFFFF',
  '#FFFFFF',
  '#FFFFFF',
  '#FFFFFF',
  '#FFFFFF',
  '#FFFFFF',
  '#FFFFFF',
  '#FFFFFF',
  '#FFFFFF',
  '#FFFFFF',
  '#FFFFFF',
  '#FFFFFF',
  '#FFFFFF',
  '#FFFFFF',
];

export const myMean = (array: number[]): number => {
return array.reduce(((accumulator, currentValue) => accumulator + (currentValue/array.length)), 0);
};

export const getPrimes = (array: number[]): number[] => {
  return array.filter(num => num != 1 && !Array.from({length: (num - 2)}, (v, k) => k + 2).some(i => num % i == 0));
};

export const partition = (array: number[], belongToGroup1: (element: number) => boolean): { group1: number[]; group2: number[] } => {
  let group1:number[] = [];
  let group2:number[] = [];

  array.map(num => belongToGroup1(num) ? group1.push(num) : group2.push(num));

  return {group1, group2};
};


// TODO: You should replace this any with an accurate object type in your submission!
type Doggo = { name: string, age: number, breed: string };

export const makeSentences = (array: Doggo[]): string[] => {
  let retVal: string[] = [];
  array.map(doggo => retVal.push(doggo.name + ' is ' + doggo.age + " years old, and is a " + doggo.breed));

  return retVal;
};

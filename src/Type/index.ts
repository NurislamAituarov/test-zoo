export interface IZoo {
  name: string;
  kind: string;
  characteristic: number;
  id?: number;
}
export interface IAnimalItem {
  i: number;
  el: IZoo;
  removeAnimal: (id: number) => void;
  addCharacteristic: (id: number) => void;
}

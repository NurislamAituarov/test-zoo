import React from 'react';
import './App.css';
import { AnimalItem } from '../Animal-item';
import { IZoo } from '../../Type';

const animals = [
  { name: 'Giraph', kind: 'height', characteristic: 1 },
  { name: 'Wolf', kind: 'speed', characteristic: 2 },
  { name: 'Hippo', kind: 'weight', characteristic: 3 },
  { name: 'Cheetah', kind: 'speed', characteristic: 4 },
  { name: 'Elephant', kind: 'weight', characteristic: 5 },
  { name: 'Whale', kind: 'height', characteristic: 6 },
  { name: 'Antelope', kind: 'speed', characteristic: 7 },
  { name: 'Buffalo', kind: 'weight', characteristic: 8 },
  { name: 'Hare', kind: 'speed', characteristic: 9 },
  { name: 'Rhinoceros', kind: 'weight', characteristic: 10 },
];

function App() {
  const [zoo, setZoo] = React.useState<Array<IZoo> | []>([]);
  const date = new Date();

  function addAnimal(id: number) {
    const characteristic = Math.floor(Math.random() * (5 - 1) + 1);

    const newArr = animals
      .filter((el) => el.characteristic === id)
      .map((el) => {
        if (el.characteristic === id) {
          return { ...el, id: date.getTime(), characteristic };
        }
        return el;
      });

    setZoo((zoo) => [...zoo, ...newArr]);
  }

  function removeAnimal(id: number) {
    setZoo(zoo.filter((el) => el.id !== id));
  }

  function addCharacteristic(id: number) {
    const newArr = zoo.map((el) => {
      if (el.id === id) {
        el.characteristic += 1;
      }
      return el;
    });

    setZoo(newArr);
  }

  return (
    <div className="App">
      <button
        onClick={() => {
          const id = Math.random() * (10 - 1) + 1;
          addAnimal(Math.floor(id));
        }}
        className="btn-create">
        Catch
      </button>

      <div className="zoo-container">
        <h1>ZOO</h1>
        <ul>
          {zoo.map((el, i) => {
            return (
              <AnimalItem
                i={i + 1}
                key={el.id}
                el={el}
                removeAnimal={removeAnimal}
                addCharacteristic={addCharacteristic}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;

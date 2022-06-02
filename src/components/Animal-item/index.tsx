import { IAnimalItem } from '../../Type';
import './AnimalItem.css';

export function AnimalItem({ i, el, removeAnimal, addCharacteristic }: IAnimalItem) {
  return (
    <li className="animal-item fade">
      <strong style={{ width: '150px', textAlign: 'start' }} className="animal-item__number">
        №{i}. {el.name}
      </strong>
      <div>
        <span>Kind: </span>
        {el.kind} {`(${el.characteristic})`}
      </div>
      <div>
        <button onClick={() => el.id && addCharacteristic(el.id)} className="btn-feed">
          Feed
        </button>
        <button onClick={() => el.id && removeAnimal(el.id)} className="btn-delete">
          Free
        </button>
      </div>
    </li>
  );
}

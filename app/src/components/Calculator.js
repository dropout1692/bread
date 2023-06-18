import {useState} from "react";

function Calculator() {

  const [flour, setFlour] = useState(0);
  const [water, setWater] = useState(0);
  const [levain, setLevain] = useState(0);
  const [salt, setSalt] = useState(0);
  const [other, setOther] = useState(0);

  const get = (name) => {
    let value = parseFloat(document.getElementsByName(name)[0].value);
    return (isNaN(value) ? 0 : value);
  }

  const round = (number) => {
    return Math.round(number * 100) / 100;
  }

  const calculate = () => {

    let _flour = get("flour");
    let _water = get("water");
    let _levain = get("levain");
    let _salt = get("salt");
    let _other = get("other");

    if(_flour === 0 || _water === 0){
      return;
    }

    setFlour(_flour);
    setWater(_water / 100 * _flour);
    setLevain(_levain / 100 * _flour);
    setSalt(_salt / 100 * _flour);
    setOther(_other / 100 * _flour);
  }

  return <>
    <form></form>
    <div id='calculator-frame'>
      <div id='results'>
        <div>
          Flour: <span id='flour'>{round(flour)} g</span>
        </div>
        <div>
          Water: <span id='water'>{round(water)} g</span>
        </div>
        <div>
          Levain: <span id='levain'>{round(levain)} g</span>
        </div>
        <div>
          Salt: <span id='salt'>{round(salt)} g</span>
        </div>
        <div>
          Other: <span id='other'>{round(other)} g</span>
        </div>
      </div>
      <div id='inputs'>
        <form onInput={calculate}>
          <div>
            <label htmlFor='flour'>Flour weight:</label>
            <input type='text' name='flour' maxLength='5'/>
          </div>
          <div>
            <label htmlFor='water'>Water %:</label>
            <input type='text' name='water' maxLength='5'/>
          </div>
          <div>
            <label htmlFor='levain'>Levain %:</label>
            <input type='text' name='levain' maxLength='5'/>
          </div>
          <div>
            <label htmlFor='salt'>Salt %:</label>
            <input type='text' name='salt' maxLength='5'/>
          </div>
          <div>
            <label htmlFor='other'>Other %:</label>
            <input type='text' name='other' maxLength='5'/>
          </div>
        </form>
      </div>
    </div>
  </>
}

export default Calculator;
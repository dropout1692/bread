import {useEffect, useState} from "react";

function Calculator() {

  const [inputs, setInputs] = useState({
    weight: 0,
    flour: 0,
    water: 0,
    levain: 0,
    salt: 0,
    other: 0
  });

  const [coefficient, setCoefficient] = useState(0);

  const [values, setValues] = useState({
    flour: 0,
    water: 0,
    levain: 0,
    salt: 0,
    other: 0
  });

  const update = (el) => {
    let name = el.target.name;
    setInputs({...inputs, [name]: el.target.value});
  }

  useEffect(() => {
    let allIngredients =
        parseInt(inputs.flour) +
        parseInt(inputs.water) +
        parseInt(inputs.levain) +
        parseInt(inputs.salt) +
        parseInt(inputs.other);

    console.log(`All: ${allIngredients}`)
    console.log(`Weight: ${inputs.weight}`)

    setCoefficient(inputs.weight / allIngredients);
    setValues({
      ...values,
      flour: inputs.flour * coefficient,
      water: inputs.water * coefficient,
      levain: inputs.levain * coefficient,
      salt: inputs.salt * coefficient,
      other: inputs.other * coefficient
    });
  }, [inputs]);

  const round = (num) => {
    return Math.round(num * 100) / 100;
  }

  return <>
    <div id='calculator-frame'>
      <div id='results'>
        <div>
          Coefficient: <span id='coefficient'>{round(coefficient)}</span>
        </div>
        <div>
          Flour: <span id='flour'>{round(values.flour)} g</span>
        </div>
        <div>
          Water: <span id='water'>{round(values.water)} g</span>
        </div>
        <div>
          Levain: <span id='levain'>{round(values.levain)} g</span>
        </div>
        <div>
          Salt: <span id='salt'>{round(values.salt)} g</span>
        </div>
        <div>
          Other: <span id='other'>{round(values.other)} g</span>
        </div>
      </div>
      <div id='inputs'>
        <div>
          <label htmlFor='weight'>Target weight:</label>
          <input type='text' name='weight' maxLength='6'
                 onInput={update}/>
        </div>
        <div>
          <label htmlFor='flour'>Flour %:</label>
          <input type='text' name='flour' maxLength='5'
                 onInput={update}/>
        </div>
        <div>
          <label htmlFor='water'>Water %:</label>
          <input type='text' name='water' maxLength='5'
                 onInput={update}/>
        </div>
        <div>
          <label htmlFor='levain'>Levain %:</label>
          <input type='text' name='levain' maxLength='5'
                 onInput={update}/>
        </div>
        <div>
          <label htmlFor='salt'>Salt %:</label>
          <input type='text' name='salt' maxLength='5'
                 onInput={update}/>
        </div>
        <div>
          <label htmlFor='other'>Other %:</label>
          <input type='text' name='other' maxLength='5'
                 onInput={update}/>
        </div>
      </div>
    </div>
  </>
}

export default Calculator;
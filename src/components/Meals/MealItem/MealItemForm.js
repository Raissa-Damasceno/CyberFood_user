import { useRef, useState } from 'react';
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {

  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef();

  const submitHandler = event => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
      setAmountIsValid(false);
      return ;
    }

    props.onAddToCart(enteredAmountNumber);

  };


  return (
  <div className={classes.form}>
    <Input 
      ref = {amountInputRef}
      label="Quantidade" input={{
      id: 'amount'+props.id,
      type: 'number',
      min: '1',
      max: '5',
      step: '1',
      defaultValue: '1',
    }}/>
    <button onClick={submitHandler}>Adicionar</button>
    </div>
    )
}

export default MealItemForm;
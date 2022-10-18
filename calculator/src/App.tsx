import React, { createContext, FunctionComponent, useState } from 'react'
import OutputScreen from './components/OutputScreen'
import Buttons from './components/Buttons'
import { Digit, Operator } from './types'
import { Box,VStack } from "@chakra-ui/layout";




export const App: FunctionComponent = () => {

  const [input, setInput] = useState<number>(0)
  const [secondOperand, setSecondOperand] = useState<boolean>(true)
  const [firstOperator, setfirstOperator] = useState<Operator>()
  const [output, setOutput] = useState<string>('0')

 


   

  const performCalculation = (operandTwo: number, firstOperator: Operator): boolean => {
    let newinput = input

    switch (firstOperator) {
      case '+':
        newinput += operandTwo
        break
      case '-':
        newinput -= operandTwo
        break
      case '×':
        newinput *= operandTwo
        break
      case '/':
        if (operandTwo === 0) {
          return false
        }

        newinput /= operandTwo
    }

    setInput(newinput)
    setOutput(newinput.toString().toString().slice(0, 12))

    return true
  }

 
  const digitClickHandler = (digit: String) => {
    console.log("inside digitclickhandler");
    let newoutput = output
let input:Number=+digit;
    if ((output === '0' && input === 0) || output.length > 12) {
      return
    }

    if (secondOperand) {
      newoutput = ''
      setSecondOperand(false)
    }

    if (output !== '0') {
      newoutput = newoutput + digit.toString()
    } else {
      newoutput = input.toString()
    }

    setOutput(newoutput)
  }

  const pointClickHandler = () => {
    let newoutput = output

    if (secondOperand) {
      newoutput = '0'
    }

    if (newoutput.indexOf('.') === -1) {
      newoutput = newoutput + '.'
    }

    setOutput(newoutput)
    setSecondOperand(false)
  }

  const operatorClickHandler = (operator: Operator) => {
    console.log("operatorClickHandler");
    const operand = Number(output)

    if (typeof firstOperator !== 'undefined' && !secondOperand) {
      if (!performCalculation(operand, firstOperator)) {
        return
      }
    } else {
      setInput(operand)
    }

    setfirstOperator(operator)
    setSecondOperand(true)
  }

  const onChangeSignButtonClick = () => {
    const value = Number(output)

    if (value > 0) {
      setOutput('-' + output)
    } else if (value < 0) {
      setOutput(output.slice(1))
    }
  }

  const equalClickHandler = () => {
    const operand = Number(output)

    if (typeof firstOperator !== 'undefined' && !secondOperand) {
      if (!performCalculation(operand, firstOperator)) {
        return
      }

      setfirstOperator(undefined)
    } else {
      setOutput(operand.toString())
    }

    setInput(operand)
    setSecondOperand(true)
  }

  const allClearHandler = () => {
 
    setInput(0)
    setfirstOperator(undefined)
    setOutput('0')
    setSecondOperand(true)
  }

  const clearHandler= () => {
    setOutput('0')
    setSecondOperand(true)
  }

  const clickHandler= (input:any) => {
    console.log("inside clickhandler"+input);
    let type:any="";
   
   if(nums.includes(input)){
    type="DIGIT";
   }
   if(operator.includes(input))
   {
    type="OPERATOR";
   }
   if(operator.includes(input))
   {
    type="MISC";
   }
  
   switch(type)
   {
    case "DIGIT":
      console.log(type);
      digitClickHandler(input);
      break;

      case "OPERATOR":
        operatorClickHandler(input);
        break;

        case "MISC":
          if(input==="C") clearHandler();
          if(input==="AC") allClearHandler();
          if(input==="=") equalClickHandler();
          if(input==="SIGN") onChangeSignButtonClick();
          if(input===".")  pointClickHandler();
          break;
   }
  }

  return (
    <Box>
      <OutputScreen value={output}  expression={typeof firstOperator !== 'undefined' ? `${input}${firstOperator}${secondOperand ? '' : output}` : ''} />
      <Buttons
        clickHandler={clickHandler}
      
      />
    </Box>
  )
}

export default App
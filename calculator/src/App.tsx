import { FunctionComponent, useState } from 'react'
import OutputScreen from './components/OutputScreen'
import Buttons from './components/Buttons'
import { Operator } from './types'
import { Box } from "@chakra-ui/layout";
import { Flex } from '@chakra-ui/react';



export const App: FunctionComponent = () => {

  const [input, setInput] = useState<number>(0)
  const [secondOperand, setSecondOperand] = useState<boolean>(true)
  const [firstOperator, setfirstOperator] = useState<Operator>()
  const [output, setOutput] = useState<string>('0')

  const performCalculation = (rightOperand: number, firstOperator: Operator): boolean => {
    let newinput = input

    switch (firstOperator) {
      case '+':
        newinput += rightOperand
        break
      case '-':
        newinput -= rightOperand
        break
      case '*':
        newinput *= rightOperand
        break
      case '/':
        if (rightOperand === 0) {
          return false
        }

        newinput /= rightOperand
    }

    setInput(newinput)
    setOutput(newinput.toString().toString().slice(0, 12))

    return true
  }


  const digitClickHandler = (digit: String) => {
    console.log("inside digitclickhandler");
    let newoutput = output
    let input: Number = +digit;
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
    console.log("allClearHandler")
    setInput(0)
    setfirstOperator(undefined)
    setOutput('0')
    setSecondOperand(true)
  }

  const clearHandler = () => {
    setOutput('0')
    setSecondOperand(true)
  }

  const clickHandler = (input: any) => {
    console.log("inside clickhandler" + input);
    let type: any = "";
    const nums: Array<String> = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    const operator: Array<Operator> = ['+', '-', '*', '/'];
    const misc: Array<String> = ['AC', 'C', '=', '.', 'SIGN'];
    if (nums.includes(input)) {
      type = "DIGIT";
    }
    if (operator.includes(input)) {
      type = "OPERATOR";
    }
    if (misc.includes(input)) {
      type = "MISC";
    }

    switch (type) {
      case "DIGIT":
        console.log(type);
        digitClickHandler(input);
        break;

      case "OPERATOR":
        operatorClickHandler(input);
        break;

      case "MISC":
        if (input === "C") clearHandler();
        if (input === "AC") allClearHandler();
        if (input === "=") equalClickHandler();
        if (input === "SIGN") onChangeSignButtonClick();
        if (input === ".") pointClickHandler();
        break;
    }
  }

  return (
    <Flex align="center" justify="center" mt='250px'>
      <Box fontSize='40px' bg="black" w='250px' pb='10' alignItems='center'>
        <OutputScreen value={output} expression={typeof firstOperator !== 'undefined' ? `${input}${firstOperator}${secondOperand ? '' : output}` : ''} />
        <Buttons clickHandler={clickHandler} />
      </Box>
    </Flex>
  )
}

export default App
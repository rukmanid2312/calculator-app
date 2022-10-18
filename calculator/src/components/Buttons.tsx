import React, { FunctionComponent, useEffect,useContext } from 'react'
import styled from 'styled-components'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Box,VStack,HStack } from "@chakra-ui/layout";
import { Digit, Operator } from '../types'
import {digitContext} from '../App';

interface ButtonsProps {
  clickHandler: (type:String) => void
}

interface DigitContextInterface {
  nums: Array<String>;
  operator: Array<Operator>;
  misc: Array<String>;
}

export const Buttons: FunctionComponent<ButtonsProps> = ({
  clickHandler
}) => {

const digitCntxt = useContext(digitContext);
const numpad={
  0:["AC","+/-","%","/"],
  1:["7","8","9","*"],
  2:["4","5","6","-"],
  3:["1","2","3","+"],
  4:["0","C",".","="]
};
let keys:String[]=Object.keys(numpad);
  /*const handleKeyDown = ({ keyCode, shiftKey }: KeyboardEvent) => {
    console.log(keyCode)
    if (keyCode >= 48 && keyCode <= 57 && !shiftKey) {
      onDigitButtonClick((keyCode - 48) as Digit)
    } else if ((keyCode >= 96 && keyCode <= 105)) {
      onDigitButtonClick((keyCode - 96) as Digit)
    } else if (keyCode === 107 || (keyCode === 187 && shiftKey)) {
      onOperatorButtonClick('+')
    } else if (keyCode === 109 || keyCode === 189) {
      onOperatorButtonClick('-')
    } else if (keyCode === 106 || (keyCode === 56 && shiftKey)) {
      onOperatorButtonClick('×')
    } else if (keyCode === 111 || keyCode === 191) {
      onOperatorButtonClick('÷')
    } else if (keyCode === 13 || (keyCode === 187 && !shiftKey)) {
      onEqualButtonClick()
    } else if (keyCode === 46) {
      onClearEntryButtonClick()
    } else if (keyCode === 27) {
      onAllClearButtonClick()
    } else if (keyCode === 78) {
      onChangeSignButtonClick()
    } 
  }

  useEffect(() => {
    document.body.addEventListener('keydown', handleKeyDown)
    return () => document.body.removeEventListener('keydown', handleKeyDown)
  })
*/
  return (

      
    
    <Box>
     
     <VStack>
     <HStack>
     {
            numpad[0].map((num)=>  <Button onClick={() => clickHandler(num)}>
            {num}
          </Button>)
        
    } 
  
      </HStack>
      <HStack>
      {
            numpad[1].map((num)=>  <Button onClick={() => clickHandler(num)}>
            {num}
          </Button>)
        
    } 
      </HStack>
      <HStack>
      {
            numpad[2].map((num)=>  <Button onClick={() => clickHandler(num)}>
            {num}
          </Button>)
        
    } 
      </HStack>
     <HStack>
     {
            numpad[3].map((num)=>  <Button onClick={() => clickHandler(num)}>
            {num}
          </Button>)
        
    } 
     </HStack>
     <HStack>
     {
            numpad[3].map((num)=>  <Button onClick={() => clickHandler(num)}>
            {num}
          </Button>)
        
    } 
     </HStack>
     </VStack>

    </Box>
  )
}

export default Buttons
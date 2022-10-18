import { FunctionComponent } from 'react'
import { Button } from '@chakra-ui/react'
import { Box, VStack, HStack } from "@chakra-ui/layout";
import {numpad} from '../button-data';

interface ButtonsProps {
  clickHandler: (type: String) => void
}

export const Buttons: FunctionComponent<ButtonsProps> = ({ clickHandler }) => {
 

  
const rows=[0,1,2,3,4]
  return (
    <Box>
      <VStack>
        {
          rows.map((row)=>{
            
            let start=row===0?row:4*row;
            let end=start+4;
          return(  <HStack>
              {
              numpad.slice(start,end).map((item)=>{
                return (<Button borderRadius={item.br} w={item.w} h={item.h} bg={item.bg} color={item.color} onClick={() => clickHandler(item.value)}>{item.name}  </Button>)
              })
              }

            </HStack>)
          })
        }
          
      </VStack>
    </Box>
  )
}

export default Buttons

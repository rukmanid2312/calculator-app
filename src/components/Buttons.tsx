import { FunctionComponent } from 'react'
import { Button } from '@chakra-ui/react'
import { Box, VStack, HStack } from "@chakra-ui/layout";

interface ButtonsProps {
  clickHandler: (type: String) => void
}

export const Buttons: FunctionComponent<ButtonsProps> = ({ clickHandler }) => {
  const btnMisc = {
    bgColor: '#b4b4b4',
    color: 'black'
  }

  const btnOperator = {
    bgColor: '#ff9900',
    color: 'white'
  }

  const btnDigit = {
    bgColor: '#737373',
    color: 'white'
  }

  const numpad = [
    {
      name: "AC",
      value: "AC",
      bg: btnMisc.bgColor,
      color: btnMisc.color,
      w: '40px',
      h: '40px',
      br: '50%'
    },
    {
      name: " C",
      value: "C",
      bg: btnMisc.bgColor,
      color: btnMisc.color,
      w: '40px',
      h: '40px',
      br: '50%'
    },
    {
      name: "+/-",
      value: "SIGN",
      bg: btnMisc.bgColor,
      color: btnMisc.color,
      w: '40px',
      h: '40px',
      br: '50%'
    },
    {
      name: "÷",
      value: "/",
      bg: btnOperator.bgColor,
      color: btnOperator.color,
      w: '40px',
      h: '40px',
      br: '50%'
    },
    {
      name: " 7",
      value: "7",
      bg: btnDigit.bgColor,
      color: btnDigit.color,
      w: '40px',
      h: '40px',
      br: '50%'
    },
    {
      name: "8",
      value: "8",
      bg: btnDigit.bgColor,
      color: btnDigit.color,
      w: '40px',
      h: '40px',
      br: '50%'
    },
    {
      name: "9",
      value: "9",
      bg: btnDigit.bgColor,
      color: btnDigit.color,
      w: '40px',
      h: '40px',
      br: '50%'
    },
    {
      name: "x",
      value: "*",
      bg: btnOperator.bgColor,
      color: btnOperator.color,
      w: '40px',
      h: '40px',
      br: '50%'
    },
    {
      name: "4",
      value: "4",
      bg: btnDigit.bgColor,
      color: btnDigit.color,
      w: '40px',
      h: '40px',
      br: '50%'
    },{
      name: "5",
      value: "5",
      bg: btnDigit.bgColor,
      color: btnDigit.color,
      w: '40px',
      h: '40px',
      br: '50%'
    },{
      name: "6",
      value: "6",
      bg: btnDigit.bgColor,
      color: btnDigit.color,
      w: '40px',
      h: '40px',
      br: '50%'
    },
    {
      name: "-",
      value: "-",
      bg: btnOperator.bgColor,
      color: btnOperator.color,
      w: '40px',
      h: '40px',
      br: '50%'
    },{
      name: "1",
      value: "1",
      bg: btnDigit.bgColor,
      color: btnDigit.color,
      w: '40px',
      h: '40px',
      br: '50%'
    },{
      name: "2",
      value: "2",
      bg: btnDigit.bgColor,
      color: btnDigit.color,
      w: '40px',
      h: '40px',
      br: '50%'
    },
    {
      name: "3",
      value: "3",
      bg: btnDigit.bgColor,
      color: btnDigit.color,
      w: '40px',
      h: '40px',
      br: '50%'
    },{
      name: "+",
      value: "+",
      bg: btnOperator.bgColor,
      color: btnOperator.color,
      w: '40px',
      h: '40px',
      br: '50%'
    },
    {
      name: "0",
      value: "0",
      bg: btnDigit.bgColor,
      color: btnDigit.color,
      w: '85px',
      h: '40px',
      br: '20px'
    },
    {
      name: ".",
      value: ".",
      bg: btnDigit.bgColor,
      color: btnDigit.color,
      w: '40px',
      h: '40px',
      br: '50%'
    },
    {
      name: "=",
      value: "=",
      bg: btnOperator.bgColor,
      color: btnOperator.color,
      w: '40px',
      h: '40px',
      br: '50%'
    }
  ]
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

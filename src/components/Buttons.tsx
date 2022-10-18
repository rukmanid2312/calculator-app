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

  return (
    <Box>
      <VStack>
        <HStack>
          <Button borderRadius='50%' w='40px' h='40px' bg={btnMisc.bgColor} color={btnMisc.color} onClick={() => clickHandler('AC')}>
            AC
          </Button>
          <Button borderRadius='50%' w='40px' h='40px' bg={btnMisc.bgColor} color={btnMisc.color} onClick={() => clickHandler('C')}>
            C
          </Button>
          <Button borderRadius='50%' w='40px' h='40px' bg={btnMisc.bgColor} color={btnMisc.color} onClick={() => clickHandler('SIGN')}>
            -/+
          </Button>
          <Button borderRadius='50%' w='40px' h='40px' bg={btnOperator.bgColor} color={btnOperator.color} onClick={() => clickHandler('/')}>
            ÷
          </Button>
        </HStack>
        <HStack>
          <Button borderRadius='50%' w='40px' h='40px' bg={btnDigit.bgColor} color={btnDigit.color} onClick={() => clickHandler('7')}>
            7
          </Button>
          <Button borderRadius='50%' w='40px' h='40px' bg={btnDigit.bgColor} color={btnDigit.color} onClick={() => clickHandler('8')}>
            8
          </Button>
          <Button borderRadius='50%' w='40px' h='40px' bg={btnDigit.bgColor} color={btnDigit.color} onClick={() => clickHandler('9')}>
            9
          </Button>
          <Button borderRadius='50%' w='40px' h='40px' bg={btnOperator.bgColor} color={btnOperator.color} onClick={() => clickHandler('*')}>
            ×
          </Button>
        </HStack>
        <HStack>
          <Button borderRadius='50%' w='40px' h='40px' bg={btnDigit.bgColor} color={btnDigit.color} onClick={() => clickHandler('4')}>
            4
          </Button>
          <Button borderRadius='50%' w='40px' h='40px' bg={btnDigit.bgColor} color={btnDigit.color} onClick={() => clickHandler('5')}>
            5
          </Button>
          <Button borderRadius='50%' w='40px' h='40px' bg={btnDigit.bgColor} color={btnDigit.color} onClick={() => clickHandler('6')}>
            6
          </Button>
          <Button borderRadius='50%' w='40px' h='40px' bg={btnOperator.bgColor} color={btnOperator.color} onClick={() => clickHandler('-')}>
            -
          </Button>
        </HStack>
        <HStack>
          <Button borderRadius='50%' w='40px' h='40px' bg={btnDigit.bgColor} color={btnDigit.color} onClick={() => clickHandler('1')}>
            1
          </Button>
          <Button borderRadius='50%' w='40px' h='40px' bg={btnDigit.bgColor} color={btnDigit.color} onClick={() => clickHandler('2')}>
            2
          </Button>
          <Button borderRadius='50%' w='40px' h='40px' bg={btnDigit.bgColor} color={btnDigit.color} onClick={() => clickHandler('3')}>
            3
          </Button>
          <Button borderRadius='50%' w='40px' h='40px' bg={btnOperator.bgColor} color={btnOperator.color} onClick={() => clickHandler('+')}>
            +
          </Button>
        </HStack>
        <HStack>
          <Button borderRadius='20px' w='85px' h='40px' bg={btnDigit.bgColor} color={btnDigit.color} onClick={() => clickHandler('0')}>
            0
          </Button>
          <Button borderRadius='50%' w='40px' h='40px' bg={btnDigit.bgColor} color={btnDigit.color} onClick={() => clickHandler('.')}>
            .
          </Button>
          <Button borderRadius='50%' w='40px' h='40px' bg={btnOperator.bgColor} color={btnOperator.color} onClick={() => clickHandler('=')}>
            =
          </Button>
        </HStack>
      </VStack>
    </Box>
  )
}

export default Buttons

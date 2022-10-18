import { FunctionComponent } from 'react'
import { Box, VStack } from "@chakra-ui/layout";
import { Flex } from '@chakra-ui/react';

interface OutputScreenProps {
  expression: string
  value: string
}



export const OutputScreen: FunctionComponent<OutputScreenProps> = ({ value, expression }) => {
  return (
    <VStack display='flex' alignItems='end' justifyContent='end' pr="35px" pb='20px' h="140px">
      <Box color='white'> {expression}</Box>
      <Box color='white'>  {value}</Box>

    </VStack >
  )
}

export default OutputScreen

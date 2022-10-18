

import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Box,VStack,HStack } from "@chakra-ui/layout";

interface OutputScreenProps {
  expression: string
  value: string
}



export const OutputScreen: FunctionComponent<OutputScreenProps> = ({ value, expression }) => {
  return (
 
    <VStack>
       <Box> {expression}</Box>  
       <Box>  {value}</Box>  
      </VStack>
       
      
  )
}

export default OutputScreen

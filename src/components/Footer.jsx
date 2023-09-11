import React from 'react'
import { AiOutlineSend } from 'react-icons/ai';
import { Box, Button, HStack, Heading, Input, Stack, VStack, Text} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub ,faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return <Box bgColor={"blackAlpha.900"} minH={"40"} p={"16"} color={"white"}> 
  
  <Stack
    direction={['column' , 'row']}
  >
    <VStack alignItems={['center','stretch']} w={'full'} px={'4'}>
        <Heading size='md' textTransform={'uppercase'}>
            suuubscribeeeeee
        </Heading>
        <HStack borderBottom={'2px solid white'} py="2">
            <Input
             placeholder='enter email here...'
             border={'none'}
             borderRadius={'none'}
             outline={'none'}
             focusBorderColor='none' 
             />
             <Button 
                p={'0'}
                colorScheme={'purple'}
                variant={'ghost'}
                borderRadius={'0 20px 20px 0'}
            >
                <AiOutlineSend size={20}/>
            </Button>
        </HStack>
    </VStack>

<VStack
w={'full'} 
borderLeft={['none' , '1px solid white']} 
borderRight={['none' , '1px solid white']}
>
  <Heading 
  textTransform={'uppercase'} 
  textAlign={'center'}>
   ClipCraze
  </Heading>
  <Text>All rights reserved@2003</Text>
</VStack>


<VStack w={'full'} >
          <Heading size={'md'} textTransform={'uppercase'}>
            social media
          </Heading>
          <HStack>
          <Button variant={'ghost'} colorScheme={'white'} _hover={{
        bg: 'grey',
        cursor: 'pointer',
      }}>
            <a target={'_blank'} href='https://github.com/dev-daizy' rel="noreferrer">
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </a>
          </Button>
          <Button variant={'ghost'} colorScheme={'white'} _hover={{
        bg: 'blue.500',
        cursor: 'pointer',
      }}>
            <a target={'_blank'} href='https://x.com/dev_daizy' rel="noreferrer">
            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            </a>
          </Button>
          <Button variant={'ghost'} colorScheme={'white'} _hover={{
        bg: 'red.700',
        cursor: 'pointer',
      }}>
            <a target={'_blank'} href='https://instagram.com/dev_daizy' rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} ></FontAwesomeIcon>
            </a>
          </Button>
          </HStack>
 </VStack>
  </Stack>
</Box>
}

export default Footer
import React from 'react'
import { Container, Heading, VStack ,Input, Button, Text} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const login = () => {
  return (
   <Container maxW={'container.xl'} h={"100vh"} p={'16'}>

<form>
    <VStack 
    alignItems={'stretch'}
    spacing={8} 
    w={['full','96']}
    m={'auto'}
    my={'10'}
    >
<Heading textTransform={'uppercase'} alignSelf={'center'}>welcome back</Heading>
<Input 
placeholder={'Email'}
 type='email'
 required
  focusBorderColor='purple.500'
 />
<Input 
placeholder={'Password'}
 type='password'
 required 
 focusBorderColor='purple.500'
 />
<Button variant={'link'} alignSelf={'flex-end'}>
    <Link to={'/forgetpassword'}>Forget Password.?</Link>
</Button>

<Button
colorScheme='purple'
type='submit'
>Log In</Button>

<Text textAlign={'center'}>New User {'👉'}{' '}
<Button variant={'link'} alignSelf={'center'} colorScheme='purple'>
    <Link to={'/Signup'}>Sign Up</Link>
</Button>
</Text>

    </VStack>
</form>

   </Container>
  )
}

export default login
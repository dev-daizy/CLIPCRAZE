import React from 'react';
import { Box, Heading, Image, Stack ,Container,Text ,Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// css file
import "./styles/Service.css"
// import img1 from '../assets/img1.jpeg';
import imgg1 from '../assets/imgg1.jpg';
import imgg2 from '../assets/imgg2.jpg';
import imgg3 from '../assets/imgg3.jpg';
import imgg4 from '../assets/imgg4.jpg';
import servicepng from '../assets/servicepng.png';

const Headingoptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />

<Container 
  maxW="container.xl" 
  minH={'100vh'} 
  p="16"
 >

        <Heading
        textTransform={'uppercase'}
        py='2'
        w={'fit-content'}
        borderBottom={'2px solid'}
        m="auto">
          Features That Set Us Apart
        </Heading>


<Stack
h="full"
p={'4'}
alignItems={'center'}
direction={['column','row']}
>
  <Image className='animation' src={servicepng} h={['60','500']} borderRadius={10} />
  <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","16"]} textAlign={'center'} >
    <div className='services'>
    <div >
      <h2 >Video Upload and Hosting</h2>
      <p className='desktop-only'>Easily upload and store your videos on our platform. We provide reliable hosting services that ensure your content is accessible to your audience</p>
    </div>
    <div>
      <h2>Personalized Recommendations</h2>
      <p
      className='desktop-only'>Discover new content tailored to your interests. Our algorithm learns from your viewing habits to suggest videos that match your preferences</p>
    </div>
    <div >
      <h2 >Multi-Device Accessibility</h2>
      <p
      className='desktop-only'>Enjoy your favorite content on any device, whether it's a desktop, tablet, or mobile phone. Our platform is designed to adapt to your lifestyle</p>
    </div>
    <div>
      <h2>Advanced Analytics for Creators</h2>
      <p
      className='desktop-only'>Gain insights into your video performance. Track views, engagement metrics, and audience demographics to refine your content strategy</p>
    </div>
    </div>
  </Text>

</Stack>
<Text textAlign={'center'}><Button   variant={'solid'}  alignSelf={'center'} colorScheme='purple'>
<Link to={'/Signup'}>Get started</Link>
</Button>

</Text>


      </Container>
    </Box>
  );
};

const MyCarousel = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={1000}
      showStatus={false}
      showThumbs={false}
      showArrows={true}
      stopOnHover={true}
    >
      <div>
        <Box w="full" h="100vh">
          <Image src={imgg1} alt="Image 1" h={'full'} w={'full'} objectFit={'cover'}/>
          <Heading bgColor="blackAlpha.600" color="white" fontSize={['xl','5xl']} {...Headingoptions}>
          Empowering Creator Showcase Your Content on Our Video Streaming Platform
          </Heading>
        </Box>
      </div>

      <div>
        <Box w="full" h="100vh">
          <Image src={imgg2} alt="Image 2" h={'full'} w={'full'} objectFit={'cover'}/>
          <Heading bgColor="blackAlpha.600" color="white" fontSize={['xl','5xl']} {...Headingoptions}>
            Revolutionize Your Entertainment Experience with Our Video Streaming App!
          </Heading>
        </Box>
      </div>

      <div>
        <Box w="full" h="100vh">
          <Image src={imgg3} alt="Image 3" h={'full'} w={'full'} objectFit={'cover'}/>
          <Heading bgColor="blackAlpha.600" color="white" fontSize={['xl','5xl']} {...Headingoptions}>
            Unleash the Power of Personalized Video Streaming
          </Heading>
        </Box>
      </div>

      <div>
        <Box w="full" h="100vh">
          <Image src={imgg4} alt="Image 4" h={'full'} w={'full'} objectFit={'cover'}/>
          <Heading bgColor="blackAlpha.600" color="white" fontSize={['xl','5xl']} {...Headingoptions}>
           Seamless Video Uploads and Instant Playback
          </Heading>
        </Box>
      </div>
    </Carousel>
  );
};

export default Home;

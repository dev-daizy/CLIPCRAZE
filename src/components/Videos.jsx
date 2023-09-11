import React, { useState } from 'react';
import { VStack, Heading, Text, Divider, Button, Flex } from '@chakra-ui/react';

import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';
import video3 from '../assets/video3.mp4';

const Videos = () => {
  const videosArr = [video1, video2, video3];
  const [videoSrc, setVideoSrc] = useState(videosArr[0]);

  return (
    <Flex direction={['column', 'row']} h={'100vh'}>
      {/* videos */}
      <VStack w={['full', '80%']} padding={8}>
        <video
          controls
          controlsList='nodownload'
          src={videoSrc}
          style={{
            width: '100%',
          }}
        ></video>
        <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'}>
          <Heading>this is sample video</Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            enim.
          </Text>
        </VStack>
        <Divider orientation='horizontal' />
      </VStack>
        {/* <Divider orientation={['horizontal','vertical']}/> */}
    
      {/* upcoming lectures */}
      <VStack p={4} w={['full', '30%']} h={['auto', '80%']} alignItems={'stretch'} textAlign={'center'} spacing={8} overflowY={'auto'} mt={['-1.5','10']}>
        <Heading size="md" textTransform={'uppercase'}>
          Upcoming Lectures
        </Heading>
        {videosArr.map((item, index) => (
          <Button
            key={index}
            variant={'ghost'}
            colorScheme='purple'
            onClick={() => setVideoSrc(item)}
          >
            Lecture {index + 1}
          </Button>
        ))}
      </VStack>
    </Flex>
  );
};

export default Videos;

import React from 'react';
import Sponsor from '../../../components/body/sponsor';
import MainTitle from '../../../components/typography/mainTitle';
import Divider from '../../../components/body/divider';
import Image from '../../../components/typography/image';
import Heading from '../../../components/typography/heading';
import Strong from '../../../components/typography/strong';
import Paragraph from '../../../components/typography/paragraph';

const BodyPrototype = ({ config }) => {
  const {
    sponsor, mainTitle, paragraphFirst, memImageLink, paragraphSecond, heading, paragraphThird, memImageLink2, paragraphFourth, heading2, heading3, imageLink, paragraphFive,
  } = config;

  return (
    <>
      <MainTitle>
        {mainTitle}
      </MainTitle>
      <Paragraph>
        {paragraphFirst}
      </Paragraph>
      <Image
        href="#"
        src={memImageLink}
        alt="GIF"
      />
      {' '}
      I
      <Divider />
      <Paragraph>
        {paragraphSecond}
      </Paragraph>
      <Heading>
        <Strong>{heading}</Strong>
      </Heading>
      <Paragraph>
        {paragraphThird}
      </Paragraph>
      <Image
        href="#"
        src={memImageLink2}
      />
      <Divider />
      <Paragraph>
        {paragraphFourth}
      </Paragraph>
      <Heading>
        <Strong>{heading2}</Strong>
      </Heading>
      <Heading>
        <Strong>{heading3}</Strong>
      </Heading>
      <Image href="#" src={imageLink} />
      <Divider />
      <Paragraph>
        {paragraphFive}
      </Paragraph>
      <Divider />
    </>
  );
};

export default BodyPrototype;

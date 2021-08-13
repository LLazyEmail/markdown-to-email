import React from 'react';

import { 
  MainTitle, Image, Heading, Strong, Paragraph, Separator  
} from "atherdon-react-markdown-component-typography"

import { 
  Sponsor, Divider, CtaList, GetPublished, JoinUs
 }  from "atherdon-react-markdown-component-body"


import { links } from './config';

const BodyPrototype = ({ config }) => {
  const {
    sponsor, mainTitle, paragraphFirst, memImageLink,
    paragraphSecond, heading, paragraphThird, memImageLink2,
    paragraphFourth, heading2, heading3, imageLink, paragraphFive,
  } = config;

  return (
    <>
      <Sponsor
        leftHref={links.sponsor}
        rightHref={sponsor.link}
        leftSrc={sponsor.imageUrl}
      >
        {sponsor.text}
      </Sponsor>
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
      <Divider />
      <CtaList />
      <Separator />
      <JoinUs />
      <Divider />
      <Separator />
      <GetPublished />
      <Divider />
      <Sponsor
        leftHref={links.sponsor}
        rightHref={sponsor.link}
        leftSrc={sponsor.imageUrl}
      >
        {sponsor.text}
      </Sponsor>
    </>
  );
};

export default BodyPrototype;

import React from 'react';

import { 
  MainTitle, Image, Heading, Strong, Paragraph, Separator, Link  
} from "atherdon-react-markdown-component-typography"

import { 
  Sponsor, Divider, CtaList, GetPublished, JoinUs
} from "atherdon-react-markdown-component-body"


import { links } from './config';

const BodyPrototype = ({ config }) => {
  // @TODO update this version. i think it's really too much
  const {
    sponsor, mainTitle, memImageLink, heading, paragraphThird, memImageLink2,
    paragraphFourth, heading2, heading3, paragraphFive, paragraphFourth_1,
    paragraphFirst, paragraphFirst_1, paragraphFive_1, paragraphFive_2, paragraphSix,
    paragraphSix_1, paragraphSix_2, paragraphSix_3, heading4, paragraphSeven,
    paragraphSeven_1
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
      <Divider />
      <MainTitle>
        {mainTitle}
      </MainTitle>
      <Divider />
      <Paragraph>
        {paragraphFirst} <Link href={links.link1}><Strong>edge computing</Strong></Link>.
        {paragraphFirst_1} <Link href={links.link2}><Strong>data processing.</Strong></Link>
      </Paragraph>
      <Divider />
      <Image
        href="#"
        src={memImageLink}
        alt="GIF"
      />
      <Divider />
      <Heading>
        <Strong>{heading}</Strong>
      </Heading>
      <Divider />
      <Paragraph>
        {paragraphThird}
      </Paragraph>
      <Divider />
      <Image
        href="#"
        src={memImageLink2}
      />
      <Divider />
      <Paragraph>
        {paragraphFourth}
        <Divider />
        {paragraphFourth_1}
      </Paragraph>
      <Divider />
      <Heading>
        {heading2}
      </Heading>
      <Divider />
      <Paragraph>
        {paragraphFive}
        <Divider />
        {paragraphFive_1}
        <Divider />
        {paragraphFive_2}
      </Paragraph>
      <Divider />
      <Heading>
        {heading3}
      </Heading>
      <Divider />
      <Paragraph>
        {paragraphSix}
        <Divider />
        {paragraphSix_1}
        <Divider />
        {paragraphSix_2}
        <Divider />
        {paragraphSix_3}
      </Paragraph>
      <Divider />
      <Heading>
        {heading4}
      </Heading>
      <Divider />
      <Paragraph>
        {paragraphSeven}
        <Divider />
        {paragraphSeven_1}
      </Paragraph>
      <Divider />
      <Image
        href="#"
        src={memImageLink2}
      />
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

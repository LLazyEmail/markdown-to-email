import React from 'react';
import Sponsor from 'components/body/sponsor';
import MainTitle from 'components/typography/mainTitle';
import Divider from 'components/body/divider';
import Image from 'components/typography/image';
import Heading from 'components/typography/heading';
import Strong from 'components/typography/strong';
import Paragraph from 'components/typography/paragraph';
import CtaList from 'components/body/ctaList';
import GetPublished from 'components/body/getpublished';
import JoinUs from 'components/body/joinus';
import Separator from 'components/typography/separator';
import Link from 'components/typography/link';

const BodyPrototype = ({ config }) => {
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
        leftHref="https://bit.ly/30AWyC4"
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
        {paragraphFirst} <Link href='https://hackernoon.com/how-iot-and-edge-computing-influence-various-industries-kp193442'><Strong>edge computing</Strong></Link>.
        {paragraphFirst_1} <Link href="https://hackernoon.com/ingestion-and-processing-of-data-for-big-data-and-iot-solutions-659431e37b52"><Strong>data processing.</Strong></Link>
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
        leftHref="https://bit.ly/30AWyC4"
        rightHref={sponsor.link}
        leftSrc={sponsor.imageUrl}
      >
        {sponsor.text}
      </Sponsor>
    </>
  );
};

export default BodyPrototype;

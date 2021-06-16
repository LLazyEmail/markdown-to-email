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
    sponsor, mainTitle, memImageLink, heading, paragraphThird, memImageLink2, paragraphFourth, heading2, heading3, imageLink, paragraphFive,
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
        'Edge' is a buzzword.
        You’ll probably see it flashing like a neon sign in every corner of the Internet.
        But this time, its irritating omnipresence is justified, because we are discussing the value of <Link href='https://hackernoon.com/how-iot-and-edge-computing-influence-various-industries-kp193442'><Strong>edge computing</Strong></Link>.
        This new kid on the block has already gained the perception of being the cause of faster, cheaper, and more reliable <Link href="https://hackernoon.com/ingestion-and-processing-of-data-for-big-data-and-iot-solutions-659431e37b52"><Strong>data processing.</Strong></Link>
      </Paragraph>
      <Divider />
      <Image
        href="#"
        src={memImageLink}
        alt="GIF"
      />
      {' '}
      <Divider />
      <Heading>
        <Strong>{heading}</Strong>
      </Heading>
      <Divider />
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

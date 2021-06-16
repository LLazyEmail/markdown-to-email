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
        It seems like only yesterday cloud computing entered the mainstream. Even before we consumed YouTube videos, podcasts, and articles on that topic, a new player had stepped onto the court.
      </Paragraph>
      <Divider />
      <Image
        href="#"
        src={memImageLink2}
      />
      <Divider />
      <Paragraph>
        Edge computing may appear avant-garde or revolutionary, but in fact, you must have seen it at least once in your life. Its principle is seen across modern devices and point-to-point computing technologies, including smartphones, tablets, sensors, robotics, and automated lines.
        <Divider />
        In simple words, edge computing increases the efficiency of a distributed computing framework. Its primary goal is to bring data and computing closer to the applications that consume it - all that thanks to co-located servers.
      </Paragraph>
      <Divider />
      <Heading>
        Why Step Closer to the Edge?
      </Heading>
      <Divider />
      <Paragraph>
        Data is the lifeblood of any application and any business venture. Sometimes fast data processing is a luxury. Other times, fast data processing is a factor in decision-making for businesses and customers alike.
        <Divider />
        By relocating data processing functions closer to the network edge, you’ll get your share of key-value points. In most cases, these refer to supreme reliability and resilience.
        <Divider />
        It also means that you can increase the guarantees of business uptime by providing uninterrupted access to data, regardless of the Internet.
        Furthermore, being able to withstand those inevitable connection issues can help you ensure better application performance and provide a better user experience.
      </Paragraph>
      <Divider />
      <Heading>
        The Key is Connectivity
      </Heading>
      <Divider />
      <Paragraph>
        Remember the famous 2-hour register outage at Target in 2019? The downtime of their system resulted in a $50 million hit and customer backlash - all because of the register glitch.
        <Divider />
        If it were present, edge computing may have helped to avoid this situation, due to having embedded storage directly on applicable devices. It can also move data prep and processing storage closer to the applications thus, leveraging tiered edge data centers.
        <Divider />
        Tiering is what insulates applications from central and regional data center outages. With each tier—leveraging successively— there becomes more local connectivity. It synchronizes data within and across the tiers, or as conductivity permits.
        <Divider />
        Imagine if all of the stores at Target had a micro data center running in each store. They could have easily avoided the complete shutdown and continued to process certain transactions despite the main data center outage.
      </Paragraph>
      <Divider />
      <Heading>
        The Next Big Thing?
      </Heading>
      <Divider />
      <Paragraph>
        Often touted as the ‘third act of the Internet,’ edge computing is also being hailed as a “gold rush” break for fledgling and existing ecosystem enthusiasts. The speed and flexibility afforded by its architecture to managing data creates an exciting range of possibilities for companies.
        <Divider />
        Implementing it can put enterprises on the cutting edge. Moreover, implementing the right choice of the database can drive down the costs of being on the cutting edge.
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

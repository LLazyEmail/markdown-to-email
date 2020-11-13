import React from 'react';
import Body from './body';
import Divider from './body/divider';
import Image from "./typography/image/index";
import Heading from "./typography/heading/index";
import Strong from "./typography/strong/index";
import Sponsor from "./body/sponsor/index";
import MainTitle from "./typography/mainTitle/index";
import Paragraph from "./typography/paragraph/index";

export default function App() {
    return (
        <Body>
            <Sponsor leftHref="https://bit.ly/30AWyC4" rightHref="https://bit.ly/30AWyC4"
                     leftSrc="https://raw.githubusercontent.com/atherdon/newsletters/master/archive/logos/thematic/2020/September/flatfile-logo-black-small-vertical.png">
                Ship the data importer you always dreamed of
            </Sponsor>
            <MainTitle>
                Can We Make Data Tidy?
            </MainTitle>
            <Paragraph>
                    Imagine: You are going to sit down with a newly-fetched data set,
                    excited about the insights it will bring you and then you find out it is no use.
                    If you’ve been there, then you know for sure what an untidy dataset is.
            </Paragraph>
            <Image href="#" src="https://raw.githubusercontent.com/atherdon/newsletters/master/archive/img/memes/6.jpg"
                   alt="GIF"/> I
            <Divider />
            <Paragraph>
                A statistician from New Zealand once said: Tidy datasets are all alike, but every messy dataset
                is messy in its own way. Indeed, as data may come in various forms and shapes, sometimes we are
                inundated with it. As a result, our data science team becomes shortsighted and oops..
                disillusioned by mountains of unworkable data. The only way data specialists can facilitate analysis is
                by keeping data clean and organized.
            </Paragraph>
            <Heading>
                <Strong>What is tidy data?</Strong>
            </Heading>
            <Paragraph>
                Essentially, tidy data is a term coined by Hadley Wickham in his Tidy Data paper (remember that
                statistician from NZ?).
                He defined tidy data as data that is neatly organized and all set for analysis. This way of organizing
                allows you to easily produce charts,
                diagrams, and summary statistics. As it often happens, not all data comes out of the database clean,
                therefore cleansing it is essential
                to efficiently analyze it.
            </Paragraph>
            <Image href="#" src = "https://raw.githubusercontent.com/atherdon/newsletters/master/archive/img/memes/1.png"/>
        </Body>
    );
}

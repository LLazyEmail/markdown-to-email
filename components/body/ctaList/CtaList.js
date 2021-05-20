import React from 'react';
import { a, li, p } from './styles';

const CtaList = () => (
    <div dir="ltr" style={{ textAlign: 'justify' }} >
        <strong style={{ fontWeight: 'bolder' }}>Ready to Claim Your Internet Name on Hacker Noon?</strong>
        <ol>
            <li dir="ltr" style={li}>
                <p dir="ltr" role="presentation" style={p}><a href="https://hackernoon.com/signup?ref=noonifications.tech" target="_blank" style={p}>Create a free account</a>.</p></li>
            <li dir="ltr" style={li}>
                <p dir="ltr" role="presentation" style={p}><a href="https://app.hackernoon.com/subscriptions?ref=noonifications.tech" target="_blank" style={p}>Tell us what you want to read about</a>.</p></li>
            <li dir="ltr"
                style={li}>
                <p dir="ltr" role="presentation" style={p}><a href="https://app.hackernoon.com/new?ref=noonifications.tech" target="_blank" style={p}>Submit your own tech stories</a>. </p></li>
            <li dir="ltr" style={li}>
                <p dir="ltr" role="presentation" style={p}><a href="https://sponsor.hackernoon.com/brand-as-author?ref=noonifications.tech" target="_blank" style={p}>Gain Access to Brand-As-Author</a>™ Program. </p></li>
            <li dir="ltr" style={li}>
                <p dir="ltr" role="presentation" style={p}>Get Your Tech Stories Featured on the <a href="https://hackernoon.com/?ref=noonifications.tech" target="_blank" style={p}>Homepage of Hacker Noon</a>.</p>
            </li>
        </ol>
    </div>
);

export default CtaList;
import React from 'react';
import { a, li, p, div, strong } from './styles';
import { config } from './config';

const CtaList = () => (
  <div dir="ltr" style={div}>
    <strong style={strong}>Ready to Claim Your Internet Name on Hacker Noon?</strong>
    <ol>
      <li dir="ltr" style={li}>
        <p dir="ltr" role="presentation" style={p}><a href={config.link1} target="_blank" style={a}>Create a free account</a>.</p></li>
      <li dir="ltr" style={li}>
        <p dir="ltr" role="presentation" style={p}><a href={config.link2} target="_blank" style={a}>Tell us what you want to read about</a>.</p></li>
      <li dir="ltr"
        style={li}>
        <p dir="ltr" role="presentation" style={p}><a href={config.link3} target="_blank" style={a}>Submit your own tech stories</a>. </p></li>
      <li dir="ltr" style={li}>
        <p dir="ltr" role="presentation" style={p}><a href={config.link4} target="_blank" style={a}>Gain Access to Brand-As-Author</a>™ Program. </p></li>
      <li dir="ltr" style={li}>
        <p dir="ltr" role="presentation" style={p}>Get Your Tech Stories Featured on the <a href={config.link5} target="_blank" style={a}>Homepage of Hacker Noon</a>.</p>
      </li>
    </ol>
  </div>
);

export default CtaList;
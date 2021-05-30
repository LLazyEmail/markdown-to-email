import React from 'react';
import { a } from './styles';

const GetPublished = () => (
    <div dir="ltr" style={{ textAlign: 'justify' }}>
        <span style={{ fontSize: '16px' }}>
            <span style={{ fontFamily: 'trebuchet ms,lucida grande,lucida sans unicode,lucida sans,tahoma,sans-serif' }}>
                <a href="https://hackernoon.com/signup"
                    style={a}
                    target="_blank">Got a tech story to share with our readers?</a> Everything you&#39;ve ever wanted to know about how to get published on Hacker Noon - <a href="http://publish.hackernoon.com/" style={a} target="_blank">get it here</a>.
            </span>
        </span>
    </div>
);

export default GetPublished;
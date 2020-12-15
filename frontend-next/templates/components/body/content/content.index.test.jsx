import React from 'react';
import Content from './index';
import ReactDOM from 'react-dom'
import { configure, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('content/index component', () => {
    test('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Content />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it("components children element should contain 'content'", () => {
        expect(render(<Content />).text()).toEqual('content');
    });
});

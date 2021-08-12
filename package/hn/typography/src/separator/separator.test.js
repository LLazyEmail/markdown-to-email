import React from 'react';
import { create } from 'react-test-renderer';
import ReactDOM from 'react-dom';
import Separator from './index';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Separator/index component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Separator />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders correctly', () => {
        const tree = create(<Separator />);
        expect(tree.toJSON()).toMatchSnapshot();
    });
});
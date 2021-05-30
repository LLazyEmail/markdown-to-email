import React from 'react';
import { create } from 'react-test-renderer';
import ReactDOM from 'react-dom';
import GetPublished from './index';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('GetPublished/index component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<GetPublished />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders correctly', () => {
        const tree = create(<GetPublished />);
        expect(tree.toJSON()).toMatchSnapshot();
    });
});
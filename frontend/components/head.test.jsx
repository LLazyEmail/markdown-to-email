import React from "react"
import {create} from "react-test-renderer"
import Head from "./head";
import ReactDOM from "react-dom";

describe("head component", () => {

    test("renders without crashing", () => {
        const div = document.createElement('div')
        ReactDOM.render(<Head />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    test('renders correctly', () => {
        const tree = create(<Head/>)
        expect(tree.toJSON()).toMatchSnapshot();
    });

})
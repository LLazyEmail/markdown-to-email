import React from "react"
import {create} from "react-test-renderer"
import HeadLine from "./index"
import ReactDOM from "react-dom";
import {cleanup} from "@testing-library/react";

afterEach(() => {
    cleanup()
});

describe("headline/index component", () => {

    test("renders without crashing", () => {
        const div = document.createElement('div')
        ReactDOM.render(<HeadLine />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    test('renders correctly', () => {
        const tree = create(<HeadLine><h1>Some text</h1></HeadLine>)
        expect(tree.toJSON()).toMatchSnapshot();
    });

    test("compoents children element should contain correct element", () => {
        const component = create(<HeadLine><h1>Hello</h1></HeadLine>)
        const root = component.root;

        expect(root.props.children.type).toBe("h1");
    });
})
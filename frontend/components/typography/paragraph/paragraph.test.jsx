import React from "react"
import {create} from "react-test-renderer"
import Paragraph from "./index"
import ReactDOM from "react-dom";
import {render} from "@testing-library/react";

describe("paragraph/index component", () => {

    test("renders without crashing", () => {
        const div = document.createElement('div')
        ReactDOM.render(<Paragraph />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    test('renders correctly', () => {
        const tree = create(<Paragraph><h1>Some text</h1></Paragraph>)
        expect(tree.toJSON()).toMatchSnapshot();
    });

    test("compoents props should contain children(h1) elements", () => {
        const component = create(<Paragraph><h1>Some text</h1></Paragraph>)
        const root = component.root;
        expect(root.props.children.type).toBe("h1");
    });

    test("<span> has correct children elements", () => {
        const {getByTestId} = render(<Paragraph><h1>Hello</h1></Paragraph>)
        const span = getByTestId("paragraphChildrenTest")

        expect(span.children[0].textContent).toBe("Hello")
    });

})
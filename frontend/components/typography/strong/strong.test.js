import React from "react"
import {create} from "react-test-renderer"
import Strong from "./index"
import ReactDOM from "react-dom";
import {render} from "@testing-library/react";

describe("strong/index component", () => {

    test("renders without crashing", () => {
        const div = document.createElement('div')
        ReactDOM.render(<Strong />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    test('renders correctly', () => {
        const tree = create(<Strong><h1>Some text</h1></Strong>)
        expect(tree.toJSON()).toMatchSnapshot();
    });

    test("compoents props should contain children(h1) elements", () => {
        const component = create(<Strong><h1>Some text</h1></Strong>)
        const root = component.root;
        expect(root.props.children.type).toBe("h1");
    });

    test("<strong> has correct children elements", () => {
        const {getByTestId} = render(<Strong><h1>Hello</h1></Strong>)
        const strong = getByTestId("strongChildrenTest")

        expect(strong.children[0].textContent).toBe("Hello")
    });

})
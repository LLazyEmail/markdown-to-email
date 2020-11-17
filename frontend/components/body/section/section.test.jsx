import React from "react"
import {create} from "react-test-renderer"
import Section from "./index"
import ReactDOM from "react-dom";
import {cleanup} from "@testing-library/react";
import {render} from '@testing-library/react'

afterEach(() => {
    cleanup()
});

describe("section/index component", () => {

    test("renders without crashing", () => {
        const div = document.createElement('div')
        ReactDOM.render(<Section />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    test('renders correctly', () => {
        const tree = create(<Section><h1>Some text</h1></Section>)
        expect(tree.toJSON()).toMatchSnapshot();
    });

    test("compoents props contains anything", () => {
        const component = create(<Section><h1>Hello</h1></Section>)
        const root = component.root

        expect(root.props.children).not.toBeNull()
    });

    test("span contains correct children elements", () => {
        const {getByTestId} = render(<Section><h1>Hello</h1></Section>)
        const td = getByTestId("sectionPropsChildren")

        expect(td.children[0].textContent).toBe('Hello')
    });

    test("compoents children element should contain correct element", () => {
        const component = create(<Section><h1>Hello</h1></Section>)
        const root = component.root

        expect(root.props.children.type).toBe("h1")
    });
})
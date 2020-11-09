import ReactDOM from "react-dom";
import Copyright from "./index";
import React from "react";
import {cleanup, render} from "@testing-library/react";
import {create} from "react-test-renderer";

afterEach(() => {
    cleanup()
});

describe("copyrights/index component", () => {

    test("renders without crashing", () => {
        const div = document.createElement('div')
        ReactDOM.render(<Copyright />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    test('renders correctly', () => {
        const tree = create(<Copyright />)
        expect(tree.toJSON()).toMatchSnapshot();
    });

    test("<em> has correct text content", () => {
        const {getByTestId} = render(<Copyright />)
        const em = getByTestId("copyTest")

        const year = new Date().getFullYear();

        expect(em.textContent).toBe(`Copyright © ${year} Hacker Noon. All rights reserved.`)
    });

})
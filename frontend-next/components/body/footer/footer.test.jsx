import React from "react"
import {create} from "react-test-renderer"
import Footer from "./index"
import ReactDOM from "react-dom";
import {cleanup} from "@testing-library/react";

afterEach(() => {
    cleanup()
});

describe("footer/index component", () => {

    test("renders without crashing", () => {
        const div = document.createElement('div')
        ReactDOM.render(<Footer />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    test('renders correctly', () => {
        const tree = create(<Footer />)
        expect(tree.toJSON()).toMatchSnapshot();
    });
})
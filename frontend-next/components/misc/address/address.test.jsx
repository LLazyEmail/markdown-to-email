import ReactDOM from "react-dom";
import Address from "./index";
import React from "react";
import {cleanup} from "@testing-library/react";
import {create} from "react-test-renderer";

afterEach(() => {
    cleanup()
});

describe("address/index component", () => {

    test("renders without crashing", () => {
        const div = document.createElement('div')
        ReactDOM.render(<Address />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    test('renders correctly', () => {
        const tree = create(<Address />)
        expect(tree.toJSON()).toMatchSnapshot();
    });

})
import React from "react";
import { create } from "react-test-renderer";
import EmptySection from "./index";
import ReactDOM from "react-dom";
import { cleanup } from "@testing-library/react";

afterEach(() => {
    cleanup();
});

describe("empty-section/index component", () => {

    test("renders without crashing", () => {
        const div = document.createElement('div');
        ReactDOM.render(React.createElement(EmptySection, null), div);
        ReactDOM.unmountComponentAtNode(div);
    });

    test("compoents children element should contain correct element", () => {
        const component = create(React.createElement(
            EmptySection,
            null,
            React.createElement(
                "h1",
                null,
                "Hello"
            )
        ));
        const root = component.root;

        expect(root.props.children.type).toBe("h1");
    });

    test("component has correct children elements", () => {
        const component = create(React.createElement(
            EmptySection,
            null,
            React.createElement(
                "h1",
                null,
                "Hello"
            )
        ));
        const root = component.root;

        expect(root.children[0].type).toBe("h1");
    });
});
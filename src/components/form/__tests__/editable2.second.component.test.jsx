import React from "react";
import {render, fireEvent} from '@testing-library/react'

import Editable2 from "../editable2.component";
import {Table, TableBody, TableCell, TableRow} from "@material-ui/core";

import '@testing-library/jest-dom/extend-expect'

function getElementAttrs(el) {
    return [].slice.call(el.attributes).map((attr) => {
        return {
            name: attr.name,
            value: attr.value
        }
    });
}

describe("<Editable2 /> with  react-testing-libary", () => {

    it("render table", () => {
        const header = ["CountryCode", "Description"]
        const {getAllByRole, debug, getByText, getAllByText} = render(<Editable2/>);
        // console.log(getAllByRole("columnheader"))

        const columnHeader = getAllByRole("columnheader")
        // const cc = getAllByText("CountryCode")
        // debug(cc)

        for (let x = 0; x < columnHeader.length; x++) {
            if (columnHeader[x].querySelector("div") != null) {
                expect(columnHeader[x].querySelector("div")).toHaveTextContent(header[x])
            }
        }

        const row = getAllByRole("row");
        expect(row).toHaveLength(7);

        // console.log(row[1].cells[0].innerHTML);

        const rowgroup = getAllByRole("rowgroup");
        expect(rowgroup).toHaveLength(3);

        const body = rowgroup[1];
        const tdArray = [...body.querySelectorAll(".MuiTableRow-root")];
        //debug(tdArray)
        expect(tdArray[0].cells[0]).toHaveTextContent("cc")
    });

    it("edit button is click and update dialog is opened", () => {
        const {getAllByRole, debug, getByText, getAllByText} = render(<Editable2/>);

        const btn = getAllByRole("button", {
            selector: ".MuiIconButton-root",
            title: "Edit"
        });

        console.log("btn", btn.length);

        const rowgroup = getAllByRole("rowgroup");
        expect(rowgroup).toHaveLength(3);
        const body = rowgroup[1];
        const tdArray = [...body.querySelectorAll(".MuiTableRow-root")];
        //debug(tdArray)
        // debug(tdArray[0].cells[2].querySelector("button"))
        fireEvent.click(tdArray[0].cells[2].querySelectorAll("button")[1])
        /// const btn2 = getAllByRole("button");

    })
});
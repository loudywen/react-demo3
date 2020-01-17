import React from "react";
import Enzyme, {configure, shallow, mount, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Editable2 from "../editable2.component";
import {Table, TableBody, TableCell, TableRow} from "@material-ui/core";

configure({adapter: new Adapter()});

describe("<Editable2 /> with enzyme", () => {

    it("render table", () => {

        const wrapper = mount(<Editable2/>);
        // console.log(wrapper.debug());

        const h6 = wrapper.find('.MuiTypography-h6');
        // console.log("h6", h6);
        expect(h6.text()).toEqual("CountryCode");

        // const headers = wrapper.find('.MTableHeader-header-153');
        // console.log(headers.debug())
        const firstTableRow = wrapper.find(Table).find(TableBody).find(TableRow).first();
        // console.log(firstTableRow.debug())
        const tableCell = firstTableRow.find(TableCell);
        console.log("tableCell", tableCell);

        const td = tableCell.find(".MuiTableCell-root");

        for (let x = 0; x < td.getElements().length; x++) {
            if (td.at(x).props().value != null) {
                console.log("td", td.at(x).props().value)

            }

        }


    })
})
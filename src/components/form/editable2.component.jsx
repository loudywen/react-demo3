import React, { useEffect, useState } from "react";
import axios from "axios";
import "./editable.styles.scss";
import MaterialTable from "material-table";
import * as icons from "@material-ui/icons";
import TestDialog from "../dialog/testdialog.component";

const Editable2 = () => {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const handleClickOpen = (rowData) => {
    setOpen(true);
    setSelectedValue(rowData)
  };

  const handleUpdate = value => {
    setOpen(false);
    //setSelectedValue(value);
  };

  const [tableState, setTableState] = useState({
    columns: [
      { title: "CountryCode", field: "countryCode", editable: "never" },
      { title: "Description", field: "countryCodeDesc" }
    ],
    data: [
      { countryCode: "cc", countryCodeDesc: "test" },
      { countryCode: "22", countryCodeDesc: "test" },
      { countryCode: "df", countryCodeDesc: "test" },
      { countryCode: "ad", countryCodeDesc: "test" },
      { countryCode: "df", countryCodeDesc: "test" },
      { countryCode: "ff", countryCodeDesc: "test" },
      { countryCode: "gg", countryCodeDesc: "test" }
    ]
  });

  const callApi = () => {
    console.log("---------- calling get all ---------------");
    // axios
    //   .get(`http://localhost:8081/countries`)
    //   .then(res => {
    //     const extractedData = [];

    //     res.data.map((data, index) => {
    //       // console.log(data);
    //       const { countryCode, countryCodeDesc } = data;
    //       extractedData.push({
    //         countryCode: countryCode,
    //         countryCodeDesc: countryCodeDesc
    //       });
    //       return extractedData;
    //     });

    //     setTableState({ ...tableState, data: extractedData });
    //   })
    //   .catch(e => {
    //     console.log(e);
    //     window.alert(e);
    //   });
  };

  const callPut = (countryCode, putRequest, oldData, newData) => {
    axios
      .put(`http://localhost:8081/countries/${countryCode}`, putRequest)
      .then(res => {
        if (res.status === 200) {
          console.log("updateding setTableState");
          callApi();
          //   setTableState(prevState => {
          //     const data = [...prevState.data];
          //     data[data.indexOf(oldData)] = newData;
          //     return { ...prevState, data };
          //   });
        }
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    console.log("---------------- Editable use effect----------------- ");
    callApi();
  }, []);

  return (
    <div className="editable">
      {tableState.data.length ? (
        <MaterialTable
          options={{
            actionsColumnIndex: -1
          }}
          title="CountryCode"
          columns={tableState.columns}
          data={tableState.data}
          //
          actions={[
            {
              icon: icons.Edit,
              tooltip: "Edit",
              onClick: (event, rowData) => {
                //console.log(rowData);
                handleClickOpen(rowData);
              }
            },
            {
              icon: icons.DeleteOutlined,
              tooltip: "Delete",
              onClick: (event, rowData) =>
                alert("You want to delete " + rowData.name)
            }
          ]}
        />
      ) : null}

      <TestDialog open={open} onUpdate={handleUpdate} selectedValue={selectedValue}/>
    </div>
  );
};

export default Editable2;

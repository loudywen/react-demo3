import React, { useEffect, useState } from "react";
import axios from "axios";
import "./editable.styles.scss";
import MaterialTable from "material-table";

const Editable = () => {

  const [tableState, setTableState] = useState({
    columns: [
      { title: "CountryCode", field: "countryCode", editable: "never" },
      { title: "Description", field: "countryCodeDesc" }
    ],
    data: []
  });

  const callApi = () => {
    console.log("---------- calling get all ---------------");
    axios
      .get(`http://localhost:8081/countries`)
      .then(res => {
        const extractedData = [];

        res.data.map((data, index) => {
          // console.log(data);
          const { countryCode, countryCodeDesc } = data;
          extractedData.push({
            countryCode: countryCode,
            countryCodeDesc: countryCodeDesc
          });
          return extractedData;
        });

        setTableState({ ...tableState, data: extractedData });
      })
      .catch(e => {
        console.log(e);
        window.alert(e);
      });
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
          editable={{
            onRowUpdate: (newData, oldData) =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  if (oldData) {
                    const { countryCode, countryCodeDesc } = newData;

                    const putRequest = {
                      countryCodeDesc: countryCodeDesc,
                      lastUpdatedBy: "diwen test from ui"
                    };

                    console.log(putRequest);
                    // once status = 200 then set below
                    callPut(countryCode, putRequest, oldData, newData);
                  }
                }, 600);
              }),
            onRowDelete: oldData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  setTableState(prevState => {
                    const data = [...prevState.data];
                    data.splice(data.indexOf(oldData), 1);
                    return { ...prevState, data };
                  });
                }, 600);
              })
          }}
        />
      ) : null}
    </div>
  );
};

export default Editable;

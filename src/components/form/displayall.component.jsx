import React, { useEffect, useState } from "react";
import "./displayall.styles.scss";
import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 460
  }
});

const DisplayAll = () => {
  const [country, setCountry] = useState(null);

  useEffect(() => {
      console.log("----------------display all use effect-----------------")
    axios.get(`http://localhost:8081/country`).then(res => {
      setCountry(res.data);
    });
  }, []);

  const classes = useStyles();

  return (
    <div className="myTable">
      {country ? (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="center">CountryCode</TableCell>
                <TableCell align="center">Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {country &&
                country.map((data, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {index}
                    </TableCell>
                    <TableCell align="center">{data.countryCode}</TableCell>
                    <TableCell align="center">{data.countryCodeDesc}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : null}
    </div>
  );
};

export default DisplayAll;

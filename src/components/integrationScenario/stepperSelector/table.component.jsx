import React, {useState, useRef} from "react";

import {makeStyles, useTheme, withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import AddIcon from "@material-ui/icons/Add";
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const useStyles1 = makeStyles(theme => ({
    root: {
        flexShrink: 0,
        marginLeft: theme.spacing(2.5),
        //width: 400
    },
}));

const TablePaginationActions = (props) => {

    const classes = useStyles1();
    const theme = useTheme();
    const {count, page, rowsPerPage, onChangePage} = props;

    const handleFirstPageButtonClick = event => {
        onChangePage(event, 0);
    };

    const handleBackButtonClick = event => {
        onChangePage(event, page - 1);
    };

    const handleNextButtonClick = event => {
        onChangePage(event, page + 1);
    };

    const handleLastPageButtonClick = event => {
        onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <div className={classes.root}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon/> : <FirstPageIcon/>}
            </IconButton>
            <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
                {theme.direction === 'rtl' ? <KeyboardArrowRight/> : <KeyboardArrowLeft/>}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft/> : <KeyboardArrowRight/>}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon/> : <LastPageIcon/>}
            </IconButton>
        </div>
    );
};

const useStyles2 = makeStyles(theme => ({
    table: {
        width: 650,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

const MyTable = ({collection, selectedHop, close}) => {

    const classes = useStyles2();
    const [from, setFrom] = useState([]);
    const [to, setTo] = useState([]);

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, collection.length - page * rowsPerPage);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };


    const selectValue = (event, row) => {
        selectedHop(row);
        close();
    };

    const handleSelectFromChange = (event, index) => {
        setFrom([...from, {id: index, from: event.target.value}])
    };

    const handleSelectToChange = (event, index) => {
        setTo([...to, {id: index, to: event.target.value}])
    };


    return (

        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="custom pagination table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Hop Name</StyledTableCell>
                        <StyledTableCell align="right">Hop Type</StyledTableCell>
                        <StyledTableCell align="center">From Component</StyledTableCell>
                        <StyledTableCell align="center">To Component</StyledTableCell>
                        <StyledTableCell align="center">Action</StyledTableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {(rowsPerPage > 0
                            ? collection.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : collection
                    ).map((row, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell component="th" scope="row">
                                        {row.hopName}
                                    </TableCell>
                                    <TableCell align="right">{row.hopType}</TableCell>
                                    <TableCell align="center">
                                        <FormControl className={classes.formControl}>
                                            <InputLabel htmlFor="component-native-simple">From</InputLabel>
                                            <Select
                                                native
                                                onChange={event => handleSelectFromChange(event, index)}
                                                inputProps={{
                                                    name: 'from'
                                                }}
                                            >
                                                <option value=""/>
                                                {
                                                    row.from.map((from, index) => {
                                                        return (
                                                            <option key={index}
                                                                    value={from.componentType}>{from.componentType}</option>
                                                        )
                                                    })
                                                }
                                            </Select>
                                        </FormControl>
                                    </TableCell>
                                    <TableCell align="center">
                                        <FormControl className={classes.formControl}>
                                            <InputLabel htmlFor="component-native-simple">To</InputLabel>
                                            <Select
                                                native
                                                onChange={event => handleSelectToChange(event, index)}
                                                inputProps={{
                                                    name: 'to'
                                                }}
                                            >
                                                <option value=""/>
                                                {
                                                    row.to.map((to, index) => {
                                                        return (
                                                            <option key={index}
                                                                    value={to.componentType}>{to.componentType}</option>
                                                        )
                                                    })
                                                }
                                            </Select>
                                        </FormControl>
                                    </TableCell>
                                    <TableCell onClick={(event) => selectValue(event, row)}
                                               align="center"><IconButton><AddIcon/></IconButton></TableCell>

                                </TableRow>
                            )
                        }
                    )}

                    {emptyRows > 0 && (
                        <TableRow style={{height: 53 * emptyRows}}>
                            <TableCell colSpan={6}/>
                        </TableRow>
                    )}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25, {label: 'All', value: -1}]}
                            colSpan={4}
                            count={collection.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            SelectProps={{
                                inputProps: {'aria-label': 'rows per page'},
                                native: true,
                            }}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                            ActionsComponent={TablePaginationActions}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    )
};

export default MyTable
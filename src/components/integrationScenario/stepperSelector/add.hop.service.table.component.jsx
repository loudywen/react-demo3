import React, {useState} from "react";
import clsx from 'clsx';
import {lighten, makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import AddIcon from "@material-ui/icons/Add";

const headCells = [
    {id: 'serviceName', numeric: false, disablePadding: true, label: 'Services'},
    {id: 'serviceVersion', numeric: true, disablePadding: false, label: 'Service Version'},
    {id: 'messageFormat', numeric: false, disablePadding: false, label: 'Message Format'},
    {id: 'serviceDescription', numeric: false, disablePadding: false, label: 'Service Description'},
    {id: 'documentationLink', numeric: false, disablePadding: false, label: 'Documentation Link'},
];


const EnhancedTableHead = ({classes, onSelectAllClick, numSelected, rowCount}) => {

    // const createSortHandler = property => event => {
    //     onRequestSort(event, property);
    // };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{'aria-label': 'Services'}}
                    />
                </TableCell>

                {headCells.map(headCell => (
                    <TableCell
                        key={headCell.id}
                        align="center"
                        style={{
                            width: "max-content"
                        }}
                    >
                        {headCell.label}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
};

const useToolbarStyles = makeStyles(theme => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
    },
    highlight:
        {
            color: theme.palette.secondary.main,
            backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        },
    title: {
        flex: '1 1 100%',
    },
}));

const EnhancedTableToolbar = ({numSelected, addSelectedService}) => {
    const classes = useToolbarStyles();

    // const add = () => {
    //     addSelectedService
    // }
    return (
        <Toolbar
            className={clsx(classes.root, {
                [classes.highlight]: numSelected > 0,
            })}
        >
            {numSelected > 0 ? (
                <Typography className={classes.title} color="inherit" variant="subtitle1">
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography className={classes.title} variant="h6" id="tableTitle">
                    Services
                </Typography>
            )}

            {numSelected > 0 ? (
                <Tooltip title="Add Services">
                    <IconButton aria-label="add" onClick={addSelectedService}>
                        <AddIcon/>
                    </IconButton>
                </Tooltip>
            ) : null}
        </Toolbar>
    );
};

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    table: {
        minWidth: 750,
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
}));


const HopServiceTable = ({hop, hopTypes, updateHopService, close}) => {
    const classes = useStyles();
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const hopSelected = hopTypes.find(hopType => hopType.hopTypeName === hop.hopType);

    const serviceContracts = hopSelected.serviceContracts;

    const handleSelectAllClick = event => {
        if (event.target.checked) {
            const newSelecteds = serviceContracts;
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, service) => {
        const selectedIndex = selected.indexOf(service);

        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, service);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const isSelected = service => selected.indexOf(service) !== -1;

    const addSelectedService = () => {

        const copy = {...hop};
        copy['serviceContracts'] = selected;
        updateHopService(copy);
        close()
    };

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, serviceContracts.length - page * rowsPerPage);

    return (

        <div className={classes.root}>
            <Paper className={classes.paper}>
                <EnhancedTableToolbar numSelected={selected.length} addSelectedService={addSelectedService}/>
                <TableContainer>
                    <Table
                        className={classes.table}
                        aria-labelledby="tableTitle"
                        aria-label="enhanced table"
                    >
                        <EnhancedTableHead
                            classes={classes}
                            numSelected={selected.length}
                            onSelectAllClick={handleSelectAllClick}
                            rowCount={serviceContracts.length}
                        />
                        <TableBody>
                            {

                                serviceContracts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((service, index) => {
                                        const isItemSelected = isSelected(service);
                                        const labelId = `enhanced-table-checkbox-${index}`;
                                        return (
                                            <TableRow
                                                hover
                                                onClick={event => handleClick(event, service)}
                                                role="checkbox"
                                                aria-checked={isItemSelected}
                                                tabIndex={-1}
                                                key={service.serviceMetaData.serviceName}
                                                selected={isItemSelected}
                                            >
                                                <TableCell padding="checkbox">
                                                    <Checkbox
                                                        checked={isItemSelected}
                                                        inputProps={{'aria-labelledby': labelId}}
                                                    />
                                                </TableCell>
                                                <TableCell component="th" id={labelId} scope="row" padding="none">
                                                    {service.serviceMetaData.serviceName}
                                                </TableCell>
                                                <TableCell
                                                    style={{
                                                        whiteSpace: "normal",
                                                        wordWrap: "break-word"
                                                    }}
                                                    align="center">{service.serviceMetaData.serviceVersion}</TableCell>
                                                <TableCell
                                                    style={{
                                                        whiteSpace: "normal",
                                                        wordWrap: "break-word"
                                                    }}
                                                    align="center">{service.serviceMetaData.messageFormat}</TableCell>
                                                <TableCell
                                                    style={{
                                                        whiteSpace: "normal",
                                                        wordWrap: "break-word"
                                                    }}
                                                    align="left">{service.serviceMetaData.serviceDescription}</TableCell>
                                                <TableCell
                                                    style={{
                                                        whiteSpace: "normal",
                                                        wordWrap: "break-word"
                                                    }}
                                                    align="left">{service.serviceMetaData.documentationLink}</TableCell>
                                            </TableRow>
                                        );
                                    })}

                            {emptyRows > 0 && (
                                <TableRow style={{height: 53 * emptyRows}}>
                                    <TableCell colSpan={6}/>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={serviceContracts.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
    )
};

export default HopServiceTable
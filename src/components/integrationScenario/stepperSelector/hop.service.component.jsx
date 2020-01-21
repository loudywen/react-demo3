import React, {useState} from "react";
import {HopTypes} from "../hop.type";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from "@material-ui/icons/Add";
import AddHopService from "./add.hop.service.component";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import WarningIcon from '@material-ui/icons/Warning';
import ConfigService from "./config.service.component";

const HopService = ({hop, updateHopService, configService}) => {

    const openHopServiceHandler = () => {
        setOpenHopService(true)
    };

    const [openHopService, setOpenHopService] = useState(false);
    const [openConfigService, setOpenConfigService] = useState(false);
    const [pos, setPos] = useState(null)

    const closeHopServiceHandler = () => {
        setOpenHopService(false)
    };

    const closeConfigServiceHandler = () => {
        setOpenConfigService(false)
    };

    const deleteService = (index) => {
        const copy = {...hop};
        copy.serviceContracts.splice(index, 1);
        updateHopService(copy)
    };

    const configServiceHandler = (index) => {
        setOpenConfigService(true)
        setPos(index)
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column"
        }}>
            {
                openHopService === true ? (
                    <AddHopService open={openHopService} cancel={closeHopServiceHandler} hop={hop}
                                   updateHopService={updateHopService}/>) : null
            }

            {
                openConfigService === true ?
                    <ConfigService open={openConfigService} cancel={closeConfigServiceHandler} hop={hop}
                                   configService={configService} pos={pos}/> : null
            }
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Typography variant="body2" color="textSecondary" component="p">
                    Configured Services
                </Typography>
                <IconButton onClick={openHopServiceHandler}><AddIcon/></IconButton>

            </div>
            {
                (hop.serviceContracts) ? (
                    hop.serviceContracts.map((obj, index) => {
                        return (
                            <div style={{
                                display: "flex",
                                alignItems: "center"
                            }} key={index}>
                                {obj.services ? <CheckCircleIcon style={{color: "green"}}/> :
                                    <WarningIcon color={"error"}/>}
                                <Button onClick={() => configServiceHandler(index)} style={{
                                    textTransform: "none",
                                    width: "90%",
                                    whiteSpace: "normal",
                                    wordWrap: "break-word"
                                }}>{obj.serviceMetaData.serviceName}</Button>


                                <IconButton onClick={() => deleteService(index)}>
                                    <DeleteIcon/>
                                </IconButton>
                            </div>
                        )
                    })
                ) : null
            }

        </div>

    )
};

export default HopService
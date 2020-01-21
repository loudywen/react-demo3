import React, {useState} from "react";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import {makeStyles} from '@material-ui/core/styles';
import {red} from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import DeleteIcon from '@material-ui/icons/Delete';
import HopService from "./hop.service.component";

const useStyles = makeStyles(theme => ({
    card: {
        width: 300,
        height: "100%"
    },
    avatar: {
        backgroundColor: red[500],
    },
}));
const Hop = ({hop, deleteHop, updateHopService, configService}) => {
    const classes = useStyles();


    return (<Card className={classes.card}>
        <CardHeader
            // avatar={
            //     <Avatar aria-label="recipe" className={classes.avatar}>
            //         R
            //     </Avatar>
            // }
            action={
                <IconButton aria-label="settings" onClick={deleteHop}>
                    <DeleteIcon/>
                </IconButton>
            }
            title={hop.hopType}
            subheader={hop.hopName}

        />
        <CardContent>
            <HopService hop={hop} updateHopService={updateHopService} configService={configService}/>
        </CardContent>
        {/*<CardActions disableSpacing>*/}
        {/*    <IconButton aria-label="add to favorites">*/}
        {/*        <FavoriteIcon/>*/}
        {/*    </IconButton>*/}
        {/*    <IconButton aria-label="share">*/}
        {/*        <ShareIcon/>*/}
        {/*    </IconButton>*/}

        {/*</CardActions>*/}
    </Card>)
}

export default Hop
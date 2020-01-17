import React, {useState} from "react";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import {red} from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    card: {
        width: 300,
    },
    avatar: {
        backgroundColor: red[500],
    },
}));
const Hop = ({hop}) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (<Card className={classes.card}>
        <CardHeader
            avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                    R
                </Avatar>
            }
            action={
                <IconButton aria-label="settings">
                    <MoreVertIcon/>
                </IconButton>
            }
            title={hop.hopType}
            subheader={hop.hopName}
        />
        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
                This impressive paella is a perfect party dish and a fun meal to cook together with your
                guests. Add 1 cup of frozen peas along with the mussels, if you like.
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
                <FavoriteIcon/>
            </IconButton>
            <IconButton aria-label="share">
                <ShareIcon/>
            </IconButton>
            <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
            >
            </IconButton>
        </CardActions>
    </Card>)
}

export default Hop
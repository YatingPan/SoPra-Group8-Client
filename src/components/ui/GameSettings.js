import {makeStyles} from "@material-ui/core/styles";
import {AppBar, Card, CardContent, Grid, Select, TextField, Typography} from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        height: "100%",
        width: "70%",
        justifyContent: "space-around"
    },
    settingBox: {

    },
}));

// creates a labeled card with children as content
const SettingBox = (props) => {
    return (
            <Card>
                <AppBar position={"relative"}
                        height={"10em"}
                >
                    <Typography variant={"h5"}
                                align={"center"}
                    >
                        {props.label}
                    </Typography>
                </AppBar>
                <CardContent>
                    {props.children}
                </CardContent>
            </Card>
    )
};

SettingBox.propTypes = {
    label: PropTypes.string,
    children: PropTypes.node
}

// creates a label around its children
const LabeledSetting = (props) => {
    return (
        <Grid container
              direction={"column"}
              alignItems={"center"}
              justifyContent={"space-evenly"}
        >
            <Grid item xs={12}>
                <Typography variant={"h6"}>
                    {props.label}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                {props.children}
            </Grid>
        </Grid>
    )
}

LabeledSetting.propTypes = {
    label: PropTypes.string,
    children: PropTypes.node
}

// handler methods are passed in as props
// isHost boolean is passed in as prop -> if false, disable all inputs
const GameSettings = (props) => {
    const classes = useStyles();

    return (
        <Grid container
              justifyContent={"space-around"}
              spacing={2}
        >
            <Grid item xs={6}>
                <SettingBox label={"Video Pool"}>
                    <LabeledSetting label={"Language"}>
                        <Select
                            className={classes.languageSelect}
                            onChange={event => props.onLanguageChange(event.target.value)}
                            disabled={!props.isHost}
                            value={props.language}
                        >
                            <option value="en">ENGLISH</option>
                            <option value="de">GERMAN</option>
                            <option value="zh">CHINESE</option>
                        </Select>
                    </LabeledSetting>
                    <LabeledSetting label={"Playlist"}>
                        <TextField placeholder="Paste a link here"
                                   onChange={event => props.onPlaylistChange(event.target.value)}
                                   disabled={!props.isHost}
                                   value={props.playlist}
                                   fullWidth />
                    </LabeledSetting>
                </SettingBox>
            </Grid>
            <Grid item xs={6}>
                <SettingBox label={"Balance & Blinds"}>
                    <LabeledSetting label={"Initial Balance"}>
                        <TextField onChange={event => props.onInitialBalanceChange(event.target.value)}
                                   disabled={!props.isHost}
                                   value={props.initialBalance}
                                   fullWidth />
                    </LabeledSetting>
                    <LabeledSetting label={"Big Blind"}>
                        <TextField onChange={event => props.onBigBlindChange(event.target.value)}
                                   disabled={!props.isHost}
                                   value={props.bigBlind}
                                   fullWidth />
                    </LabeledSetting>
                    <LabeledSetting label={"Small Blind"}>
                        <TextField onChange={event => props.onSmallBlindChange(event.target.value)}
                                   disabled={!props.isHost}
                                   value={props.smallBlind}
                                   fullWidth />
                    </LabeledSetting>
                </SettingBox>
            </Grid>
        </Grid>
    )

}

GameSettings.propTypes = {
    isHost: PropTypes.bool,
    language: PropTypes.string,
    initialBalance: PropTypes.number,
    smallBlind: PropTypes.number,
    bigBlind: PropTypes.number,
    playlist: PropTypes.string,
    onLanguageChange: PropTypes.func,
    onInitialBalanceChange: PropTypes.func,
    onBigBlindChange: PropTypes.func,
    onSmallBlindChange: PropTypes.func,
    onPlaylistChange: PropTypes.func
}

// onStartInfoChange: setStartInfo(event.target.checked)

export default GameSettings
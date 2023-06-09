import React from "react";
import PropTypes from "prop-types";
import withStyles from '@mui/styles/withStyles';
import AppMenu from "./appmenu/AppMenu";
import {BrowserRouter} from "react-router-dom";


const styles = theme => ({
    root: {
        width: '100%',
        height: '100%',
        zIndex: 1,
        overflow: 'hidden',
    },
});

class Main extends React.Component {


    render() {
        const {classes} = this.props;


        return (
            <BrowserRouter basename='/'>
                <div className={classes.root}>
                    <AppMenu/>
                </div>
            </BrowserRouter>
        );
    }
}

Main.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(Main);

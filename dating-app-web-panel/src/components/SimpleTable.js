import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        //minWidth: 700,
    },
});

function SimpleTable(props) {
    const { classes, data, columns } = props;

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        {columns.map(name => {
                            return (
                                <TableCell key={name} numeric>{name}</TableCell>
                            );
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map(n => {
                        return (
                            <TableRow key={n._id}>
                                {columns.map(name => {
                                    return (
                                        <TableCell key={name+`-` + n._id} numeric>{n[name]}</TableCell>
                                    );
                                })}
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Paper>
    );
}

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
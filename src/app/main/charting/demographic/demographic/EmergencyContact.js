import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const classes = {
    rootcol: {
        width: "100px",
        lineHeight: "0"
    },
    colalign: {
        textAlign: "left"
    }
}

const contacts = {
    firstName: "First Name",
    lastName: "LastName",
    relation: "Relation",
    phoneM: "Phone(mobile)",
    phoneH: "Phone(home)",
    phoneW: "Phone(work)",
    email: "Email Adress",
    street: "Street",
    city: "City",
    state: "State",
    zip: "Zip"
}

export default function EmergencyContact (props) {

    return (
        <div>
            <Table className="min-w-xl" aria-labelledby="tableTitle">
                <TableHead>
                    <TableRow className="h-64">
                        <TableCell padding="none" className="relative text-center col-md-1"></TableCell>
                        <TableCell padding="none" className="relative w-64 text-center" style={classes.colalign}>Emergency Contact 1</TableCell>
                        <TableCell padding="none" className="relative w-64 text-center" style={classes.colalign}>Emergency Contact 2</TableCell>
                        <TableCell padding="none" className="relative w-64 text-center" style={classes.colalign}>Emergency Contact 3</TableCell>
    				</TableRow>
                </TableHead>
                <TableBody>
                    {
                        Object.entries(contacts).map((eacharr) => {
                            return (
                                <TableRow key={eacharr[0]} className="cursor-pointer" >
                                    <TableCell component="th" scope="row" className="col-md-1" style={classes.rootcol}>{eacharr[1]}</TableCell>
                                    <TableCell component="th" scope="row"></TableCell>
                                    <TableCell component="th" scope="row"></TableCell>
                                    <TableCell component="th" scope="row"></TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </div>
    )
}

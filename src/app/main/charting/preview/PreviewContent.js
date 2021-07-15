import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        '& .mb-8': {
            textAlign: "center"
        },
        '& .mb-32': {
            marginLeft: "20px"
        }
    }
}))

function PreviewContent() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className="p-24">
                <Typography className="mb-8" variant="h4">
                    History & Physical
                </Typography>

                <Typography className="mb-16" component="p">
                    name: Kirkland Dodson
                </Typography>
                <Typography className="mb-16" component="p">
                    location: Heritage Health Care
                </Typography>
                <Typography className="mb-16" component="p">
                    date: 07/17/2014
                </Typography>
                <Typography className="mb-16" component="p">
                    provider: 
                </Typography>

                <Typography className="mt-32" variant="h5">
                    Chief Complaint
                </Typography>

                <Typography className="mb-32" component="p">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Voluptatum ipsum, dolores dolor sint nam provident autem. 
                    Quidem adipisci quasi unde tenetur natus ipsa ullam, eaque veniam eius delectus excepturi perferendis.
                </Typography>

                <Typography className="mt-32" variant="h5">
                    History of Present Illness
                </Typography>

                <Typography className="mb-32" component="p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Maiores mollitia nemo et nihil ad, molestiae neque quisquam suscipit, repellat saepe odio necessitatibus provident consequatur. 
                    Eaque velit ipsam doloremque neque quos.
                </Typography>

                <Typography className="mt-32" variant="h5">
                    Past Medical History
                </Typography>

                <Typography className="mb-32" component="p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Ea facere ad et blanditiis mollitia nisi nihil veniam facilis! Mollitia iure officia tempore ratione ad dolorem. 
                    Voluptates rem unde incidunt nulla?
                </Typography>

                <Typography className="mt-32" variant="h5">
                    Past Surgical History
                </Typography>

                <Typography className="mb-32" component="p">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Repellat nesciunt dignissimos recusandae sint minus fugiat maxime rerum in quibusdam voluptas, aliquid, distinctio pariatur. 
                    Error illo tempore consequatur voluptate, sapiente autem?
                </Typography>

                <Typography className="mt-32" variant="h5">
                    Medications
                </Typography>

                <Typography className="mb-32" component="p">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Voluptatum tempore cum natus enim eveniet, soluta nesciunt voluptatibus ipsa repudiandae. 
                    Necessitatibus architecto sed ut id magnam optio facere velit, eveniet quod.
                </Typography>

                <Typography className="mt-32" variant="h5">
                    Family History
                </Typography>

                <Typography className="mb-32" component="p">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Voluptatum tempore cum natus enim eveniet, soluta nesciunt voluptatibus ipsa repudiandae. 
                    Necessitatibus architecto sed ut id magnam optio facere velit, eveniet quod.
                </Typography>

                <Typography className="mt-32" variant="h5">
                    Social History
                </Typography>

                <Typography className="mb-32" component="p">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Voluptatum tempore cum natus enim eveniet, soluta nesciunt voluptatibus ipsa repudiandae. 
                    Necessitatibus architecto sed ut id magnam optio facere velit, eveniet quod.
                </Typography>
            </div>
        </div>
    )
}

export default PreviewContent;
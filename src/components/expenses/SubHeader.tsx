import * as React from 'react';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

interface SubHeaderProps {
    leftText: React.ReactNode;
    rightText: string|number;
    variant: 'h3'|'h4'|'h5'|'h6'|'body1';
}

export const SubHeader: React.FC<SubHeaderProps> = (props) => (
    <Grid container justify='space-between'>
        <Typography variant={props.variant} color='textPrimary'>
            {props.leftText}
        </Typography>
        <Typography variant={props.variant} color='textPrimary'>
            {props.rightText}
        </Typography>
    </Grid>
);

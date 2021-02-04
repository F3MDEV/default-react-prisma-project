import React, { FunctionComponent, useState, useEffect } from 'react';
//INSIDE COMPONENTS

//OUTSIDE COMPONENTS
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core';

//CSS, STYLES & MEDIA ASSETS

//UTILS

interface ValuesCardProps {
    colorOfValueSection?: string,
    colorTextOfValueSection?: string,
    value?: string,
    title?: string,
    subTitle?: string,
}

const ValuesCard: FunctionComponent<ValuesCardProps> = ({
    colorOfValueSection = "#007eb0",
    colorTextOfValueSection = "#fff",
    value = "No value",
    title = "No title",
    subTitle= "No subtitle",
}) => {

    const useStyles = makeStyles((theme) => ({
      valueSection: {
        background: colorOfValueSection,
        color: colorTextOfValueSection
      }
    }));

    const classes = useStyles();

    return (
        <>
            <Paper>
              <div className={`${classes.valueSection} py-3`}>
                <h3>{value}</h3>
              </div>
              <h4 className={`py-2`}>{title}</h4>
              <h5 className={`pb-1`}>{subTitle}</h5>
            </Paper>
        </>
    )
}

export default ValuesCard;

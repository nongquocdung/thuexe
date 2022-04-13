import React from 'react';
import { useStyles } from "./AppForm-styles";
import { Grid } from '@mui/material';
import _ from 'lodash';

export function AppForm({ fields, ...rest }) {
    const classes = useStyles();
    if (!_.size(fields)) {
        return null;
    }

    return (
        <div className={classes.rootAppForm}>
            <Grid container spacing={2}>
                {fields.map((field, idx) => {
                    if (rest.readonly && field.isHidden === 'readonly') {
                        return null;
                    }
                    let ret;
                    if (_.isNil(field.id)) {
                        ret = null;
                    } else if (field.id.includes('group')) {
                        return (
                            <Grid key={idx} item xs={field.xs} {...(field.props || {})}>
                                {field.children?.map((chi, idx) => {
                                    return (
                                        <chi.component
                                            key={idx}
                                            field={chi}
                                            {...rest}
                                            {...(chi.props || {})}
                                        />
                                    )
                                })}
                            </Grid>

                        );
                    } else {
                        if (field.component) {
                            ret = (
                                <field.component
                                    field={field}
                                    {...(field.props || [])}
                                    {...rest}
                                />
                            );
                        } else {
                            ret = null;
                        }
                    }
                    return (
                        <Grid key={idx} item xs={field.xs}>
                            {ret}
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
}
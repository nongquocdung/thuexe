import { Grid } from '@mui/material'
import React from 'react'
import { MainCard } from '../../components/Card/MainCard'
import MuiTypography from '@mui/material/Typography';


export const UserSupportPage = () => {
  const style={
    borderRadius:"12px",
    border:"1px solid rgba(144, 202, 249, 0.46)",
    margin :"20px 10px"
  }
  return (
    <div style={style}>
      <MainCard title="Basic Typography" darkTitle = {true}>
        <Grid item xs={12} sm={6}>
          <Grid container direction="column" spacing={1}>
            <Grid item>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A delectus repellat nam cumque id aliquam nemo doloremque repellendus incidunt quo. Ducimus, doloribus explicabo est ab voluptatem modi quo debitis atque?
            </Grid>
          </Grid>
        </Grid>
      </MainCard>
    </div>
  )
}

import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'
import { AppStepsStyled } from './AppSteps-styles'

const AppSteps = ({ steps, stepIdx, setStepIdx = () => { } }) => {
    return (
        <AppStepsStyled>
            <Stepper activeStep={stepIdx} alternativeLabel>
                {steps.map((data, idx) => (
                    <Step key={idx}>
                        <StepLabel>{data.label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </AppStepsStyled>
    )
}

export default AppSteps
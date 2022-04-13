import { styled } from "@mui/material";
export const AppLoadingStyled = styled('div')(({theme})=>({
    display:'flex',
    height:'100%',
    width:'100%',
    '& > *':{
        margin:'auto',
    }
}))
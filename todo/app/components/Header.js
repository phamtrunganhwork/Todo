
import { AppBar, Toolbar } from "@mui/material"
import {favicon} from "../favicon.ico"

export default function Header(){
    return <>
    <AppBar position='sticky' sx={{width: '100%', borderRadius: 1}}>
        <Toolbar>
            <favicon/>
        </Toolbar>    
    </AppBar>
</>
}
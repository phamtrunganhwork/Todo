
import { AppBar, Toolbar,Typography } from "@mui/material"
import Image from "next/image"

export default function Header(){
    return <>
        <Toolbar position='sticky' sx={{ borderRadius: 1, backgroundColor: 'primary.main' }}>
            <Image src="/vercel.svg" width={15} height={15}/>
        </Toolbar>    
</>
}
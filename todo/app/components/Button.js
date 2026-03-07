
import Button from '@mui/material/Button'

export default function ModButton({onClick, variant, children}){
    return <>
        <Button onClick={onClick} variant={variant}>{children}</Button>
    </>
}
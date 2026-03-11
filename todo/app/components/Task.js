
import {Button, Typography, TextField, Container, Stack, Checkbox} from '@mui/material'

export default function Task({id, todo, onDelete, onModify}){

    const deleteButtonHandler = () => {
        console.log(id)
        onDelete(id)
    }

    const modifyButtonHandler =() => {
        onModify(id)
    }

    return <div>
        <Container className="TaskWrapper">
            <Stack className="Task" direction="row" spacing={2} margin={1}>
                <Checkbox sx={{transform: 'scale(2)'}}/>
                <TextField variant='outlined' />
                <Button variant='contained' onClick={() => modifyButtonHandler()}>Modify</Button>
                <Button variant='contained' onClick={() => deleteButtonHandler()}>Delete</Button>
            </Stack>
        </Container>
    </div>
}
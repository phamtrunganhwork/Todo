
import {Button, Typography} from '@mui/material'

export default function Task({id, todo, onDelete, onModify}){

    const deleteButtonHandler = () => {
        console.log(id)
        onDelete(id)
    }

    const modifyButtonHandler =() => {
        onModify(id)
    }

    return <div>
        <div className="TaskWrapper">
            <div className="Task">
                <input type="checkbox"/>
                <Typography>{id}</Typography><Typography>{todo}</Typography>
                <Button variant='contained' onClick={() => modifyButtonHandler()}>Modify</Button>
                <Button variant='contained' onClick={() => deleteButtonHandler()}>Delete</Button>
            </div>
        </div>
    </div>
}
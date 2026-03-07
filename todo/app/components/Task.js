import { throwIfDisallowedDynamic } from "next/dist/server/app-render/dynamic-rendering";

export default function Task({id, todo}){


    return <div>
        <div className="TaskWrapper">
            <div className="Task">
                <input type="checkbox"/>
                <p>{id}</p>
                <p>{todo}</p>
                <button>Modify</button>
                <button>Delete</button>
            </div>
        </div>
    </div>
}
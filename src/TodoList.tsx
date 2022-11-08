import React from "react";

type TodoListPropsType = {
    title?: string,
    tasks: Array<TasksPropsType>
}

type TasksPropsType = {
    id: number,
    title: string,
    isDone: boolean
}

export const TodoList = (props: TodoListPropsType) => {
    // let tasksMap = props.tasks.map(el => <li><input type="checkbox" checked={ el.isDone }/> <span>{ el.title }</span></li>);
    return (
        <div>
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    {/*{ tasksMap }*/}
                    {/*{props.tasks.map(el => <li><input type="checkbox" checked={ el.isDone }/> <span>{ el.title }</span></li>)}*/}
                    {props.tasks.map(el => {
                        return (
                            <li><input type="checkbox" checked={el.isDone}/> <span>{el.title}</span></li>
                        );
                    })}
                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
        </div>
    );
}
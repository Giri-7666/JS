let todo=[];
let req=prompt("Enter the Action you wnat to do:");
while(true)
{
    if(req=="qiut")
    {
        console.log("Quitting");
        break;
    }
    if(req=="List"){
        for(task of todo)
        {
            console.log(todo.indexOf(task),task);
        }
    }
    else if(req=="Add"){
        let task=prompt("Enter the task to add:");
        todo.push(task);
        console.log("Task added");
    }
    else if(req=="Delete")
    {
        let i=prompt("enter the index of task you want to delete");
        todo.splice(i,1);
        console.log(`Task deleted`);
    }
    else{
        console.log("Wrong input");
    }
    req=prompt("Enter the Action you wnat to do:");
}



const baseUrl = "https://5ef08e01ad6d71001617a596.mockapi.io/api/v1/tasks2";

export const fetchTasksList = () => {
    return  fetch(baseUrl)
        .then(res => {
            if (res.ok) {
                return res.json();
            } 
        }).then(tasksList => {
            return tasksList
        })
}

export const createTaskList = taskData => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(taskData),
        }).then(response => {
            if (!response.ok) {
                throw new Error("Internal Server Error. Can't display events");
            } 
        })
}

export const deleteTask = id => {
    return  fetch(`${baseUrl}/${id}`, {
            method: 'DELETE',
        }).then(response => {
            if (!response.ok) {
                throw new Error("Internal Server Error. Can't display events");
            }
        })
}
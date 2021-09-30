export const insert = data => {//For insert
    return {
        type: 'INSERT',
        payload: data
    }
}

export const update = data => {//For Update
    return {
        type: 'UPDATE',
        payload: data
    }

}

export const Delete = id => {//For Delete
    return {
        type: 'DELETE',
        payload: id
    }

}

export const search = data => {//For Search
    return {
        type: 'SEARCH',
        payload: data
    }

}

export const updateIndex = index => {//For Update index(When we click on edit, the note that needs to be edited values are populated)
    return {
        type: 'UPDATE-INDEX',
        payload: index
    }

}
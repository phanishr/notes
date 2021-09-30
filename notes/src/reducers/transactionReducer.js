
export const transactionReducer = (state, action) => {
    var list = JSON.parse(localStorage.getItem('transactions'))
    switch (action.type) {
        case 'INSERT':
            list.push(action.payload)
            localStorage.setItem('transactions', JSON.stringify(list))//add new note to local storage
            return { list, currentIndex: -1 }
        case 'UPDATE':
            list[state.currentIndex] = action.payload
            localStorage.setItem('transactions', JSON.stringify(list))//Update note to local storage
            return { list, currentIndex: -1 }

        case 'UPDATE-INDEX':
            return { list, currentIndex: action.payload }//Update Index = populates the note that need to be updated in text area

        case 'SEARCH':
               
            return { list, currentIndex:-1 }//returns the list, this is used because everytime when the data in seacrh bar changes it should be re rendered

        case 'DELETE':
            list.splice(action.payload, 1)//Delete note from local storage
            localStorage.setItem('transactions', JSON.stringify(list))
            return { list, currentIndex: -1 }
        default:
            return state;
    }

}



export default transactionReducer
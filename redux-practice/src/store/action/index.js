// const setData = () => {
//     return (dispatch) => {
//         dispatch({
//             type:'SET_DATA',
//         })
//     }
// }

const setData = (name, email) => {
    return {
        type: 'SET_DATA',
        payload: {
            name: name,
            email: email
        }
    }
}

export {
    setData
} 
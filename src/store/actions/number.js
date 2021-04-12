export function numberAdd2(dispatch) {
    fetch('url')
        .then(resp => resp.json())
        .then(json => dispatch({type: 'userListReady', payload: jason}))
    
    dispatch({ type: 'numberAdd2' })
}
import React from 'react'

export default class Keypad extends React.Component {
    render(){
        return (
            <div>
                <form>
                    <label htmlFor='Password'>Password</label>
                    <input type="password" onKeyUp={()=>console.log('Entering password...')}></input>
                </form>
            </div>
        )
    }
}
import React from 'react'


const Score = (props) => {
    console.log(props)

    let firstClassName = props.side.toLowerCase()+'Button'

    return(
        <div className ={`${firstClassName}`}>
            {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
            <button
                className = {`${props.firstClassName}_touchdown`}
                onClick = {props.Score}
            >
                {props.side} Touchdown
            </button>
            <button
                className={`${props.firstClassName}_fieldGoal`}
                onClick={props.Goal}
            >
                {props.side} Field Goal
            </button>
        </div>
    )
}
export default Score
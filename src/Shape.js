import React from 'react'

const Shape = (props) => {
    const shape = props.shape
    const selectShape = props.selectShape
    const count = props.count
    const indCount = props.indCount

    return (
        <div className = {shape} 
        onClick = { function () {selectShape(shape); count(count); indCount(indCount)}}/> 
    )
}



export default Shape;


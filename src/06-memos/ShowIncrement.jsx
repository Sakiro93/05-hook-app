import React from 'react'
export const ShowIncrement = React.memo(({increment, value}) => {
    console.log('Me volví a generar')
    return (
        <button
        className="btn btn-primary mt-2"
        onClick={()=>increment(value)}
        >
            Incrementar
        </button>
    )
})

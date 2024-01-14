import React from 'react'

const Nav = (props) => {
    
    return (
        <nav className='flex justify-between'>
            <div className='flex gap-14'>
                <button
                    className='text-blue-500'
                    onClick={props.handlePrevWeek}
                >
                    <span>&#129168;</span> Previous Week
                </button>
                <cale
                <p>{props.date}</p>
            </div>

            <button
                className='text-blue-500'
                onClick={props.handleNextWeek}
            >Next Week <span>&#129170;</span> 
            </button>
        </nav>
    )
}

export default Nav
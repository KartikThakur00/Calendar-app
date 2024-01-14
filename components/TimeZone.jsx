'use client'
import React, { useState } from 'react'

const TimeZone = (props) => {

    return (
        <div className='pt-3'>
            <label htmlFor='timezone'>Timezone:</label>
            <select 
            name='timezone' 
            className='block w-full p-1'
            onChange={(e) => props.setTimezone(e.target.value)}
            >
                <option value='America/New_York'>Eastern</option>
                <option value='America/Chicago'>Central</option>
                <option value='America/Denver'>Mountain</option>
                <option value='America/Los_Angeles'>Pacific</option>
                <option value='India Standard Time'>Alaska</option>
            </select>
        </div>
    )
}

export default TimeZone
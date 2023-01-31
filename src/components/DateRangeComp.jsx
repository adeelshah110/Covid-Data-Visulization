import { useEffect, useRef, useState } from "react"
import { DateRange } from "react-date-range"
import format from "date-fns/format" 
import { addDays } from "date-fns"

import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"

const DateRangeComp = () =>{
    // date state
    const [range, setRange]= useState([{
        starDate: new Date(),
        endDate: addDays(new Date(),7),key:'selection'    }])

    
    
    
    // open close 
    const [open, setOpen]= useState(false)

const refOne=useRef(null)

// use effect 
    useEffect(()=>{
       
        document.addEventListener("keydown", hideOnEscape, true)
        document.addEventListener("click", hideOnClickOutside, true)
},[])
// hide on outside click
const hideOnClickOutside=(e)=>{
if (refOne.current && !refOne.current.contains(e.target)){
    setOpen(false)
}
}

const hideOnEscape=(e)=>{
    
    if (e.key === 'Escape'){
        setOpen(false)
    }
}
    return (
        <div className="calendarWrap">
        <input
        value = {` ${format(range[0].starDate,"MM/dd/yyyy")} to ${format(range[0].endDate,"MM/dd/yyyy")}`}
        readOnly        
        className = "inputBox"
        onClick ={ () => setOpen(open => !open)}
        />
        <div ref={refOne}>
    {open &&
        <DateRange
        date ={new Date()}
        onChange= {item =>setRange([item.selection])}
        editableDateInputs={true}
        moveRangeOnFirstSelection ={false}
        ranges={range}
        months ={2}
        direction="vertical"
        className ="calendarElement"
        
        
        />
    }
    </div>
        </div>
    )
}
export default DateRangeComp
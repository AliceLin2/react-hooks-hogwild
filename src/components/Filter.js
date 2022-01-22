import React from "react"

function Filter({onfilterGreased, filterGreased}){
    return (
        <form>
            <input 
              type="checkbox" 
              checked={filterGreased} 
              onChange={e => onfilterGreased(e.target.checked)} 
            />
            Only show hogs that are greased
        </form>
      )
}

export default Filter
import * as React from "react"

function OutlinedContainer({children}: any) {
  return (
    <div
      className="pt-5 pb-4 px-4 border bg-light outlined-container"
      style={{width: "350px"}}>
      {children}
    </div>
  )
}

export default OutlinedContainer

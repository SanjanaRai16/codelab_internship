import React from 'react'

export default function Spread() {
    const numbers=[1,2,3,4,5]
    const newnumbwers=[...numbers,6,7,8,9,...numbers]
  return (
    <div>
     {newnumbwers}
    </div>
  )
}

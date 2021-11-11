import React from 'react'

export default function Output(props) {
  return (
    <div className='outputComponent'>
      <div className='heading'>Output</div>
      <pre className='output'>{props.out}</pre>
    </div>
  )
}

import React from 'react'

export default function Input() {
  return (
    <div className='input'>
      <div className='heading'>Input</div>
      <textarea
        type='text'
        rows='10'
        cols='10'
        placeholder='Enter Input'
      ></textarea>
    </div>
  )
}

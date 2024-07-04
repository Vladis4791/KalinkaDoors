import React from 'react'
import './NumberInput.scss'

const NumberInput = ({ onChange }: { onChange: (value: string) => void }) => {
  return (
    <input type="number" onChange={(e) => onChange(e.target.value)} min={1} max={20} className="NumberInput" />
  )
}

export default NumberInput
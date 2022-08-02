import React from 'react'

type Props = {
  id?: string;
  label?: string;
  type?: string;
}

const Input = ( { id, label, type }: Props ) => {
  return (
    <label htmlFor={ id }>
      { label }
      <input
        id={ id }
        type={ type }
      />
    </label>
  )
}

export default Input

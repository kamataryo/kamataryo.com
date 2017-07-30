import * as React from 'react'
interface OwnProps {
  value: 0|1|2|3|4|5
}

const  stars = {
  0: '☆☆☆☆☆',
  1: '★☆☆☆☆',
  2: '★★☆☆☆',
  3: '★★★☆☆',
  4: '★★★★☆',
  5: '★★★★★',
}

const Rate = (props: OwnProps) => {
  const value = props.value

  return (
    <span
      className={ 'rate rate-stars rate-stars-' + value }
      data-stars={ value }
    >
      { stars[value] }
    </span>
  )
}

export default Rate

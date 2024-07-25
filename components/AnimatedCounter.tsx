"use client";

import CountUp from 'react-countup';


const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <span className='w-full'>
      <CountUp
        duration={4}
        decimals={2}
        decimal='.'
        prefix='₹'
        end={amount} />
    </span>
  )
}

export default AnimatedCounter
'use client'

import Image from 'next/image'

const avatar: React.FC = () => {
  return (
    <Image 
      className='rounded-full'
      height='30'
      width='30'
      alt='Avatar'
      src='/images/placeholder.jpg'
    />
  );
}

export default avatar;
import { useRouter } from 'next/router';
import requests from '../utils/requests'

export default function Navbar() {
  const router = useRouter()

  return (
    <div className='flex justify-center gap-x-8 text-gray-400 text-2xl bg-gray-800 p-5'>
      {
        Object.entries(requests).map(([key, {title, url}]) => (
          <h2 
            onClick={() => router.push(`?genre=${key}`)}
            key={key} 
            className='text-white cursor-pointer hover:text-gray-400 active:text-red-500'
          >
            {title}
          </h2>
        ))
      }
    </div>
  )
}

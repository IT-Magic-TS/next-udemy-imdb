import { HandThumbUpIcon } from '@heroicons/react/24/outline';
import Image from 'next/legacy/image';


export default function Card({result}) {
  const BASE_URL = 'http://image.tmdb.org/t/p/original'
  console.log(result)
  const {title, backdrop_path, overview, name, release_date, first_air_date, vote_count} = result
  return (
    <div className='relative'>
      <Image
        layout='responsive'
        src={BASE_URL + backdrop_path}
        alt={name} 
        width={200}
        height={100}
      />
      <div>
        <p className='truncate'>{overview}</p>
        <h2>{title || name}</h2>
        <div className='flex items-center justify-center gap-x-4'>
          <div>{release_date || first_air_date}</div>
          <HandThumbUpIcon className='w-5 h-5' />
          <div>{vote_count}</div>
        </div>
      </div>
    </div>
  )
}

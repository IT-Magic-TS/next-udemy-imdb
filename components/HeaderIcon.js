
export default function HeaderIcon({Icon, title}) {
  return (
    <div className='flex-col items-center select-none cursor-pointer text-center justify-center text-gray-300 p-2 group'>
      <Icon className='h-8 w-8 group-hover:text-yellow-400 mx-auto group-active:text-red-600' />
      <div className='mt-2 text-gray-300 group-hover:text-yellow-400 group-active:text-red-600'>{title}</div>
    </div>
  )
}

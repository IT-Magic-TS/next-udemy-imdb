import { HomeIcon, InformationCircleIcon, PhoneIcon, UserIcon } from '@heroicons/react/24/solid'
import Image from 'next/image';
import HeaderIcon from './HeaderIcon';

export default function Header() {
  return (
    <div className='flex flex-col items-center justify-center md:flex-row md:justify-between'>
      <div className='flex gap-x-4'>
        <HeaderIcon Icon={HomeIcon} title={'HOME'} />
        <HeaderIcon Icon={UserIcon} title={'ACCOUNT'} />
        <HeaderIcon Icon={PhoneIcon} title={'CONTACT'} />
        <HeaderIcon Icon={InformationCircleIcon} title={'ABOUT'} />
      </div>
      <Image
        src="/imgs/logo-14.png"
        width={174}
        height={90}
        alt='14 CAD'
      />
    </div>
  )
}

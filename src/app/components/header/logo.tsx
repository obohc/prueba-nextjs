import Image from 'next/image';
import { roboto } from '@/app/lib/fonts';

export default function Logo() {
  return (
    <div className="flex gap-4 items-center">
      <div className="relative flex w-7 h-10 sm:w-10 sm:h-14 md:w-14 md:h-20">
        <Image src="/logo.svg" alt="Company logo" fill/>
      </div>
      <span className={`${roboto.className} font-bold text-3xl sm:text-4xl md:text-6xl`}>Google Maps</span>
    </div>
  );
}
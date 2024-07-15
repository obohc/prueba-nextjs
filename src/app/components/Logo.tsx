import Image from 'next/image';

export default function Logo() {
  return (
    <div className="relative w-28 h-14 sm:w-40 sm:h-20">
      <Image src="/logo.svg" alt="Company logo" fill/>
    </div>
  );
}
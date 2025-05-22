import Image from 'next/image';

const Logo = () => (
  <>
    <span className="flex items-center ml-2 self-center text-black">
      <Image
        src="/Djins.png"
        alt="BIG DJINS Logo"
        width={75}
        height={75}
        className="mr-2"
      />
      <span className="flex flex-col leading-tight" >
        <span className="text-2xl md:text-xl font-bold">
          BIG DJINS:0
        </span>
        <span className="text-[11px] tracking-widest font-light uppercase text-gray-700 -mt-0.5">
          YOUR SOURCE FOR SEAMLESS CLOTHING PRODUCTION.
        </span>
      </span>
    </span>
  </>
);

export default Logo;

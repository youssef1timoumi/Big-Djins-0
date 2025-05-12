import Image from 'next/image'; // ⬅️ Next.js optimized Image component

const Logo = () => (
  <span className="flex items-center ml-2 self-center whitespace-nowrap text-2xl font-bold text-black md:text-xl">
    <Image
      src="/Djins.png"
      alt="BIG DJINS Logo"
      width={75}
      height={75}
      className="mr-2"
    />
    BIG DJINS:0
  </span>
);

export default Logo;

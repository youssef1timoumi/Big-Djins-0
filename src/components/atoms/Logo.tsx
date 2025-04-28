import Image from 'next/image'; // ⬅️ Next.js optimized Image component
const Logo = () => (
  <span className="flex items-center ml-2 self-center whitespace-nowrap text-2xl font-bold text-gray-900 dark:text-white md:text-xl">
    <Image
      src="/Djins.png" // ⬅️ path should be public folder based
      alt="BIG DJINS Logo"
      width={75} // adjust size here
      height={75}
      className="mr-2" // small margin between logo and text
    />
    BIG DJINS
  </span>
);

export default Logo;

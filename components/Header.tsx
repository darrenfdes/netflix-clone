import Image from "next/image";
import { BellIcon, SearchIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
      <div className="flex items-center space-x-2 md:spacing-x-10">
        <Image
          objectFit="contain"
          src="/netflix-logo.svg"
          alt="Netflix Logo"
          width={100}
          height={100}
        />
        <ul className="hidden space-x-4 md:flex">
          <li className="headerlink">Home</li>
          <li className="headerlink">TV Shows</li>
          <li className="headerlink">Movies</li>
          <li className="headerlink">New & Popular</li>
          <li className="headerlink">My List</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4">
        <SearchIcon className="hidden h-6 w-6 sm:inline text-sm font-light" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6" />
        <Link href={"/account"}>
          <Image
            objectFit="contain"
            src="/account.png"
            alt="Netflix Logo"
            height={24}
            width={24}
            className="cursor-pointer rounded"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;

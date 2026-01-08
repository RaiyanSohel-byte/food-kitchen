import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="flex justify-between py-4 bg-stone-700 text-white px-6">
      <Logo />
      <div className="flex gap-4">
        <Link href="/foods" className="font-semibold">
          Foods
        </Link>
        <Link href="/reviews" className="font-semibold">
          Reviews
        </Link>
      </div>
    </div>
  );
};

export default Header;

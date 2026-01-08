import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={`/`}>
      {" "}
      <div className="text-2xl font-bold">
        <i>FoodKitchen</i>
      </div>
    </Link>
  );
};

export default Logo;

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Routes = () => {
  const pathname = usePathname();

  const pageRoutes: { link: string; name: string }[] = [
    {
      link: "/news",
      name: "News",
    },
    {
      link: "/phonefinder",
      name: "Phone Finder",
    },
    {
      link: "/coverage",
      name: "Coverage",
    },
    {
      link: "/budget",
      name: "Budget",
    },
    {
      link: "/review",
      name: "Reviews",
    },
    {
      link: "/contact",
      name: "Contact Us",
    },
  ];

  return (
    <ul className="font-medium flex flex-col p-4  md:p-0 mt-4 border border-gray-100 rounded-sm bg-gray-50 md:flex-row md:space-x-10 rtl:space-x-reverse md:hover:text-tpblue md:mt-0 md:border-0 md:bg-white ">
      <li>
        <Link
          href="/"
          className="hover:ease-in duration-300 hover:scale-105 block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-tpblue md:p-0 "
        >
          <span className={pathname == "/" ? "active" : ""}>Home</span>
        </Link>
      </li>
      {pageRoutes.map((route) => (
        <li key={route.name}>
          <Link
            href={route.link}
            className="hover:ease-in duration-300 hover:scale-105 block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-tpblue md:p-0 "
          >
            <span className={pathname.includes(route.link) ? "active" : ""}>
              {route.name}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Routes;

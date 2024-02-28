import { useState } from "react";
import { namesNavar } from "../../utilities";

function SideNavar({ isSideNavOpen }) {
  return (
    <>
      <nav
        id="sidenav-8"
        className="absolute left-0 top-0 z-[1035] h-full w-60 -translate-x-full overflow-hidden bg-[#1a1a1a] shadow-[0_4px_12px_0_rgba(54, 48, 51, 0.82),_0_2px_4px_rgba(54, 48, 51, 0.82) data-[te-sidenav-hidden='false']:translate-x-0 dark:bg-zinc-800"
        data-te-sidenav-init
        data-te-sidenav-hidden={isSideNavOpen ? false : true}
        data-te-sidenav-position="absolute"
        data-te-sidenav-accordion="true"
      >
        
        <a
          className="mb-3 flex items-center justify-center border-b-2 border-solid border-gray-100 py-6 outline-none"
          href="#!"
          data-te-ripple-init
          data-te-ripple-color="primary"
        >
          <img
            id="te-logo"
            className="mr-2 w-6"
            src="https://tecdn.b-cdn.net/img/logo/te-transparent-noshadows.png"
            alt="TE Logo"
            draggable="false"
          />
          <span>JS info Isactes</span>
        </a>
        <ul
          className="relative m-0 list-none px-[0.2rem] pb-12"
          data-te-sidenav-menu-ref
        >
          <span className="px-6 py-4 text-[0.6rem] font-bold uppercase text-gray-600 dark:text-gray-400">
            Menu
          </span>
          {namesNavar.map((navs) => (
            <li key={navs.id} className="relative pt-4">
              <a
                className="flex cursor-pointer items-center truncate rounded-[5px] px-6 py-[0.45rem] text-[0.85rem] text-white-600 outline-none transition duration-300 ease-linear hover:bg-black hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                data-te-sidenav-link-ref
              >
                <span className="mr-4 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
                  <svg
                    xmlns={navs.iconXml}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-3.5 w-3.5"
                  >
                    <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
                  </svg>
                </span>
                <span>{navs.nav}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default SideNavar;

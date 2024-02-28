import PropTypes from "prop-types";
import { namesNavar } from "../../utilities";

function SideNavar({ isSideNavOpen, toggleSideNav }) {
  return (
    <>
      <nav
        id="sidenav-8"
        className={`absolute top-0 right-0 z-[1035] h-full w-60 -translate-x-full overflow-hidden bg-[#1a1a1a] shadow-[0_4px_12px_0_rgba(54, 48, 51, 0.82),_0_2px_4px_rgba(54, 48, 51, 0.82)] ${isSideNavOpen ? 'translate-x-0' : 'translate-x-full'} dark:bg-zinc-800`}
        data-te-sidenav-init
        data-te-sidenav-hidden={isSideNavOpen ? false : true}
        data-te-sidenav-position="absolute"
        data-te-sidenav-accordion="true"
      >
        <div className="mb-2 flex items-center justify-between flex-row-reverse">
          <button className="m-1.5" type="button" onClick={toggleSideNav}>
            <span className="[&>svg]:w-7 ">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm79 143c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
              </svg>
            </span>
          </button>
          <a
            className="m-2.5 flex items-center justify-center text-xl"
            href="#!"
            data-te-ripple-init
            data-te-ripple-color="primary"
          >
            <span>JS info Isactes</span>
          </a>
        </div>
        <ul
          className="relative m-0 list-none px-[0.2rem] pb-12"
          data-te-sidenav-menu-ref
        >
          <span className="px-6 py-4 text-[0.6rem] font-bold uppercase text-white-600 dark:text-gray-400">
            Menu
          </span>
          {namesNavar.map((navs) => (
            <li key={navs.id} className="relative pt-4">
              <a
                className="flex cursor-pointer items-center truncate rounded-[5px] px-6 py-[0.45rem] text-[0.85rem] text-white-600 outline-none transition duration-300 ease-linear hover:bg-black hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-white-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
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
                <span className="text-zinc-50">{navs.nav}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

SideNavar.propTypes = {
  isSideNavOpen: PropTypes.bool.isRequired,
  toggleSideNav: PropTypes.func.isRequired,
};

export default SideNavar;

import { socialNetworks, namesFotter } from "../../utilities";
function FooterMain() {
  return (
    <>
      <footer className=" text-center text-gray-500 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
        {/* Social icons */}
        <div className="border-b-2 border-neutral-200 p-6 dark:border-neutral-500">
          <div className="container mx-auto px-10">
            <div className="flex items-center justify-center lg:justify-between">
              <div className="mr-12 hidden lg:block">
                <span>Get connected with us on social networks:</span>
              </div>
              <div className="flex justify-center">
                {socialNetworks.map((social) => (
                  <a
                    key={social.id}
                    href={social.networkUrl}
                    target="_blank"
                    className="mr-6 text-gray-500 dark:text-gray-200"
                  >
                    <svg
                      xmlns={social.iconNetwork}
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d={social.iconPath} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Social icons */}

        {/* Main footer content */}
        <div className="container mx-auto px-4">
          <div className="mx-6 py-10 text-center md:text-left">
            <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
              <div className="grid grid-cols-2 gap-2.5">
                {namesFotter.map((foo) => (
                  <div key={`${foo.id} father`}>
                    <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                      {foo.titleFotter}
                    </h6>
                    {foo.footText.map((ft) => (
                      <p key={`${ft.id} - ${foo.id} children`} className="mb-4">
                        <a
                          href="#!"
                          className="text-gray-500 dark:text-neutral-200"
                        >
                          {ft.foot}
                        </a>
                      </p>
                    ))}
                  </div>
                ))}
              </div>
              <div className="flex justify-center flex-row-reverse items-center gap-5">
                {socialNetworks.map((so) => (
                  <div key={so.id}>
                    <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                      {so.network}
                    </h6>
                    <p className="mb-4 flex items-center justify-center md:justify-start">
                      <svg
                        xmlns={so.iconNetwork}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="mr-3 h-5 w-5"
                      >
                        <path d={so.iconPath} />
                      </svg>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Main footer content */}

        {/* Copyrights */}
        <div className="p-6 text-center dark:bg-neutral-700">
          <span>© 2023 Copyright:</span>
          <a
            className="font-semibold text-neutral-600 dark:text-neutral-400"
            href="https://tw-elements.com/"
          >
            TW Elements
          </a>
        </div>
        {/* Copyrights */}
      </footer>
    </>
  );
}

export default FooterMain;

function Heading() {
  return (
    <div
      className="relative overflow-hidden bg-cover bg-no-repeat p-12 text-center md:flex-wrap md:justify-center"
      style={{backgroundImage: "url('https://tecdn.b-cdn.net/img/new/slides/041.webp')", height: "400px"}}
    >
      <div
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
        style={{backgroundColor: "rgba(0, 0, 0, 0.6)"}}
      >
        <div className="flex h-full items-center justify-star m-2">
          <div className="text-white">
            <h2 className="mb-4 text-4xl font-semibold">Tutorial de JavaScript Moderno</h2>
            <h4 className="mb-6 text-xl font-semibold">By Isactes</h4>
            <button
              type="button"
              className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Call to action
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Heading
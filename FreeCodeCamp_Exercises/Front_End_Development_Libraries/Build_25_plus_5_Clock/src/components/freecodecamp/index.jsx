import PropTypes from "prop-types"


function Clock({ 
  play, 
  breakLengthNumber,
  sessionLengthNumber,
  timeLeft,
  handleBreakIncrement,
  handleBreakDecrement,
  handleSessionIncrement,
  handleSessionDrecrement,
  handlePlay,
  handlePuase,
  handleReset,
  title,
  idBeed

}) {

  const colorFill = "#FFD43B"

  return (
    <>
      <div
        className="w-full h-screen"
        style={{
          "backgroundImage":
            "url('https://vojislavd.com/ta-template-demo/assets/img/coming-soon.jpg')",
        }}
      >
        <div className="w-full h-screen bg-black bg-opacity-70">
          <div className="w-full h-full flex flex-col items-center justify-center container mx-auto py-8 px-8 lg:px-4 xl:px-0">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-6xl lg:text-7xl xl:text-8xl text-gray-200 tracking-wider font-bold font-serif mt-12 text-center md:text-left">
                25 + 5<span className="text-yellow-300"> Clock</span>
              </h1>
              <div
                id="break-label"
                className="mt-12 flex flex-row items-center justify-between mt-8 ml-2"
              >
                <div className="flex flex-col items-center justify-center space-x-4 mt-4">
                  <p className="text-gray-300 uppercase text-2xl ">
                    Break Length
                  </p>
                  <div className="flex flex-row items-center">
                    <div className="flex flex-col items-center px-4">
                      {/* button incremento Break Length*/}
                      <button
                        id="break-increment"
                        className="flex items-center justify-center  w-10 h-10"
                        disabled={play}
                        onClick={handleBreakIncrement}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                        >
                          <path
                            fill={colorFill}
                            d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                          />
                        </svg>
                      </button>
                    </div>
                    <span className="w-[1px] h-24 bg-gray-400"></span>
                    <div
                      id="break-length"
                      className="flex flex-col items-center px-4"
                    >
                      <span
                        x-text="time().hours"
                        className="text-4xl lg:text-5xl text-gray-200"
                      >
                        {breakLengthNumber}
                      </span>
                    </div>
                    <span className="w-[1px] h-24 bg-gray-400"></span>
                    <div className="flex flex-col items-center px-4">
                      {/* button de decremento  Break Length*/}
                      <button
                        id="break-decrement"
                        className="flex items-center justify-center  w-10 h-10"
                        disabled={play}
                        onClick={handleBreakDecrement}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                        >
                          <path
                            fill={colorFill}
                            d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  id="session-label"
                  className="flex flex-col items-center justify-center space-x-4 mt-4"
                  x-data="timer(new Date().setDate(new Date().getDate() + 1))"
                  x-init="init();"
                >
                  <p className="text-gray-300 uppercase text-2xl ">
                    Session Length
                  </p>
                  <div className="flex flex-row items-center">
                    <div className="flex flex-col items-center px-4">
                      {/* buton de incremento  Session Length */}
                      <button
                        id="session-increment"
                        className="flex items-center justify-center  w-10 h-10 "
                        disabled={play}
                        onClick={handleSessionIncrement}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                        >
                          <path
                            fill={colorFill}
                            d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                          />
                        </svg>
                      </button>
                    </div>
                    <span className="w-[1px] h-24 bg-gray-400"></span>
                    <div
                      id="session-length"
                      className="flex flex-col items-center px-4"
                    >
                      <span
                        x-text="time().hours"
                        className="text-4xl lg:text-5xl text-gray-200"
                      >
                        {sessionLengthNumber}
                      </span>
                    </div>
                    <span className="w-[1px] h-24 bg-gray-400"></span>
                    <div className="flex flex-col items-center px-4">
                      {/* button de decremento Session Length */}
                      <button
                        id="session-decrement"
                        className="flex items-center justify-center  w-10 h-10"
                        disabled={play}
                        onClick={handleSessionDrecrement}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                        >
                          <path
                            fill={colorFill}
                            d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 flex flex-col items-center mt-8 ml-2">
                <p
                  id="timer-label"
                  className="text-gray-300 uppercase text-2xl "
                >
                  {title}
                </p>
                <div className="flex items-center justify-center space-x-4 mt-4">
                  <span className="w-[1px] h-24 bg-gray-400"></span>
                  <div
                    id="time-left"
                    className="flex flex-col items-center px-4"
                  >
                    <span
                      x-text="time().hours"
                      className="text-4xl lg:text-5xl text-gray-200"
                    >
                      {timeLeft}
                    </span>
                  </div>
                  <span className="w-[1px] h-24 bg-gray-400"></span>
                </div>
                <div className="flex items-center justify-center space-x-4 mt-4">
                  <div className="flex flex-col items-center px-4">
                    <button
                      id="start_stop"
                      className="flex items-center justify-center  w-10 h-10 rounded"
                      onClick={handlePlay}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill={colorFill}
                          d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"
                        />
                      </svg>
                    </button>
                  </div>
                  <span className="w-[1px] h-24 bg-gray-400"></span>
                  <div className="flex flex-col items-center px-4">
                    <button
                      id="start_stop"
                      className="flex items-center justify-center  w-10 h-10 "
                      onClick={handlePuase}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill={colorFill}
                          d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM224 192V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V192c0-17.7 14.3-32 32-32s32 14.3 32 32zm128 0V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V192c0-17.7 14.3-32 32-32s32 14.3 32 32z"
                        />
                      </svg>
                    </button>
                  </div>
                  <span className="w-[1px] h-24 bg-gray-400"></span>
                  <div className="flex flex-col items-center px-4">
                    <button
                      id="reset"
                      className="flex items-center justify-center  w-10 h-10 rounded"
                      onClick={handleReset}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill={colorFill}
                          d="M0 224c0 17.7 14.3 32 32 32s32-14.3 32-32c0-53 43-96 96-96H320v32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9S320 19.1 320 32V64H160C71.6 64 0 135.6 0 224zm512 64c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 53-43 96-96 96H192V352c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V448H352c88.4 0 160-71.6 160-160z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex items-center justify-center md:justify-end">
              <ul className="flex items-center space-x-4 m-8">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                      fill={colorFill}
                      d="M256.6 8C116.5 8 8 110.3 8 248.6c0 72.3 29.7 134.8 78.1 177.9 8.4 7.5 6.6 11.9 8.1 58.2A19.9 19.9 0 0 0 122 502.3c52.9-23.3 53.6-25.1 62.6-22.7C337.9 521.8 504 423.7 504 248.6 504 110.3 396.6 8 256.6 8zm149.2 185.1l-73 115.6a37.4 37.4 0 0 1 -53.9 9.9l-58.1-43.5a15 15 0 0 0 -18 0l-78.4 59.4c-10.5 7.9-24.2-4.6-17.1-15.7l73-115.6a37.4 37.4 0 0 1 53.9-9.9l58.1 43.5a15 15 0 0 0 18 0l78.4-59.4c10.4-8 24.1 4.5 17.1 15.6z"
                    />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                      fill={colorFill}
                      d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                    />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path
                      fill={colorFill}
                      d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                    />
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <audio
        id={idBeed}
        preload="auto"
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
        />
      </div>
    </>
  );
}


Clock.propTypes = {
  play: PropTypes.bool, 
  breakLengthNumber: PropTypes.number, 
  sessionLengthNumber: PropTypes.number, 
  timeLeft: PropTypes.any,
  handleBreakIncrement:  PropTypes.func,
  handleBreakDecrement: PropTypes.func,
  handleSessionIncrement: PropTypes.func,
  handleSessionDrecrement: PropTypes.func,
  handlePlay: PropTypes.func,
  handlePuase: PropTypes.func,
  handleReset: PropTypes.func,
  title: PropTypes.string,
  idBeed: PropTypes.string
}


export default Clock;

import Title from "../title/title"
import ButtonNumber from "../button/button"
import { numberCalcu } from "../../utilities"

function Card() {
  return(
    <div className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <Title
      title="Calculadora"
      authorName="Isac"
      made="Build an app that is functionally similar to this: https://javascript-calculator.freecodecamp.rocks/.
      Fulfill the below user stories and get all of the tests to pass. Use whichever libraries or APIs you need. Give it your own personal style.
      You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks. Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other frontend frameworks like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!"
      date="2024-02-14"
      />
      <div className="">
        {numberCalcu.map( number => (
          <ButtonNumber
          key=""
          number={number.number}
          />
        ))}
      </div>
    </div>
  )}

export default Card
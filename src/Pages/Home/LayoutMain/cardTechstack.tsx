import { Card, CardTitle } from "../../../Components/UI/Card";

import iconjs from "../../../assets/icon dev/js.png";
import iconreact from "../../../assets/icon dev/atom.png";
import iconnodejs from "../../../assets/icon dev/nodejs.png";
import iconpostgre from "../../../assets/icon dev/postgre.png";
import iconts from "../../../assets/icon dev/typescript.png";
import iconvue from "../../../assets/icon dev/vuejs.png";

const CardTechstack = () => {
  return (
    <>
      <Card className="border-[1px] border-black col-span-10 xl:col-span-5 h-fit rounded-md">
        <CardTitle className="bg-gradient-to-t from-red-200 via-red-300 to-red-50">
          <i className="my-auto mr-2 fa fa-code" aria-hidden="true"></i>Tech
          Stack I used
        </CardTitle>
        <ul className="gap-4 grid grid-cols-2 py-4 mx-4">
          <li>
            <i className="mr-2 fa fa-html5" aria-hidden="true"></i>
            HTML, CSS
          </li>
          <li className="flex">
            <img
              src={iconjs}
              alt="icon of Javascript"
              className="my-auto mr-2 w-4 h-4"
            />
            Javascript
          </li>
          <li className="flex">
            <img
              src={iconts}
              alt="icon of Typescript"
              className="my-auto mr-2 w-4 h-4"
            />
            Typescript
          </li>
          <li className="flex">
            <img
              src={iconnodejs}
              alt="icon of Node JS"
              className="my-auto mr-2 w-4 h-4"
            />
            Node JS
          </li>
          <li className="flex">
            <img
              src={iconreact}
              alt="icon of ReactJS"
              className="my-auto mr-2 w-4 h-4"
            />
            ReactJS
          </li>
          <li className="flex">
            <img
              src={iconreact}
              alt="icon of Next JS"
              className="my-auto mr-2 w-4 h-4"
            />
            Next JS
          </li>
          <li className="flex">
            <img
              src={iconvue}
              alt="icon of VueJs"
              className="my-auto mr-2 w-4 h-4"
            />
            VueJs
          </li>
          <li className="flex">
            <img
              src={iconpostgre}
              alt="icon of VueJs"
              className="my-auto mr-2 w-4 h-4"
            />
            Postgre SQL
          </li>
        </ul>
      </Card>
    </>
  );
};

export default CardTechstack;

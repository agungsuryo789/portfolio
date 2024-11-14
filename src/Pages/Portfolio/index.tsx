import { useState } from "react";
import Card from "../../Components/UI/Card";
import CardBody from "../../Components/UI/CardBody";
import CardImage from "../../Components/UI/CardImage";

import csiapp from "../../assets/images/csi_admin_chat.png";
import tiarahijabers from "../../assets/images/tiarahijabers_homepage.jpeg";

const Portfolio = () => {
  const [accordion, setAccordion] = useState(0);

  return (
    <div className="col-span-1 xl:col-span-1 col-start-1 xl:col-start-2 p-0">
      <Card className="flex lg:flex-row xl:flex-row flex-col border-0 my-2">
        <CardImage src={csiapp} alt="csi admin dashboard screenshot" />
        <CardBody className="hover:bg-green-400 lg:mx-2 xl:mx-2 my-2 lg:my-0 xl:my-0 mr-2 hover:text-black">
          <button className="text-left" onClick={() => setAccordion(1)}>
            <span className="m-0 p-0 font-extrabold">CSI Admin Dashboard</span>
            <p className="m-0 p-0">
              Interactive admin dashboard for B2B e-commerce website with key
              features such as online chat, graphic chart, and interactive
              tables.
            </p>
          </button>
        </CardBody>
      </Card>
      <div
        onClick={() => setAccordion(0)}
		className={`cursor-pointer border-2 border-dotted border-gray-900 dark:border-white ${accordion === 1 ? "block" : "hidden"}`}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita iste
        minus provident rerum delectus. Sed aspernatur explicabo eveniet.
        Reiciendis quidem consequuntur quas rerum libero amet excepturi
        laboriosam possimus dolores minus!
      </div>
      <Card className="flex lg:flex-row xl:flex-row flex-col border-0 my-2">
        <CardImage src={tiarahijabers} alt="tiara hijaber website screenshot" />
        <CardBody className="hover:bg-green-400 lg:mx-2 xl:mx-2 my-2 lg:my-0 xl:my-0 mr-2 hover:text-black">
          <button className="text-left" onClick={() => setAccordion(2)}>
            <span className="m-0 p-0 font-extrabold">
              Tiara Hijabers Online Shop
            </span>
            <p className="m-0 p-0">
              Online Shop website with key features such as product page, cart,
              and third-app payment gateway Midtrans.
            </p>
          </button>
        </CardBody>
      </Card>
      <div
        onClick={() => setAccordion(0)}
		className={`cursor-pointer border-2 border-dotted border-gray-900 dark:border-white ${accordion === 2 ? "block" : "hidden"}`}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti esse
        necessitatibus voluptatibus maxime! Consequuntur facilis officiis
        dolorum blanditiis? Est minima sit veritatis quis et doloribus
        blanditiis illum, soluta sint perspiciatis.
      </div>
    </div>
  );
};

export default Portfolio;

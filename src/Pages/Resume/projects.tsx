import Card from "../../Components/UI/Card";
import CardImage from "../../Components/UI/CardImage";
import CardBody from "../../Components/UI/CardBody";

import csiapp from '../../assets/images/csi_admin_chat.png'
import tiarahijabers from '../../assets/images/tiarahijabers_homepage.jpeg'

const Project = () => {
  return (
    <div>
      <h3 className="terminal__icon text-3xl border-b-2 border-gray-500 border-solid my-6">
        Relevant Projects
      </h3>

      <Card className="my-2">
        <CardImage src={csiapp} alt="csi admin dashboard screenshot" />
        <CardBody className="mx-2">
          <a className="text-lg font-bold" href="" target="_blank">
            CSI Admin Dashboard
          </a>
          <p>
            Interactive admin dashboard for B2B e-commerce website with key
            features such as online chat, graphic chart, and interactive tables.
          </p>
        </CardBody>
      </Card>
      <Card className="my-2">
        <CardImage src={tiarahijabers} alt="tiara hijaber website screenshot" />
        <CardBody className="mx-2">
          <a className="text-lg font-bold" href="" target="_blank">
            Tiara hijabers
          </a>
          <p>
            Online Shop website with key features such as product page, cart,
            and third-app payment gateway Midtrans.
          </p>
        </CardBody>
      </Card>
    </div>
  );
};

export default Project;

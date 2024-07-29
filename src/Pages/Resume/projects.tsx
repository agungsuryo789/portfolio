import Card from "../../Components/UI/Card";
import CardImage from "../../Components/UI/CardImage";
import CardBody from "../../Components/UI/CardBody";

import csiapp from '../../assets/images/csi_admin_chat.png'
import tiarahijabers from '../../assets/images/tiarahijabers_homepage.jpeg'

const Project = () => {
  return (
    <div>
      <h3 className="border-2 border-gray-800 my-6 border-solid text-3xl">
        Recent Projects
      </h3>

      <Card className="my-2">
        <CardImage src={csiapp} alt="csi admin dashboard screenshot" />
        <CardBody className="mx-2">
          <a className="font-bold text-lg" href="" target="_blank">
            CSI Admin Dashboard
          </a>
        </CardBody>
      </Card>
      <Card className="my-2">
        <CardImage src={tiarahijabers} alt="tiara hijaber website screenshot" />
        <CardBody className="mx-2">
          <a className="font-bold text-lg" href="" target="_blank">
            Tiara hijabers
          </a>
        </CardBody>
      </Card>
    </div>
  );
};

export default Project;

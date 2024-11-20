import Card from "../../Components/UI/Card/Card";
import CardImage from "../../Components/UI/Card/CardImage";
import CardBody from "../../Components/UI/Card/CardBody";

import csiapp from '../../assets/images/csi_admin_chat.png'
import tiarahijabers from '../../assets/images/tiarahijabers_homepage.jpeg'

const Project = () => {
  return (
    <div>
      <h3 className="my-6 px-1 border-b-2 border-b-green-500 border-solid text-3xl">
        Past Projects
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

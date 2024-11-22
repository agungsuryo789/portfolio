import { Card, CardTitle } from "../../../Components/UI/Card";

const CardExperience = () => {
  return (
    <>
      <Card className="col-span-10 xl:col-span-5">
        <CardTitle>
          <i className="my-auto mr-2 fa fa-code" aria-hidden="true"></i>
          Experience
        </CardTitle>
        <div className="flex flex-row gap-4 p-2 max-w-full min-h-44 overflow-x-auto overflow-y-hidden">
          <div className="border-2 p-2 min-w-full h-44">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            officia commodi quae eveniet quam perspiciatis laudantium provident
            quibusdam odit corporis animi temporibus unde laborum qui maxime
            iure suscipit, possimus ullam.
          </div>
          <div className="border-2 p-2 min-w-full h-44">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            officia commodi quae eveniet quam perspiciatis laudantium provident
            quibusdam odit corporis animi temporibus unde laborum qui maxime
            iure suscipit, possimus ullam.
          </div>
          <div className="border-2 p-2 min-w-full h-44">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            officia commodi quae eveniet quam perspiciatis laudantium provident
            quibusdam odit corporis animi temporibus unde laborum qui maxime
            iure suscipit, possimus ullam.
          </div>
        </div>
      </Card>
    </>
  );
};

export default CardExperience;

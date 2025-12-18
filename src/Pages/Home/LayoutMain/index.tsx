import { Card, CardTitle } from "../../../Components/UI/Card";
import CardProject from "./cardProject";
import CardBlog from "./cardBlog";

const LayoutMain = () => {
  return (
    <>
      <section className="p-2 col-start-1 xl:col-start-2 xl:col-span-3 gap-4">
        {/* ABOUT */}
        <div className="mb-4 break-inside-avoid inline-block w-full max-w-full overflow-hidden">
          <div className="flex flex-col">
            <h3 className="mx-0 my-6 p-0 font-bold text-5xl text-center">
              Hi! i'm Agung
              <span className="m-0 p-0 font-bold text-3xl animate-blink">
                |
              </span>
            </h3>
            <p className="mx-0 my-2 p-0">
              <a
                href="https://drive.google.com/file/d/1v17GWuNlippZbQkw7AUdLfrT-YsIGcel/view?usp=sharing"
                target="_blank"
                className="font-semibold hover:underline"
              >
                Full-stack developer
              </a>{" "}
              with 3+ years of experience working across React.js, Next.js,
              APIs, and relational databases, turning real business requirements
              into reliable, production-ready web applications.
            </p>
          </div>
        </div>

        {/* PROJECT */}
        <div className="mb-4 break-inside-avoid inline-block w-full max-w-full overflow-hidden">
          <CardProject />
        </div>

        {/* BLOG */}
        <div className="mb-4 break-inside-avoid inline-block w-full max-w-full overflow-hidden">
          <CardBlog />
        </div>

        {/* CONTACT */}
        <div className="mb-4 break-inside-avoid inline-block w-full max-w-full overflow-hidden">
          <div className="flex flex-col gap-2">
            <Card className="border-[1px] border-black w-full">
              <CardTitle>
                <i className="mr-4 fa fa-commenting" /> Contact me at
              </CardTitle>
              <div className="flex gap-8 ml-2 w-full justify-start px-6">
                <a href="mailto:agungsuryo645@gmail.com">
                  <i className="text-2xl fa fa-envelope" />
                </a>
                <span className="mx-2 text-2xl">|</span>
                <a href="https://github.com/agungsuryo789" target="_blank">
                  <i className="text-2xl fa fa-github" />
                </a>
                <span className="mx-2 text-2xl">|</span>
                <a
                  href="https://www.linkedin.com/in/agungsuryo/"
                  target="_blank"
                >
                  <i className="text-2xl fa fa-linkedin-square" />
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default LayoutMain;

const Resume = () => {
  return (
    <section className="col-span-1 col-start-1 p-0 xl:col-span-2 xl:col-start-2">
      <div>
        <h3 className="text-3xl font-bold border-b-2 border-black border-solid my-6">
          Experience
        </h3>
        <div className="flex flex-row justify-between my-2">
          <span className="experience__company text-nowrap overflow-hidden">
            CODR
          </span>
          <div className="flex flex-col">
            <span>Front End Engineer</span>
            <span>2022-02 -- Present</span>
          </div>
        </div>
        <div className="flex flex-row justify-between my-2">
          <span className="experience__company text-nowrap overflow-hidden">
            Sindata
          </span>
          <div className="flex flex-col">
            <span>Front End Engineer</span>
            <span>2021-09 -- 2022-02</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

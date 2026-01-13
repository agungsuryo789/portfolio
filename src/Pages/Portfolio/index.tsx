const Portfolio = () => {
  return (
    <div className="col-span-1 xl:col-span-1 col-start-1 xl:col-start-2 p-2 grid grid-flow-col grid-cols-1 md:grid-cols-3 lg:grid-cols-5 p-0">
      <div
        id="isma-psikolog"
        className="flex flex-col col-start-1  col-span-3 lg:col-start-2 mb-8"
      >
        <h3 className="text-2xl font-semibold my-4 text-center">
          Isma Psikolog Klinis Website
        </h3>
        <span className="text-xl font-semibold my-2 text-center">2025</span>
        <span className="text-sm font-semibold my-2 px-0">
          Role: Full-Stack Engineer
        </span>
        <span className="text-sm font-semibold my-2 px-0">
          Tech Stack: Next.js (Monolith), Supabase
        </span>
        <span className="text-sm font-semibold my-2 px-0">
          URL:{" "}
          <a
            href="https://maula-psychologist.vercel.app/"
            className="text-blue-600 hover:underline"
            target="_blank"
          >
            https://maula-psychologist.vercel.app/
          </a>
        </span>
        <p className="px-0 my-2">
          Designed and developed a full-stack professional website for Isma
          Psikolog Klinis, a clinical psychology practice offering mental health
          services and consultations. Built using Next.js as a fullstack
          framework with Supabase as the backend database and authentication
          provider, creating a unified solution for both client-facing and
          administrative needs.
        </p>
        <p className="px-0 my-2">
          Implemented a comprehensive admin dashboard enabling psychologists to
          manage client profiles, session records, and service offerings
          independently. Integrated a real-time live chat feature using
          Supabase's realtime capabilities, allowing clients to initiate
          consultations and communicate directly with practitioners, enhancing
          accessibility and engagement for mental health services.
        </p>
        <p className="px-0 my-2">
          Architected a scalable solution that combines a professional profile
          presence with operational tools, supporting client onboarding, secure
          data handling for sensitive health information, and seamless
          communication channels. The platform balances user-friendly client
          interactions with practical administrative functionality, providing a
          complete digital presence for clinical psychology services.
        </p>
        <img
          src="/portfolio/screenshot/isma_psikolog_screenshoot.png"
          alt="Project Isma Psikolog Klinis Website"
          className="object-contain max-w-[800px] max-h-[600px] aspect-square mx-auto my-4"
        />
      </div>

      <div
        id="simba-refinery"
        className="flex flex-col col-start-1  col-span-3 lg:col-start-2 mb-8"
      >
        <h3 className="text-2xl font-semibold my-4 text-center">
          Simba Refinery Website
        </h3>
        <span className="text-xl font-semibold my-2 text-center">2025</span>
        <span className="text-sm font-semibold my-2 px-0">
          Role: Full-Stack Engineer
        </span>
        <span className="text-sm font-semibold my-2 px-0">
          Tech Stack: Next.js, Payload CMS (Node.js), PostgreSQL
        </span>
        <span className="text-sm font-semibold my-2 px-0">
          URL:{" "}
          <a
            href="https://simbarefinery.com/"
            className="text-blue-600 hover:underline"
            target="_blank"
          >
            https://simbarefinery.com/
          </a>
        </span>
        <p className="px-0 my-2">
          Designed and developed a full-stack corporate website for Simba
          Refinery, a company operating in the precious metals refining
          industry, serving both B2B and B2C audiences. Built the frontend using
          Next.js with a headless CMS architecture, integrating Payload CMS as
          the backend and PostgreSQL as the primary data store.
        </p>
        <p className="px-0 my-2">
          Owned the content architecture and data modeling within Payload CMS,
          defining collections, relationships, and access rules to support
          structured content such as services, products, news, and company
          information. Implemented dynamic page rendering strategies to balance
          SEO, performance, and maintainability, enabling non-technical
          stakeholders to manage content independently via the CMS.
        </p>
        <p className="px-0 my-2">
          Ensured a scalable and maintainable application by aligning frontend
          components with CMS-driven schemas, minimizing duplication and
          improving long-term extensibility. The solution supports
          internationalized content, responsive layouts, and production-ready
          performance suitable for a corporate brand with commercial and
          informational requirements.
        </p>
        <img
          src="/portfolio/screenshot/simbarefinery_screenshoot.png"
          alt="Project Simba Refinery Website"
          className="object-contain max-w-[800px] max-h-[600px] aspect-square mx-auto my-4"
        />
      </div>

      <div
        id="tribun-community"
        className="flex flex-col col-start-1  col-span-3 lg:col-start-2 mb-8"
      >
        <h3 className="text-2xl font-semibold my-4 text-center">
          Tribun Community
        </h3>
        <span className="text-xl font-semibold my-2 text-center">2025</span>
        <span className="text-sm font-semibold my-2 px-0">
          Role: Frontend Engineer
        </span>
        <span className="text-sm font-semibold my-2 px-0">
          Tech Stack: Next.js, Zod (form validation), supporting frontend
          libraries
        </span>
        <span className="text-sm font-semibold my-2 px-0">
          URL:{" "}
          <a
            href="https://komunitas.tribunnews.com/"
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            https://komunitas.tribunnews.com/
          </a>
        </span>
        <p className="px-0 my-2">
          Worked on the frontend of Tribun Komunitas, a large-scale community
          publishing and user-generated content platform within the Tribun
          Network media ecosystem. Built and maintained SEO-optimized,
          content-heavy pages using Next.js, ensuring performance, consistency,
          and scalability for a high-traffic media audience.
        </p>
        <p className="px-0 my-2">
          Contributed to frontend architecture and component design,
          implementing reusable UI patterns for article submission, listings,
          and content consumption flows. Applied schema-based form validation
          with Zod to improve data integrity, user feedback, and maintainability
          across complex form interactions. Focused on performance optimizations
          and frontend best practices suitable for a production media platform
          with frequent content updates.
        </p>
        <img
          src="/portfolio/screenshot/tribun_komunitas_screenshoot.png"
          alt="Project Tribun Komunitas"
          className="object-contain max-w-[800px] max-h-[600px] aspect-square mx-auto my-4"
        />
      </div>

      <div
        id="tribun-academmy"
        className="flex flex-col col-start-1  col-span-3 lg:col-start-2 mb-8"
      >
        <h3 className="text-2xl font-semibold my-4 text-center">
          Tribun Academmy
        </h3>
        <span className="text-xl font-semibold my-2 text-center">2025</span>
        <span className="text-sm font-semibold my-2 px-0">
          Role: Frontend Engineer
        </span>
        <span className="text-sm font-semibold my-2 px-0">
          Tech Stack: Next.js, Zod, REST API integration (React Query)
        </span>
        <span className="text-sm font-semibold my-2 px-0">
          URL:{" "}
          <a
            href="https://akademi.tribunnews.com/"
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            https://akademi.tribunnews.com/
          </a>
        </span>
        <p className="px-0 my-2">
          Worked on the frontend of Tribun Akademi, a Learning Management System
          (LMS) within the Tribun Network ecosystem, delivering structured
          digital learning content such as courses and lessons. Built
          SEO-friendly and scalable interfaces using Next.js, focusing on
          performance and maintainability for content-heavy educational pages.
        </p>
        <p className="px-0 my-2">
          Developed reusable UI components for course listings, lesson
          navigation, and user interaction flows. Integrated frontend logic with
          backend APIs to handle dynamic data such as enrollments and learning
          progress. Applied schema-based validation using Zod to ensure
          consistent form validation and improve reliability across user input
          flows.
        </p>
        <img
          src="/portfolio/screenshot/tribun_akademi_screenshoot.png"
          alt="Project Tribun Akademi"
          className="object-contain max-w-[800px] max-h-[600px] aspect-square mx-auto my-4"
        />
      </div>
    </div>
  );
};

export default Portfolio;

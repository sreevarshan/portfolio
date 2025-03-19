import React from "react";

const WorkExperience = () => {
  return (
    <div className="bg-white dark:bg-gray-800">
      <h4 className="text-center text-3xl font-semibold text-gray-900 dark:text-white sm:text-3xl">
        Work Experience 💼
      </h4>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-18 lg:py-20">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic text-indigo-400">
                Aug 2024 - Present
              </time>
              <div className="text-lg text-indigo-400 font-black">EY</div>
              <div className="text-md font-black">Technical Lead</div>
              {/* <div className="text-sm font-black">
                Process Automation Application
              </div> */}
              🏦
              <time className="font-mono italic text-indigo-400">
                {" "}
                Fintech | <b>American Express</b> (contract)
              </time>
              <br /><br />
              <ul>
                <li>
                  Full-stack developer in a{" "}
                  <b>Core Java and React-based fintech application</b> which
                  customizes the existing features and exports them as shareable
                  plugins across business units
                </li><br />
                <li>
                  Gained hands-on experience in <b>React</b>, working on{" "}
                  <b>UI components</b> of feature registration, and request
                  handling part
                </li><br />
                <li>
                  Contributed to <b>backend schema design</b> with{" "}
                  <b>PostgreSQL</b>, ensuring efficient data structuring and
                  integration
                </li><br />
                <li>
                  Successfully{" "}
                  <b>led a team to develop and deliver the approval module</b>,
                  ensuring smooth workflow and collaboration
                </li><br />
                <li>
                  Actively Engaging with <b>leaderships and business teams</b>,
                  contributing to{" "}
                  <b>requirement analysis and weekly sprint planning</b> to
                  align development with business goals
                </li><br />
              </ul>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end md:mb-10">
              <time className="font-mono italic text-indigo-400">
                Dec 2020 - Aug 2024
              </time>
              <div className="text-lg text-indigo-400 font-black">
                Aspire Systems
              </div>
              <div className="text-md font-black">Senior Software Engineer</div>
              🛒
              <time className="font-mono italic text-indigo-400">
                {" "}
                e-Commerce | <b>myStore</b> [Oct 2022 - Aug 2024]
              </time>
              <br />
              <br />
              {/* <div className="text-sm font-black">e-Commerce Application [Oct 2022 - Aug 2024]</div> */}
              <ul>
                <li>
                  Worked on a{" "}
                  <b>
                    Java Spring Boot microservices-based e-commerce application
                  </b>{" "}
                  for a Middle East-based client(<b>STC channels - myStore</b>),
                  utilizing{" "}
                  <b>PostgreSQL and MongoDB</b> for efficient data management
                </li>
                <br />
                <li>
                  Maintained code quality and reliability by integrating with{" "}
                  <b>SonarQube</b>
                </li>
                <br />
                <li>
                  Managed the <b>notification service</b> efficiently using{" "}
                  <b>Apache Kafka</b> for real-time messaging
                </li>
                <br />
                <li>
                  Worked on the backend part of key features like{" "}
                  <b>
                    Wishlist, Notify Me (back-in-stock notifications), and
                    Preorder
                  </b>{" "}
                  to enhance user experience
                </li>
                <br />
                <li>
                  Gained experience in{" "}
                  <b>AI-driven development methodologies</b>, and completed the
                  tasks as per the estimated timelines by using the AI tools
                  effectively
                </li>
                <br />
                <li>
                  Implemented cron APIs across all microservices to optimize{" "}
                  <b>data management</b> and ensure compliance with the{" "}
                  <b>government’s data retention policy</b>
                </li>
                <br />
              </ul>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic text-indigo-400">
                <div className="text-sm font-black">
                  🛡 Insurance | <b>HDFC Life</b> [Feb 2022 - Oct 2022]
                </div>
              </time>
              <br />
              <ul>
                <li>
                  Worked on the backend of a <b>Core Java-based application</b>{" "}
                  with a <b>Maven build system</b> for a leading Indian
                  insurance provider <b>HDFC Life</b>
                </li>
                <br />
                <li>
                  Focused primarily on <b>critical production issue fixes</b>,
                  ensuring system stability and reliability.
                </li>
                <br />
                <li>
                  Contributed to key modules, including{" "}
                  <b>Bulk Policy Creation</b> and{" "}
                  <b>KYC (Know Your Customer)</b>
                </li>
                <br />
                <li>
                  Gained a deeper understanding of{" "}
                  <b>CI/CD processes, environment classifications</b>, and
                  worked with <b>Docker, Kubernetes, Jenkins, and Git</b> for
                  deployment and version control
                </li>
                <br />
                <li>
                  Attended <b>insurance domain-specific training</b> to better
                  understand business requirements and industry standards
                </li>
                <br />
              </ul>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end md:mb-10">
              📶
              <time className="font-mono italic text-indigo-400">
                {" "}
                Telecom | <b>STC e-Dealer</b> [Jun 2021 - Feb 2022]{" "}
              </time>
              <div className="text-lg font-black">Junior Software Engineer</div>
              <br />
              <ul>
                <li>
                  My first project in a{" "}
                  <b>
                    Java-Spring Boot microservices architecture - SIM
                    registration application
                  </b>{" "}
                  for <b>Middle East based Telecom Company (STC Channels)</b>
                </li>
                <br />
                <li>
                  Worked primarily on the backend, gaining hands-on experience
                  in microservices development
                </li>
                <br />
                <li>
                  Learned application security basics using{" "}
                  <b>Spring Security</b>
                </li>
                <br />
                <li>
                  Worked with <b>Spring Data JPA</b> for efficient{" "}
                  <b>database interactions and ORM mapping</b>
                </li>
                <br />
                <li>
                  Developed basic <b>REST APIs</b> and understood their role in
                  real-time applications
                </li>
                <br />
                <li>
                  Gained insights into how microservices communicate and
                  function in a production environment
                </li>
                <br />
              </ul>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic text-indigo-400">
                Java Developer Trainee [Dec 2020 - May 2021]
              </time>
              <div className="text-lg font-black">Trainee</div>
              <br />
              <ul className="sm:pl-5 list-none">
                <li>
                  Trained in <b>soft skills, campus-to-corporate transition</b>
                </li>
                <br />
                <li>
                  Gained expertise in{" "}
                  <b>
                    Web Development basics, Core Java, Spring Framework,
                    Hibernate, and Spring Boot
                  </b>
                </li>
                <br />
                <li>
                  Worked on <b>real-time live projects</b> during the pre-final
                  year of college
                </li>
                <br />
                <li>
                  Learned <b>industry best practices</b> and{" "}
                  <b>agile methodologies for software development</b>
                </li>
              </ul>
            </div>
          </li>
          {/* More timeline items */}
        </ul>
      </div>
    </div>
  );
};

export default WorkExperience;

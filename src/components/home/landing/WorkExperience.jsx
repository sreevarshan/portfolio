import React from "react";

// Inline SVG Icons for Badges
const BankIcon = () => (
  <svg className="w-4 h-4 mr-1 text-indigo-500 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const CartIcon = () => (
  <svg className="w-4 h-4 mr-1 text-emerald-500 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-4 h-4 mr-1 text-sky-500 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const SignalIcon = () => (
  <svg className="w-4 h-4 mr-1 text-amber-500 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a10.5 10.5 0 0114.14 0M1.34 8.344a16.5 16.5 0 0121.32 0" />
  </svg>
);

const CapIcon = () => (
  <svg className="w-4 h-4 mr-1 text-indigo-500 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
  </svg>
);

const WorkExperience = () => {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300 py-16 sm:py-18 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h4 className="text-center text-3xl font-semibold text-gray-900 dark:text-white sm:text-4xl mb-4">
          Work Experience 💼
        </h4>
        <p className="mt-2 text-center text-lg font-medium text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-16">
          A timeline of my professional journey, detailing roles, key contributions, and domain expertise.
        </p>

        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          {/* Item 1 - EY */}
          <li>
            <div className="timeline-middle z-10">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-950 border-4 border-indigo-500 text-indigo-600 dark:text-indigo-400">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse"></span>
              </div>
            </div>
            <div className="timeline-start mb-12 md:text-end">
              <div className="inline-block p-6 rounded-2xl bg-gray-50/50 dark:bg-gray-800/30 border border-gray-200/50 dark:border-gray-700/30 shadow-xs hover:shadow-md hover:border-indigo-500/20 dark:hover:border-indigo-500/30 hover:-translate-y-1 transition-all duration-300 max-w-2xl text-left md:text-right">
                <time className="font-mono italic text-indigo-600 dark:text-indigo-400 text-sm font-bold block mb-1">
                  Aug 2024 - Present
                </time>
                <h3 className="text-2xl text-indigo-600 dark:text-indigo-400 font-extrabold">EY</h3>
                <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">Technical Lead</h4>
                
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-150/40 dark:border-indigo-900/30 mb-4">
                  <BankIcon />
                  Fintech | <b>American Express</b> (contract)
                </div>

                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                  <li className="leading-relaxed">
                    Developed and maintained a <b>Core Java and React-based fintech application</b> enhancing feature customization and enabling seamless export of shareable plugins, resulting in a 20% reduction in development time across business units.
                  </li>
                  <li className="leading-relaxed">
                    Acquired hands-on experience in <b>React</b>, developing <b>UI components</b> for feature registration, and request handling.
                  </li>
                  <li className="leading-relaxed">
                    Contributed to <b>backend schema design</b> with <b>PostgreSQL</b>, ensuring efficient data structuring and integration.
                  </li>
                  <li className="leading-relaxed">
                    Successfully <b>led a team to develop and deliver the approval module</b>, ensuring smooth workflow and collaboration.
                  </li>
                  <li className="leading-relaxed">
                    Collaborated with <b>leaderships and business teams</b>, driving <b>requirement analysis and sprint planning</b> which resulted in a 15% improvement in <b>sprint goal alignment</b> and <b>faster feature deployment</b>.
                  </li>
                </ul>
              </div>
            </div>
            <hr className="bg-indigo-500/30 dark:bg-indigo-500/20" />
          </li>

          {/* Item 2 - Aspire Systems (myStore) */}
          <li>
            <hr className="bg-indigo-500/30 dark:bg-indigo-500/20" />
            <div className="timeline-middle z-10">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-950 border-4 border-emerald-500 text-emerald-600 dark:text-emerald-400">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              </div>
            </div>
            <div className="timeline-end mb-12">
              <div className="inline-block p-6 rounded-2xl bg-gray-50/50 dark:bg-gray-800/30 border border-gray-200/50 dark:border-gray-700/30 shadow-xs hover:shadow-md hover:border-emerald-500/20 dark:hover:border-emerald-500/30 hover:-translate-y-1 transition-all duration-300 max-w-2xl text-left">
                <time className="font-mono italic text-emerald-600 dark:text-emerald-400 text-sm font-bold block mb-1">
                  Dec 2020 - Aug 2024
                </time>
                <h3 className="text-2xl text-emerald-600 dark:text-emerald-400 font-extrabold">Aspire Systems</h3>
                <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">Senior Software Engineer</h4>
                
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border border-emerald-150/40 dark:border-emerald-900/30 mb-4">
                  <CartIcon />
                  e-Commerce | <b>myStore</b> [Oct 2022 - Aug 2024]
                </div>

                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                  <li className="leading-relaxed">
                    Worked on a <b>Java Spring Boot microservices-based e-commerce application</b> for a Middle East-based client (<b>STC channels - myStore</b>), utilizing <b>PostgreSQL and MongoDB</b> for efficient data management.
                  </li>
                  <li className="leading-relaxed">
                    Ensured <b>high code quality and reliability</b> by integrating <b>SonarQube</b>, reducing code vulnerabilities by 40% and improving maintainability.
                  </li>
                  <li className="leading-relaxed">
                    Managed the <b>notification service</b> efficiently using <b>Apache Kafka</b> for real-time messaging.
                  </li>
                  <li className="leading-relaxed">
                    Implemented and enhanced backend features such as <b>Wishlist, Notify Me (back-in-stock notifications), and Preorder-Cancellation</b>, leading to a <b>10% increase in order conversions</b> by improving customer flexibility.
                  </li>
                  <li className="leading-relaxed">
                    Developed expertise in <b>AI-driven development methodologies</b>, effectively utilizing AI tools to complete tasks within estimated timelines.
                  </li>
                  <li className="leading-relaxed">
                    Implemented cron APIs across all microservices, optimizing <b>data management</b> and ensuring compliance with the <b>government’s data retention policy</b>.
                  </li>
                </ul>
              </div>
            </div>
            <hr className="bg-emerald-500/30 dark:bg-emerald-500/20" />
          </li>

          {/* Item 3 - Aspire Systems (HDFC Life) */}
          <li>
            <hr className="bg-emerald-500/30 dark:bg-emerald-500/20" />
            <div className="timeline-middle z-10">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-sky-100 dark:bg-sky-950 border-4 border-sky-500 text-sky-600 dark:text-sky-400">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-500"></span>
              </div>
            </div>
            <div className="timeline-start mb-12 md:text-end">
              <div className="inline-block p-6 rounded-2xl bg-gray-50/50 dark:bg-gray-800/30 border border-gray-200/50 dark:border-gray-700/30 shadow-xs hover:shadow-md hover:border-sky-500/20 dark:hover:border-sky-500/30 hover:-translate-y-1 transition-all duration-300 max-w-2xl text-left md:text-right">
                <time className="font-mono italic text-sky-600 dark:text-sky-400 text-sm font-bold block mb-1">
                  Feb 2022 - Oct 2022
                </time>
                <h3 className="text-2xl text-sky-600 dark:text-sky-400 font-extrabold">Aspire Systems</h3>
                <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">Senior Software Engineer</h4>
                
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 border border-sky-150/40 dark:border-sky-900/30 mb-4">
                  <ShieldIcon />
                  Insurance | <b>HDFC Life</b>
                </div>

                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                  <li className="leading-relaxed">
                    Worked on the backend of a <b>Core Java-based application</b> with a <b>Maven build system</b> for a leading Indian insurance provider <b>HDFC Life</b>.
                  </li>
                  <li className="leading-relaxed">
                    Focused primarily on <b>critical production issue fixes</b>, ensuring system stability and reliability.
                  </li>
                  <li className="leading-relaxed">
                    Contributed to key modules, including <b>Bulk Policy Creation</b> and <b>KYC (Know Your Customer)</b>, streamlining policy issuance and improving verification efficiency by 20%.
                  </li>
                  <li className="leading-relaxed">
                    Deepened understanding of <b>CI/CD processes, environment classifications</b>, and worked with <b>Docker, Kubernetes, Jenkins, and Git</b> for deployment and version control.
                  </li>
                  <li className="leading-relaxed">
                    Completed <b>insurance domain-specific training</b>, enabling better alignment with business requirements.
                  </li>
                </ul>
              </div>
            </div>
            <hr className="bg-sky-500/30 dark:bg-sky-500/20" />
          </li>

          {/* Item 4 - Aspire Systems (STC e-Dealer) */}
          <li>
            <hr className="bg-sky-500/30 dark:bg-sky-500/20" />
            <div className="timeline-middle z-10">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-950 border-4 border-amber-500 text-amber-600 dark:text-amber-400">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
              </div>
            </div>
            <div className="timeline-end mb-12">
              <div className="inline-block p-6 rounded-2xl bg-gray-50/50 dark:bg-gray-800/30 border border-gray-200/50 dark:border-gray-700/30 shadow-xs hover:shadow-md hover:border-amber-500/20 dark:hover:border-amber-500/30 hover:-translate-y-1 transition-all duration-300 max-w-2xl text-left">
                <time className="font-mono italic text-amber-600 dark:text-amber-400 text-sm font-bold block mb-1">
                  Jun 2021 - Feb 2022
                </time>
                <h3 className="text-2xl text-amber-600 dark:text-amber-400 font-extrabold">Aspire Systems</h3>
                <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">Junior Software Engineer</h4>
                
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 border border-amber-150/40 dark:border-amber-900/30 mb-4">
                  <SignalIcon />
                  Telecom | <b>STC e-Dealer</b>
                </div>

                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                  <li className="leading-relaxed">
                    My first project in a <b>Java-Spring Boot microservices architecture - SIM registration application</b> for <b>Middle East based Telecom Company (STC Channels)</b>, improving customer and dealer onboarding efficiency.
                  </li>
                  <li className="leading-relaxed">
                    Developed <b>SIM dealer registration</b> backend features in a <b>microservices architecture</b>, enhancing performance by 30%.
                  </li>
                  <li className="leading-relaxed">
                    Implemented foundational security measures using <b>Spring Security</b>, strengthening authentication and authorization.
                  </li>
                  <li className="leading-relaxed">
                    Optimized database interactions and ORM mapping with <b>Spring Data JPA</b>.
                  </li>
                  <li className="leading-relaxed">
                    Developed basic <b>REST APIs</b> and understood their role in real-time applications.
                  </li>
                </ul>
              </div>
            </div>
            <hr className="bg-amber-500/30 dark:bg-amber-500/20" />
          </li>

          {/* Item 5 - Trainee */}
          <li>
            <hr className="bg-amber-500/30 dark:bg-amber-500/20" />
            <div className="timeline-middle z-10">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-950 border-4 border-indigo-500 text-indigo-600 dark:text-indigo-400">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
              </div>
            </div>
            <div className="timeline-start mb-12 md:text-end">
              <div className="inline-block p-6 rounded-2xl bg-gray-50/50 dark:bg-gray-800/30 border border-gray-200/50 dark:border-gray-700/30 shadow-xs hover:shadow-md hover:border-indigo-500/20 dark:hover:border-indigo-500/30 hover:-translate-y-1 transition-all duration-300 max-w-2xl text-left md:text-right">
                <time className="font-mono italic text-indigo-600 dark:text-indigo-400 text-sm font-bold block mb-1">
                  Dec 2020 - May 2021
                </time>
                <h3 className="text-2xl text-indigo-600 dark:text-indigo-400 font-extrabold">Aspire Systems</h3>
                <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">Trainee</h4>
                
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-150/40 dark:border-indigo-900/30 mb-4">
                  <CapIcon />
                  Java Developer Trainee
                </div>

                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                  <li className="leading-relaxed">
                    Trained in <b>soft skills, campus-to-corporate transition</b>.
                  </li>
                  <li className="leading-relaxed">
                    Gained expertise in <b>Web Development basics, Core Java, Spring Framework, Hibernate, and Spring Boot</b>.
                  </li>
                  <li className="leading-relaxed">
                    Worked on <b>real-time live projects</b> during the pre-final year of college.
                  </li>
                  <li className="leading-relaxed">
                    Learned <b>industry best practices</b> and <b>agile methodologies for software development</b>.
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WorkExperience;

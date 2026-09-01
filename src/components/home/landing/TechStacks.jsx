export default function TechStack() {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-18 lg:py-20">
        <h4 className="text-center text-3xl font-semibold text-gray-900 dark:text-white sm:text-3xl">
          Tech Stack I Work With
        </h4>
        <p className="mt-6 text-center text-lg font-medium text-gray-600 dark:text-gray-400 sm:text-xl max-w-3xl mx-auto">
          The technologies I work with daily empower me to build efficient and
          scalable solutions. As a developer in the ever-evolving AI era, I
          believe in adaptability and continuous learning rather than being
          confined to a single tech stack.
        </p>
        <div className="mx-auto mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center">
          {[
            { file: "Java.svg", name: "Java" },
            { file: "Springboot.svg", name: "Spring Boot" },
            { file: "react.svg", name: "React" },
            { file: "postgres.svg", name: "PostgreSQL" },
            { file: "mongo.svg", name: "MongoDB" },
            { file: "kafka.svg", name: "Apache Kafka" },
          ].map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-gray-50/50 dark:bg-gray-800/30 border border-gray-200/50 dark:border-gray-700/30 shadow-xs hover:shadow-md hover:border-indigo-500/30 dark:hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="h-14 flex items-center justify-center">
                <img
                  alt={tech.name}
                  src={`/tech_stack/logos/${tech.file}`}
                  className="max-h-12 w-auto object-contain dark:brightness-0 dark:invert transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <span className="mt-4 text-xs font-bold tracking-wider uppercase text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


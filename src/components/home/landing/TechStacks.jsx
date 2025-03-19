export default function TechStack() {
  return (
    <div className="bg-white dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-18 lg:py-20">
        <h4 className="text-center text-3xl font-semibold text-gray-900 dark:text-white sm:text-3xl">
          Tech Stack I Work With
        </h4>
        <p className="mt-6 text-center text-lg font-medium text-gray-600 dark:text-gray-400 sm:text-xl">
          The technologies I work with daily empower me to build efficient and
          scalable solutions. As a developer in the ever-evolving AI era, I
          believe in adaptability and continuous learning rather than being
          confined to a single tech stack. I embrace new tools and frameworks,
          ensuring I stay ahead in a rapidly changing tech landscape.
        </p>
        <div className="mx-auto mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 items-center gap-x-8 gap-y-12">
          {[
            "Java.svg",
            "Springboot.svg",
            "react.svg",
            "postgres.svg",
            "mongo.svg",
            "kafka.svg",
          ].map((tech, index) => (
            <img
              key={index}
              alt={tech.replace(".svg", "")}
              src={`/tech_stack/logos/${tech}`}
              width={158}
              height={48}
              className="max-h-12 w-full object-contain dark:invert"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

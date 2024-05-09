import Link from "next/link";

interface WalkthroughProps {
  data: {
    heading: string;
    description: string;
    step: Step[];
  };
}

interface Step {
  id: string;
  number: string;
  title: string;
  description: string;
  media: string;
  showLink: boolean;
  newTab: boolean;
  url: string;
  text: string;
}

function StepComponent({ number, title, description, showLink, newTab, url, text }: Step) {
  return (
    <div className="flex items-center gap-4 p-10 rounded-lg shadow-lg bg-gray-100 mr-4">
      <div className="flex-shrink-0 w-16 h-16 bg-red-400 rounded-full flex items-center justify-center">
        <span className="text-2xl font-semibold text-gray-700">{number}</span>
      </div>
      <div className="flex flex-col justify-center flex-grow"> {/* Cambiado a flex-grow */}
        <h3 className="text-lg font-semibold text-gray-800 text-center mb-2">{title}</h3>
        <p className="text-gray-600 text-center mb-4">{description}</p>
        {showLink && (
          <div className="text-center">
            <Link
              href={url}
              target={newTab ? "_blank" : "_self"}
              className="text-sm font-semibold text-blue-500 hover:underline"
            >
              {text}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}





export default function Walkthrough({ data }: WalkthroughProps) {
  return (
    <section className="bg-gray-50 dark:text-black-100 py-12 lg:py-24">
      <div className="container mx-auto py-4 space-y-4 text-center">
        <h2 className="text-5xl font-bold">{data.heading}</h2>
        <p className="text-lg text-gray-700">{data.description}</p>
        <div className="mt-8 space-y-12">
          {data.step.map((step: Step, index: number) => (
            <StepComponent key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}

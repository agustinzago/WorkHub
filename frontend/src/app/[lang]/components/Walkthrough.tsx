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
  title: string;
  description: string;
  media: string;
  showLink: boolean;
  newTab: boolean;
  url: string;
  text: string;
}

function StepComponent({ title, description }: Step) {
    return (
      <div className="w-full flex items-center justify-center">
        <div className="max-w-sm mx-auto">
          {/* <img src={media} alt={title} className="w-full" /> */}
          <h3 className="text-lg font-semibold mt-4">{title}</h3>
          <p className="mt-2">{description}</p>
        </div>
    </div>
    );
}


export default function Walkthrough({ data }: WalkthroughProps) {
  console.log({data: JSON.stringify(data)})
  return (
    <section className="bg-gray-50 dark-text-black-100 m:py-12 lg:py-24">
      <div className="container mx-auto py-4 space-y-2 text-center">
        <h2 className="text-5xl font-bold">{data.heading}</h2>
        <p className="dark-text-black-400">{data.description}</p>
      </div>
      <div className="container mx-auto my-6 grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.step.map((step: Step, index: number) => (
          <StepComponent key={index} {...step} />
        ))}
      </div>
    </section>
  );
}

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
}

function Step({ title, description }: Step) {
    return (
        <div>
          <p>{title}</p>
          <p>{description}</p>
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
          <Step key={index} {...step} />
        ))}
      </div>
    </section>
  );
}

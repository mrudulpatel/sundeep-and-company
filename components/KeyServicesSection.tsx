import KeyServicesCard from "./KeyServicesCard";

const KeyServicesSection = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16 flex flex-col items-center">
      <div className="max-w-2xl text-center mb-12">
        <h2 className="text-4xl font-semibold mb-4">Our Key Services</h2>
        <p className="text-lg text-gray-600">
          We offer a comprehensive range of construction chemicals and building
          materials, ensuring quality and reliability for every project
          milestone.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <KeyServicesCard
          title="Chemical Solutions"
          description="Enhance your construction projects with our premium chemical solutions. We offer a wide range of high-quality products for superior performance and lasting results."
        />
        <KeyServicesCard
          title="Building Materials"
          description="Discover our extensive selection of top-grade building materials, sourced from trusted manufacturers. We provide the essential components for robust and sustainable construction projects."
        />
        <KeyServicesCard
          title="Admixture Solutions"
          description="Optimize your concrete mixes with our advanced admixture solutions. Achieve enhanced workability, durability, and strength, tailored to meet the specific requirements of your project."
        />
        <KeyServicesCard
          title="Waterproofing Systems"
          description="Protect your structures from water damage with our reliable waterproofing systems. We offer a comprehensive range of solutions to ensure long-lasting protection and peace of mind."
        />
        <KeyServicesCard
          title="Repair Products"
          description="We offer repair products for concrete restoration, crack sealing, and structural rehabilitation, ensuring durability, strength, and long-term performance."
        />
        <KeyServicesCard
          title="Flooring Solutions"
          description="Enhance spaces with our durable, stylish flooring solutions. Ideal for residential, commercial, and industrial use, ensuring long-lasting beauty and performance."
        />
      </div>
    </div>
  );
};

export default KeyServicesSection;

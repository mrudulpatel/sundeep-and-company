import React from "react";

const TestimonialSection = () => {
  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-3xl font-semibold mb-8">
        What Our Clients Say About Us
      </h2>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
        <img
          src="https://res.cloudinary.com/drihmlyza/image/upload/v1742724800/ui8mcqq1pjiuld14r0ej.jpg"
          alt="Construction Workers"
          className="w-full h-96 object-cover rounded-t-2xl"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-4">
            Exceptional products and outstanding customer service
          </h3>
          <p className="text-gray-600 mb-6">
            Sundeep & Company has consistently provided us with high-quality
            construction chemicals and materials. Their team is knowledgeable,
            responsive, and always goes the extra mile to ensure our projects
            succeed. Highly recommended!
          </p>
          <div className="flex items-center justify-center gap-4">
            <img
              src="https://res.cloudinary.com/drihmlyza/image/upload/v1742724800/vxfwyclbs4vhtrxlwsni.jpg"
              alt="Amit Sharma"
              className="w-12 h-12 rounded-full"
            />
            <div className="text-left">
              <h4 className="font-semibold">Amit Sharma</h4>
              <p className="text-sm text-gray-500">Civil Engineer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

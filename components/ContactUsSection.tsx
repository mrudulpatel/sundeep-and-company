"use client";

import Link from "next/link";
import React from "react";

const ContactSection = () => {
  return (
    <section id="contact-us" className="container mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 text-center p-5">
        Contact Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center">
        {/* Map Section */}
        <div className="w-full h-[450px]">
          <div style={{ width: "100%" }}>
            <iframe
              width="100%"
              height="450"
              style={{ border: 0 }}
              src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=524/525,%20Jawaharlal%20Nehru%20Rd,%20opp.%20Bafna%20Auto%20Tata%20Showroom,%20Mahatma%20Phule%20Peth,%20Swargate,%20Pune,%20Maharashtra%20411042+(Sundeep%20&amp;%20Company)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              {/* <a href="https://www.gps.ie/collections/drones/" /> */}
            </iframe>
          </div>
        </div>

        {/* Contact Details Section */}
        <div className="p-2 space-y-2">
          <p className="text-gray-700">
            <strong>Phone:</strong>{" "}
            <Link
              target="_blank"
              href="tel:+919420864864"
              className="text-gray-600 hover:text-gray-900"
            >
              +91 9420864864
            </Link>
            {" / "}
            <Link
              target="_blank"
              href="tel:+919423529900"
              className="text-gray-600 hover:text-gray-900"
            >
              +91 9423529900
            </Link>
          </p>
          <p className="text-gray-700">
            <strong>Telephone:</strong>{" "}
            <Link
              target="_blank"
              href="tel:02026451590"
              className="text-gray-600 hover:text-gray-900"
            >
              020-26451590
            </Link>
          </p>
          <p className="text-gray-700">
            <strong>Email:</strong>{" "}
            <Link
              target="_blank"
              href="mailto:ncpatel25@gmail.com"
              className="text-gray-600 hover:text-gray-900"
            >
              ncpatel25@gmail.com
            </Link>
          </p>
          <p className="text-gray-700">
            <strong>Address:</strong> 524/525, Jawaharlal Nehru Rd, opp. Bafna
            Auto Tata Showroom, Mahatma Phule Peth, Swargate, Pune, Maharashtra
            411042
          </p>
          <p className="text-center p-5">
            <strong>Send your enquiries and requirements below</strong>
          </p>
          <Link
            target="_blank"
            href="https://api.whatsapp.com/send?phone=919420864864"
          >
            <button className="p-4 rounded-full w-full bg-green-500 hover:bg-green-700 text-white font-semibold">
              Chat on WhatsApp
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import Image from "next/image";
import AboutIcon from "./AboutIcon";

const About = () => {
  return (
    <div className="flex relative items-center justify-between min-h-[550px]">
      <div className="hidden md:flex min-h-[350px] size-full  relative max-w-[450px] max-h-[600px]">
        <Image
          objectFit="cover"
          className="-mt-5"
          fill
          style={{ borderRadius: "0px 32px 32px 0px" }}
          alt="about"
          src={
            "https://res.cloudinary.com/drihmlyza/image/upload/v1742724800/rsvabuezzchhbsrl7dtb.jpg"
          }
        />
      </div>
      <div className="flex flex-col items-center justify-center max-w-fit">
        <AboutIcon />
        <p
          className="text-[40px] md:text-[40px] font-normal md:leading-[50px]"
          style={{ padding: "15px 0px 20px 0px" }}
        >
          About Our Company
        </p>
        <p
          className="text-[16px] font-normal leading-[26px] text-center"
          style={{ padding: "0px 0px 30px 0px" }}
        >
          Sundeep & Company is a leading dealer and distributor of construction
          chemicals and building materials in Pune, Maharashtra.
        </p>
      </div>
      <div className="hidden md:flex min-h-[350px] size-full relative max-w-[450px] max-h-[600px]">
        <Image
          objectFit="cover"
          className="absolute bottom-0 mt-10"
          fill
          style={{ borderRadius: "32px 0px 0px 32px" }}
          alt="about 2"
          src={
            "https://res.cloudinary.com/drihmlyza/image/upload/v1742724800/uxcqiurbyfyp4xdj9pgv.jpg"
          }
        />
      </div>
    </div>
  );
};

export default About;

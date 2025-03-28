import Link from "next/link";

const ProductSection = () => {
  return (
    <>
      <div
        data-type="grid-layout"
        id="Div0krQ"
        data-clientid="Div0krQ"
        data-displayname="Flex - Horizontal"
        className="react-grid-item undefined cd-padding"
        style={{
          display: "flex",
          margin: "0px auto",
          height: "auto",
          width: "100%",
          maxWidth: "1980px",
          position: "relative",
          padding: "60px 16px 60px 16px",
          flexDirection: "column",
          alignItems: "center",
          columnGap: "0px",
          rowGap: "0px",
          backgroundImage:
            "linear-gradient(270deg,rgb(0, 0, 0) 0%,rgba(0, 0, 0, 0) 0%,rgba(0, 0, 0, 0.6) 70.89999999999999%), url(https://res.cloudinary.com/drihmlyza/image/upload/v1742724800/tmejzjhqujrhzzdhmtjt.jpg)",
          backgroundPosition: "50% 50%, 50% 50%",
          backgroundSize: "cover, cover",
          backgroundRepeat: "no-repeat no-repeat, no-repeat no-repeat",
          backgroundAttachment: "scroll, scroll",
          backgroundClip: "border-box, border-box",
          backgroundOrigin: "padding-box, padding-box",
          transform:
            "rotate(0deg) scale(1) translateX(0px) translateY(0px) translateZ(0px)",
        }}
      >
        <div
          data-type="grid-layout"
          id="DivVqnX"
          data-clientid="DivVqnX"
          data-displayname="Flex - Horizontal"
          className="react-grid-item false cd-padding"
          style={{
            display: "flex",
            marginTop: "0px",
            marginLeft: "0px",
            height: "auto",
            width: "100%",
            maxWidth: "1300px",
            minHeight: "300px",
            marginBottom: "0px",
            position: "relative",
            padding: "100px 100px 100px 100px",
            flexDirection: "row",
            justifyContent: "space-between",
            columnGap: "100px",
            rowGap: "0px",
            transform:
              "rotate(0deg) scale(1) translateX(0px) translateY(0px) translateZ(0px)",
            borderRadius: "32px 32px 32px 32px",
          }}
        >
          <div
            data-type="grid-layout"
            id="Div7dy0"
            data-clientid="Div7dy0"
            data-displayname="Flex - Horizontal"
            className="react-grid-item false cd-padding"
            style={{
              display: "flex",
              marginTop: "0px",
              marginLeft: "0px",
              height: "auto",
              width: "100%",
              maxWidth: "550px",
              marginBottom: "0px",
              position: "relative",
              padding: "0px 0px 0px 0px",
              flexDirection: "column",
              columnGap: "0px",
              rowGap: "0px",
            }}
          >
            <span
              id="SpansmmT"
              data-clientid="SpansmmT"
              data-displayname="Text"
              className="react-grid-item false"
              style={{
                display: "block",
                zIndex: 1,
                width: "fit-content",
                height: "fit-content",
                margin: "0px",
                minHeight: "10px",
                minWidth: "16px",
                position: "relative",
                fontSize: "40px",
                fontWeight: "400",
                color: "#ffffffff",
                letterSpacing: "0px",
                lineHeight: "50px",
                padding: "15px 0px 20px 0px",
                textAlign: "left",
                opacity: "100%",
              }}
            >
              <p>Quality. Reliability.</p>
            </span>
            <span
              id="Span9YQP"
              data-clientid="Span9YQP"
              data-displayname="Text"
              className="react-grid-item false"
              style={{
                display: "block",
                zIndex: 1,
                width: "fit-content",
                height: "fit-content",
                margin: "0px",
                minHeight: "10px",
                minWidth: "16px",
                position: "relative",
                fontSize: "16px",
                fontWeight: "400",
                color: "#ffffffff",
                letterSpacing: "0px",
                lineHeight: "26px",
                padding: "0px 0px 30px 0px",
                textAlign: "left",
                opacity: "100%",
              }}
            >
              <p>
                We provide top-quality construction chemicals and building
                materials, ensuring durability and efficiency for your projects
                in Pune.
              </p>
            </span>
            <button className=" bg-[#0b3d9e] transition duration-100 ease-in rounded px-10 hover:bg-[#032E61] p-[10px] min-h-[50px] text-white w-fit">
              <Link href={"/products"}>View All Products</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSection;

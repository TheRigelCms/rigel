import Link from "next/link";
import Lottie from "lottie-react";
import alert from "../public/lotties/laptop-working.json";

const AuthMock = ({ descriptionA, descriptionB }) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-2/5 blue-gradient pt-20 hidden lg:block">
      <Link href="/">
        <h1 className="text-xl text-center text-white font-bold mb-10 cursor-pointer">
          RIGEL CMS
        </h1>
      </Link>

      <div className="flex justify-center">
        <Lottie
          className="mb-20"
          autoplay={true}
          loop={true}
          animationData={alert}
          style={{ width: "30rem" }}
        />
      </div>

      <h3 className="text-white text-center">{descriptionA}</h3>
      <h3 className="text-white text-center">{descriptionB}</h3>
    </div>
  );
};

export default AuthMock;

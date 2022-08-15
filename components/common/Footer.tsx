import Image from "next/image";

const Footer = () => {
  return (
    <div className="relative flex w-full items-center justify-center border border-[#EBEBEB] bg-[#FCFCFC] py-[92px]">
      <div className="left-[10%] hidden items-center md:absolute md:flex">
        <Image
          src="/images/footer/team-logo-gray.svg"
          alt="logo"
          width={137}
          height={49}
        />
      </div>

      <div className="text-center">© by DEVENGERS All Rights Reserved.</div>
    </div>
  );
};
export default Footer;

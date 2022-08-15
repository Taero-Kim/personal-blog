import ChatIcon from "assets/ChatIcon";
import EmailIcon from "assets/EmailIcon";
import GithubIcon from "assets/GithubIcon";

const Footer = () => {
  return (
    <div className="mt-auto flex w-full flex-col items-center justify-center space-y-2 border border-[#EBEBEB] bg-[#FCFCFC] py-[40px] dark:border-darkBg dark:bg-darkBg">
      <div className="flex items-center space-x-3">
        <EmailIcon />
        <GithubIcon />
        <ChatIcon />
      </div>
      <div className="text-center dark:text-darkText">© 2022. Taero Blog</div>
    </div>
  );
};
export default Footer;

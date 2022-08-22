const About = () => {
  return (
    <div className="mx-auto max-w-[800px] py-8 px-4">
      <div className="mb-4 flex items-center space-x-4">
        <div className="h-[100px] w-[100px] rounded-full bg-transparent">
          <img src="/images/salad.png" alt="" />
        </div>
        <div className="flex flex-col space-y-2">
          <div className="text-xl font-bold text-black60 dark:text-darkText">
            태로샐러드
          </div>
          <div className="text-black40 dark:text-darkPText">주니어 개발자</div>
        </div>
      </div>
      <div className="h-[2px] bg-[#E9ECEF] dark:bg-gray-400"></div>
      <div className="pt-4 text-black40 dark:text-darkPText">
        개발 공부, 기획, 인사이트 등을 정리해 나가는 공간입니다. <br />
        좋은 개발자로 성장하고 싶은 주니어 개발자입니다.
      </div>

      <div className="py-4 text-black40 dark:text-darkPText">
        본 블로그는 NEXT.js와 React를 활용하여 직접 제작하였습니다. <br />
      </div>

      <div className="text-black40 dark:text-darkPText">
        포스팅 내용에 궁금한 점이나 제가 올린 포스팅 중 정정해야 할 내용 등이
        있을 경우 <br />
        언제든지 <span className="text-[#FF5100]">페이지 하단의 아이콘</span>을
        통해 메일이나 오픈채팅으로 문의 부탁드립니다.
      </div>
    </div>
  );
};

export default About;

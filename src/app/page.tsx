import Image from "next/image";
import GeneralInfo from "../../service/resume_general_info_service.json";
import PortfolioInfo from "../../service/resume_portfolio_service.json";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className=""
          src={GeneralInfo.image_url}
          alt="자기소개 이미지"
          width={180}
          height={38}
          priority
        />
        <ul className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">이름 : {GeneralInfo.name}</li>
          <li className="mb-2 tracking-[-.01em]">나이 : {GeneralInfo.age}</li>
          <li className="mb-2 tracking-[-.01em]">전공 유무 : {GeneralInfo.isMajor ? "O" : "X"}</li>
          <li className="mb-2 tracking-[-.01em] ">
            Github :{" "}
            <a className="hover:font-bold hover:opacity-50" href={GeneralInfo.github}>
              MinJaeSon
            </a>
          </li>
          <li className="tracking-[-.01em]">프로젝트 : {PortfolioInfo.project_info} "{PortfolioInfo.project_title}"</li>
        </ul>
      </main>
      <footer className="flex flex-col gap-[24px] items-center justify-center">
        
      </footer>
    </div>
  );
}

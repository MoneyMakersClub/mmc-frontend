import { useState } from "react";
import img_template from "../../assets/recordingPage/img-template.svg";
import CompleteButton from "./CompleteButton";
import RegisterInput from "./RegisterInput";
const DirectRegister = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState("");
  const [publisher, setPublisher] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };
  const handlePages = (e) => {
    setPages(e.target.value);
  };
  const handlePublisher = (e) => {
    setPublisher(e.target.value);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center pb-[2.15rem]">
        <div>
          <img
            className="mt-[2.77rem] mb-[2rem]"
            src={img_template}
            alt="img-template"
          />
        </div>
        <div className="flex flex-col gap-[2rem] mb-[1.23rem]">
          <RegisterInput
            handleInputValue={handleTitle}
            inputValue={title}
            placeholder="제목"
          />
          <RegisterInput
            handleInputValue={handleAuthor}
            inputValue={author}
            placeholder="저자 명"
          />
          <RegisterInput
            handleInputValue={handlePages}
            inputValue={pages}
            placeholder="페이지 수(선택)"
          />
          <RegisterInput
            handleInputValue={handlePublisher}
            inputValue={publisher}
            placeholder="출판사(선택)"
          />
        </div>
        <div className="flex justify-center items-center w-[24.5625rem] h-[7rem] mb-[0.94rem] bg-gray-50 text-b2 text-gray-400 text-center">
          직접 등록한 책에 대해서는 별점 및 한줄평과
          <br /> 독서 기록 모두 나만 남길 수 있어요.
        </div>
        <CompleteButton complete={!!(title && author)} />
      </div>
    </>
  );
};
export default DirectRegister;
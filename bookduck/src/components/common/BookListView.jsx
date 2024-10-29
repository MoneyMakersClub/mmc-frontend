import BookListViewDropdown from "./BookListViewDropdown";
import coverEx from "../../assets/common/book-cover-ex.svg";
import menuBar from "../../assets/common/menu-bar.svg";
import emptyImage from "../../assets/recordingPage/rating-empty.svg";
import filledImage from "../../assets/recordingPage/rating-filled.svg";
import { useState } from "react";
//edit이 false면 편집 기능 없이 "읽고 있어요" 상태인 책 확인 in 기록할 책 선택 페이지
//edit이 true, dropdown도 true면 상태 선택 가능한 드롭다운 표시
const BookListView = ({
  register = false,
  bookTitle = "책제목",
  author = "지은이",
  edit = true,
  dropdown = true,
  dropdownActive = true,
  handleOnClick,
}) => {
  const [rating, setRating] = useState(0);
  return (
    <div
      onClick={handleOnClick}
      className="flex items-center justify-between w-full h-[7.75rem] pb-[0.5rem] pt-[0.5rem] cursor-pointer"
    >
      <div className="flex gap-[0.75rem] items-center w-[15.75rem] h-[6.75rem]">
        <img src={coverEx} alt="coverEx" />
        <div className="flex flex-col gap-1">
          {register && (
            <div className=" text-c1 text-orange-400">직접 등록한 책</div>
          )}
          <div className="text-b1 text-gray-800">{bookTitle}</div>
          <div className=" text-b1 text-gray-500">{author}</div>
          <div className="flex mt-[0.5rem]">
            {[...Array(5)].map((_, index) => (
              <div key={index}>
                <img
                  key={index}
                  src={index <= rating ? filledImage : emptyImage} // 채워진 이미지 또는 비워진 이미지 표시
                  alt="rating"
                  className="" // 이미지 크기 조절
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {edit ? (
        !dropdown ? (
          <div className="w-[1.5rem] h-[1.5rem] cursor-pointer">
            <img src={menuBar} alt="menuBar" />
          </div>
        ) : (
          <BookListViewDropdown dropdownActive={dropdownActive} />
        )
      ) : (
        <></>
      )}
    </div>
  );
};
export default BookListView;

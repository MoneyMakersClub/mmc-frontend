import cover from "../../assets/bookinfoPage/cover.svg";
import down from "../../assets/common/down-arrow.svg";

const BookInfo = ({ isMe = "default" }) => {
  // 기본으로 등록되어 있는 책: default 내가 직접 등록한 책: me 타유저가 직접 등록한 책: other
  return (
    <div className="flex gap-4 w-[361px]">
      <img
        className="w-[112px] h-[156px] rounded bg-cover bg-no-repeat shadow-custom"
        src={cover}
        alt="Cover"
      />
      <div className="flex flex-col justify-between pt-1 w-full">
        <div className="flex flex-col gap-1">
          <div className="text-t2 font-semibold max-h-[56px]">책 제목</div>
          <div className="text-b2 text-gray-500 h-6">지은이</div>
          <div className="flex items-center gap-1 text-b2 text-gray-500 h-6">
            <div>출판사</div>
            <div>・</div>
            <div>2024</div>
          </div>
        </div>
        {isMe === "other" ? (
          <div className="text-b2 text-orange-400">
            유저닉네임님이 등록한 책
          </div>
        ) : (
          <div className="flex justify-between items-center">
            {isMe === "default" ? (
              <div className="flex items-center gap-1 text-b2 text-gray-400">
                <div>기본평점</div>
                <div>4.3</div>
              </div>
            ) : (
              <div className="text-b2 text-orange-400">내가 등록한 책</div>
            )}

            <div className="flex p-1.5 text-btn4 text-gray-500 ">
              읽고 싶어요
              <img src={down} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default BookInfo;

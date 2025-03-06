import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header3 from "../../components/common/Header3";
import BookInfo from "../../components/BookInfoPage/BookInfo";
import TabBarComponent from "../../components/common/TabBarComponent";
import InfoView from "../../components/BookInfoPage/InfoView";
import ArchiveView from "../../components/BookInfoPage/ArchiveView";
import FloatingRecordButton from "../../components/common/FloatingRecordButton";
import MyComment from "../../components/BookInfoPage/MyComment";
import { getBookInfo, getOneLineRatingsInfo } from "../../api/bookinfo";

const BookInfoPage = () => {
  const { bookinfoId } = useParams();
  const [activeTab, setActiveTab] = useState("책 정보");
  const [RatingListData, setRatingListData] = useState(null);
  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getBookInfo({ bookinfoId });
        const res2 = await getOneLineRatingsInfo({ bookinfoId });
        console.log("조회성공: ", res);
        setBookData(res);
        setRatingListData(res2);
        console.log("조회2 성공: ", res2);
      } catch (err) {
        console.error("오류 발생: ", err);
      }
    };
    fetchData();
  }, [bookinfoId]);

  return (
    <div className="w-full w-max-[64rem]">
      <Header3 title="" />
      <div className="flex flex-col mt-2 gap-5">
        <div className="flex flex-col gap-2 px-4">
          <div className="flex flex-col gap-5">
            <BookInfo bookData={bookData} />
            <MyComment bookData={bookData} />
          </div>
        </div>
        <div className="flex flex-col mt-2 gap-4">
          <TabBarComponent
            tabs={["책 정보", "기록"]}
            activeTab={activeTab}
            onTabClick={setActiveTab}
            size=""
          />

          {activeTab === "책 정보" && (
            <InfoView
              bookData={bookData?.bookInfoDetailDto}
              ratingData={RatingListData}
            />
          )}
          {activeTab === "기록" && <ArchiveView bookinfoId={bookinfoId} />}
          <div className="fixed bottom-[2.625rem] flex justify-end w-[24.5625rem] cursor-pointer">
            <FloatingRecordButton />
          </div>
        </div>
      </div>
    </div>
  );
};
export default BookInfoPage;

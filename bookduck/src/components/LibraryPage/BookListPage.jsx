import { useState } from "react";
import down from "../../assets/common/down.svg";
import RoundedTabComponent from "../common/RoundedTabComponent";
import BookListView from "../common/BookListView";
import BottomNavbar from "../common/BottomNavbar";
import BookComponent from "../SearchPage/BookComponent";
import cover_img_ex from "../../assets/libraryPage/cover-img-ex.svg";
import BottomSheetModal from "../common/BottomSheetModal";
import BottomSheetMenuComponent from "../common/BottomSheetMenuComponent";
import Divider1 from "../common/Divider1";
import Divider2 from "../common/Divider2";
import ListBottomSheet from "../common/ListBottomSheet";

const BookListPage = ({ view }) => {
  const [sort, setSort] = useState("최신순");
  const [tab, setTab] = useState([]);
  const [sortingBottomSheet, setSortingBottomSheet] = useState(false); //최신순, 별점순, 제목순 보여주는 바텀시트 보이는지 여부
  const [visible, setVisible] = useState(false);
  const [statusBottomSheet, setStatusBottomSheet] = useState(false); //최신순, 별점순, 제목순 보여주는 바텀시트 보이는지 여부
  const [statusVisible, setStatusVisible] = useState(false);
  const statusArr = ["읽고 싶어요", "읽고 있어요", "다 읽었어요", "중단했어요"];
  const [isCancel, setCancel] = useState(true);
  const [currentState, setCurrentState] = useState("읽고 싶어요");

  const handleSortChange = (newSort) => {
    setSort(newSort);
    setVisible(false);
    setTimeout(() => {
      setSortingBottomSheet(false);
    }, 200);
  };

  const handleSorting = () => {
    setSortingBottomSheet(true);
  };

  const handleTabClick = (tab) => {
    setTab((prev) =>
      prev.includes(tab) ? prev.filter((t) => t !== tab) : [...prev, tab]
    );
  };

  const handleStatusClick = () => {
    setStatusBottomSheet(true);
  };

  const handleStatusChange = (status) => {
    setCurrentState(status);
  };

  const handlePutCancel = () => {};

  return (
    <>
      <div className="flex flex-col">
        <div className="flex gap-5 w-[24.5625rem] p-4">
          <div
            onClick={handleSorting}
            className="flex items-center justify-center cursor-pointer"
          >
            <div className="text-b2 text-gray-500 whitespace-nowrap">
              {sort}
            </div>
            <img className="w-4 h-4" src={down} alt="down" />
          </div>
          <div className="overflow-x-auto">
            <RoundedTabComponent
              type="secondary"
              tabs={["읽고 싶어요", "읽고 있어요", "다 읽었어요", "중단했어요"]}
              activeTabs={tab}
              onTabClick={handleTabClick}
              multiple={true}
            />
          </div>
        </div>
        {view === "list" && (
          <div className="h-[40rem]  mx-4 overflow-y-auto ">
            <BookListView
              handleStatusClick={handleStatusClick}
              edit={true}
              bottomSheet={true}
              status={currentState}
            />

            <div className="h-[6rem] bg-transparent"></div>
          </div>
        )}
        {view === "cover" && (
          <div className="h-[40rem] mx-4 overflow-y-auto">
            <div className="grid grid-cols-3 place-items-center gap-x-3 gap-y-5">
              <BookComponent
                img={cover_img_ex}
                title="책제목 어쩌구"
                rating="4"
              />
              <BookComponent
                img={cover_img_ex}
                title="책제목 어쩌구"
                rating="4"
              />
              <BookComponent
                img={cover_img_ex}
                title="책제목 어쩌구"
                rating="4"
              />
              <BookComponent
                img={cover_img_ex}
                title="책제목 어쩌구"
                rating="4"
              />
              <BookComponent
                img={cover_img_ex}
                title="책제목 어쩌구"
                rating="4"
              />
              <BookComponent
                img={cover_img_ex}
                title="책제목 어쩌구"
                rating="4"
              />
            </div>
            <div className="h-[6rem] bg-transparent"></div>
          </div>
        )}
      </div>
      {!sortingBottomSheet && !statusBottomSheet && <BottomNavbar />}
      {sortingBottomSheet && (
        <BottomSheetModal
          bottomSheetShow={sortingBottomSheet}
          setBottomSheetShow={setSortingBottomSheet}
          visible={visible}
          setVisible={setVisible}
        >
          <div className="pb-[1.88rem] px-4">
            <div
              onClick={() => handleSortChange("최신순")}
              className={`flex items-center h-12 pt-1 pb-3 text-b2 ${
                sort === "최신순" ? "text-orange-400" : "text-gray-500"
              } cursor-pointer`}
            >
              최신순
            </div>
            <Divider2 />
            <div
              onClick={() => handleSortChange("별점높은순")}
              className={`h-12 py-3 text-b2 ${
                sort === "별점높은순" ? "text-orange-400" : "text-gray-500"
              } cursor-pointer`}
            >
              별점높은순
            </div>
            <Divider2 />
            <div
              onClick={() => handleSortChange("별점낮은순")}
              className={`h-12 py-3 text-b2 ${
                sort === "별점낮은순" ? "text-orange-400" : "text-gray-500"
              } cursor-pointer`}
            >
              별점낮은순
            </div>
            <Divider2 />

            <div
              onClick={() => handleSortChange("제목순")}
              className={`h-12 py-3 text-b2 ${
                sort === "제목순" ? "text-orange-400" : "text-gray-500"
              } cursor-pointer`}
            >
              제목순
            </div>
          </div>
        </BottomSheetModal>
      )}
      {statusBottomSheet && (
        <BottomSheetModal
          bottomSheetShow={statusBottomSheet}
          setBottomSheetShow={setStatusBottomSheet}
          visible={statusVisible}
          setVisible={setStatusVisible}
        >
          <div className="px-4">
            <ListBottomSheet
              title="책 상태"
              options={statusArr}
              currentOption={currentState}
              handleOption={handleStatusChange}
              isCancel={isCancel}
              handlePutCancel={handlePutCancel}
            />
          </div>
        </BottomSheetModal>
      )}
    </>
  );
};
export default BookListPage;

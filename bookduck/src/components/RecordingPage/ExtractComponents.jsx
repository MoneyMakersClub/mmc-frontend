import { useNavigate } from "react-router-dom";
import { getDetailExtractReview } from "../../api/archive";
import { getUserId } from "../../api/oauth";

const ExtractComponents = ({
  page,
  content,
  title,
  author,
  excerptId,
  color,
}) => {
  const navigate = useNavigate();

  const handleOnClick = async () => {
    const res = await getDetailExtractReview(excerptId, "EXCERPT");
    const typeState =
      res.excerpt && res.review ? "ALL" : res.excerpt ? "EXCERPT" : "REVIEW";

    if (typeState === "ALL")
      navigate(`/total-archive-detail/${excerptId}`, {
        state: { detailData: res },
      });
    if (typeState === "EXCERPT")
      navigate(`/excerpt-archive-detail/${excerptId}`, {
        state: { detailData: res },
      });
  };

  return (
    <div onClick={handleOnClick} className="cursor-pointer">
      <div className="flex flex-col gap-[1.25rem] w-[22.5625rem]  p-[1.25rem] rounded-[0.875rem] bg-gray-10 shadow-custom">
        <div className="text-right text-b2 text-gray-400">{page}p</div>
        <div className="flex flex-col gap-[0.5rem]">
          <div className="text-b2 text-gray-800">{content} </div>
          <div className="text-c2 text-gray-400">
            {title} / {author}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ExtractComponents;

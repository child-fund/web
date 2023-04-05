import useDonationHistoryData from "../apis/useDonationHistoryData";

const useDonationHistory = () => {
  const { size, setSize } = useDonationHistoryData();

  const handleLoadMoreClick = () => {
    setSize(size + 1);
  };

  const handleNoticeClick = () => {
    window.open(
      "https://escal-print.notion.site/X-25392410e8b04c10b17b66d7cd413b54"
    );
  };

  return {
    handleLoadMoreClick,
    handleNoticeClick,
  };
};

export default useDonationHistory;

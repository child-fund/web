import { DummyData } from "features/donationHistory/dummyData";
import { useLocation } from "react-router-dom";

const useDonationHistoryDetail = () => {
  const location = useLocation();
  const state = location.state as { item: DummyData } | undefined;

  return { data: state?.item };
};

export default useDonationHistoryDetail;

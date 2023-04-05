import { useLocation } from "react-router-dom";
import { Donation } from "features/donationHistory/apis/useDonationHistoryData";

const useDonationHistoryDetail = () => {
  const location = useLocation();
  const state = location.state as { item: Donation } | undefined;

  return { data: state?.item };
};

export default useDonationHistoryDetail;

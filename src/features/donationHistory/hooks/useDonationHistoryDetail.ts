import { DummyData } from "features/donationHistory/dummyData";
import { useLocation } from "react-router-dom";

// TODO: DonationItem과 DonationHistoryDetail의 Hook은 어디에 위치시켜야 하는걸까
const useDonationHistoryDetail = () => {
  const location = useLocation();
  const state = location.state as { item: DummyData } | undefined;

  return { data: state?.item };
};

export default useDonationHistoryDetail;

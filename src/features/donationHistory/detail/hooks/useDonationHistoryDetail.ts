import { useLocation } from "react-router-dom";
import useSWR from "swr";

import getDonationDetail from "../apis/getDonationDetail";

const useDonationHistoryDetail = () => {
  const location = useLocation();
  const donationId = location.pathname.split("/")[2];

  const { data } = useSWR(
    `/mypage/airplane/${donationId}`,
    (key) => getDonationDetail(key, donationId),
    { revalidateIfStale: false, revalidateOnFocus: false }
  );

  return { donationDetail: data ? data.data : undefined };
};

export default useDonationHistoryDetail;

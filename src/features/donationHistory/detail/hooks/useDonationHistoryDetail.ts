import { useContext } from "react";
import { useLocation } from "react-router-dom";
import useSWR from "swr";

import getDonationDetail from "../apis/getDonationDetail";
import { ToastContext } from "shared/components/Toast/ToastProvider";

const useDonationHistoryDetail = () => {
  const location = useLocation();
  const donationId = location.pathname.split("/")[2];
  const { showToast } = useContext(ToastContext);

  const { data, isLoading } = useSWR(
    `/mypage/airplane/${donationId}`,
    (key) => getDonationDetail(key, donationId),
    { revalidateIfStale: false, revalidateOnFocus: false }
  );

  if (!isLoading && !data) {
    showToast(`에러가 발생했어요.
    이 메시지가 반복된다면 1688-4272 고객센터로 연락주세요.`);
  }

  return { donationDetail: data ? data.data : undefined };
};

export default useDonationHistoryDetail;

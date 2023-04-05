import axios from "axios";

interface DonationDetail {
  date: string;
  content: string;
}

interface ApiResponse<T, E = string> {
  data: T;
  error?: E;
}

const getDonationDetail = async (key: string, donationId?: string) => {
  const API_URI = process.env.REACT_APP_API_URI;
  const accessToken = localStorage.getItem("accessToken");

  console.log("accessToken ,donationId", accessToken, donationId);
  if (!accessToken || !donationId) {
    return undefined;
  }

  const res: ApiResponse<DonationDetail> = await axios.get(
    `${API_URI}/mypage/airplane/${donationId}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return res;
};

export default getDonationDetail;

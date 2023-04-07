import axios from "axios";
import useSWRInfinite from "swr/infinite";

export interface Donation {
  donationId: number;
  donationSubject: string;
  date: string; // TODO: 데이터 타입 확인. date: "2023.04.25",
  season: string;
  imageUrl: string;
  color: string;
}

interface Data {
  totalDonation: number;
  totalCount: number;
  donationList: Donation[];
}

const FETCH_LIMIT = 3;

const getKey = (pageIndex: number, previousPageData: Data | null) => {
  const API_URI = process.env.REACT_APP_API_URI;

  if (previousPageData && previousPageData.donationList.length < FETCH_LIMIT) {
    return null;
  }

  return `${API_URI}/mypage/airplane?page=${pageIndex}&size=${FETCH_LIMIT}`;
};

const fetcher = async (url: string) => {
  try {
    const accessToken = localStorage.getItem("escalAccessToken");

    if (!accessToken) {
      return undefined;
    }

    const res = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const donationList = res.data.donationList.map((item: Donation) => {
      return { ...item, color: refineColor(item.color) };
    });

    const data = { ...res.data, donationList };

    return data as Data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

// TODO: 이런건 작명을 어떻게 하는게 좋을것인가?
const useDonationHistoryData = () => {
  const { data, size, setSize } = useSWRInfinite(getKey, fetcher, {
    revalidateAll: false,
    revalidateFirstPage: false,
    revalidateIfStale: false,
    revalidateOnFocus: false,
  });

  return {
    donationList: data
      ? data.reduce((acc, cur) => {
          if (cur) {
            const newAcc = acc.concat(cur.donationList);
            return newAcc;
          } else {
            return acc;
          }
        }, [] as Donation[])
      : [],
    totalDonation: data && data[0] ? data[0].totalDonation : 0,
    totalCount: data && data[0] ? data[0].totalCount : 0,
    size,
    setSize,
  };
};

const refineColor = (color: string) => {
  return color.charAt(0).toUpperCase() + color.slice(1).toLowerCase();
};

export default useDonationHistoryData;

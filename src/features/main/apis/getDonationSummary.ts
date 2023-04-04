import axios, { AxiosError } from "axios";

interface Data {
  totalAirplaneCount: number;
  totalDonation: number;
}

const getDonationSummary = async () => {
  try {
    const API_URI = process.env.REACT_APP_API_URI;
    const res = await axios.get(`${API_URI}/airplane/all`, {
      headers: { "Content-Type": "application/json" },
    });

    return { result: true, data: res.data as Data };
  } catch (e) {
    const error = e as AxiosError;
    const statusCode = error.response?.status;

    return { result: false, statusCode };
  }
};

export default getDonationSummary;

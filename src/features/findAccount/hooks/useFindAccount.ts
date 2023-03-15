import { useState } from "react";
import { useNavigate } from "react-router-dom";

type TabType = "Id" | "Password";

const useFindAccount = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState<TabType>("Id");

  const handleJoinClick = () => {
    navigate("/join");
  };

  const handleTabClick = (value: TabType) => {
    setSelectedTab(value);
  };

  return {
    handleJoinClick,
    handleTabClick,
    selectedTab,
  };
};

export default useFindAccount;

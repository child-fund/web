import { Routes, Route } from "react-router-dom";

import HomeContainer from "features/main/Container";
import JoinContainer from "features/join/Container";
import LoginContainer from "features/login/Container";
import FindAccountContainer from "features/findAccount/Container";
import SelectAirplaneContainer from "features/selectAirplane/Container";
import WriteDreamContainer from "features/writeDream/Container";
import DonationCertificateContainer from "features/donationCertificate/Container";
import DonationHistoryContainer from "features/donationHistory/Container";
import DonationHistoryDetailContainer from "features/donationHistory/detail/Container";

import { Container } from "App.style";

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="join" element={<JoinContainer />} />
        <Route path="login" element={<LoginContainer />} />
        <Route path="findaccount" element={<FindAccountContainer />} />
        <Route path="selectairplane" element={<SelectAirplaneContainer />} />
        <Route path="writedream" element={<WriteDreamContainer />} />
        <Route path="certificate" element={<DonationCertificateContainer />} />
        <Route path="history">
          <Route index element={<DonationHistoryContainer />} />
          <Route path=":id" element={<DonationHistoryDetailContainer />} />
        </Route>
      </Routes>
    </Container>
  );
};

export default App;

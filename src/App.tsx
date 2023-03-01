import { Routes, Route } from "react-router-dom";

import Home from "features/home/Container";
import Airplane from "features/airplane/Container";
import WritingDream from "features/airplane/airplaneSubDomain/writingDream/Container";
import Certificate from "features/airplane/airplaneSubDomain/writingDream/writingDreamSubDomain/certificate/Container";
import History from "features/history/Container";
import HistoryDetail from "features/history/historySubDomain/historyDetail/Container";
import Join from "features/join/Container";
import Login from "features/login/Container";
import FindAccount from "features/login/loginSubDomain/findAccount/Container";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* TODO: 컴포넌트 명은 HomeContainer고, 불러올때는 Home? */}
        <Route path="airplane">
          {/* TODO: nested routing 이러케..? */}
          <Route index={true} element={<Airplane />} />
          <Route path="write" element={<WritingDream />} />
          <Route path="certificate" element={<Certificate />} />
          {/* TODO: (네이밍) 여기 뎁스처리를 어떻게 해야하는걸까 */}
        </Route>
        <Route path="history">
          <Route index={true} element={<History />} />
          <Route path=":id" element={<HistoryDetail />} />
          {/* TODO: history라는 명칭이 적합할까 */}
        </Route>
        <Route path="join" element={<Join />} />
        <Route path="login">
          <Route index={true} element={<Login />} />
          <Route path="find" element={<FindAccount />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

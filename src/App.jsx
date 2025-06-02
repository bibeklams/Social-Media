import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/header";
import Footer from "./component/footer";
import { Sidebar } from "./component/sidebar";
import { Createpost } from "./component/createpost";
import { Postlist } from "./component/postlist";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="content">
          <Header></Header>
          {selectedTab === "Home" ? (
            <Postlist></Postlist>
          ) : (
            <Createpost></Createpost>
          )}

          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;

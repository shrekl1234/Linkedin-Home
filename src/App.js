import React from "react";
import Nav from "./components/nav.component";
import PageHeader from "./components/page-header/page-header.component";

  
function App() {
  
const [pageHeader, setPageHeader] = React.useState("Posts");

  return (
    <div className="App">
      <div className="container-fluid px-0">
        <Nav />
        <hr style={{ marginBottom: "0" }} />
        <PageHeader pageHeader={pageHeader} setPageHeader={setPageHeader} />
      </div>
    </div>
  );
}

export default App;

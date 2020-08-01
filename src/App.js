import React from "react";
import Nav from "./components/nav/nav.component";
import PageHeader from "./components/page-header/page-header.component";
import Page from './components/page-content/page-component';
  
function App() {
  
const [pageHeader, setPageHeader] = React.useState("Posts");

  return (
    <div className="App">
      <div className="container-fluid px-0">
        <Nav />
        <hr style={{ marginBottom: "2px" }} />
        <PageHeader pageHeader={pageHeader} setPageHeader={setPageHeader} />
        <Page />
      </div>
    </div>
  );
}

export default App;

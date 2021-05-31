import React, { Fragment } from "react";
import Cards from "../../Components/Cards";

const UserPages = () => {
  return (
    <Fragment>
      <div style={{ minHeight: "100vh" }}>
        <div style={{ padding: 30, maxWidth: 230 }}>
          <div style={{ height: 260, background: "green" }}>
            <div>GFambar</div>
          </div>
          <div>
            <div>Muhammad Syahendra Anindyantoro</div>
            <div>username</div>
            <div>Status</div>
          </div>
          <div>
            <div>
              <span>6</span>
              <span>&nbsp;followers</span>
              <span>.</span>
              <span>6</span>
              <span>&nbsp;following</span>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: 270, top: 30, width: "70%" }}>
          <div>Repository</div>
          <hr />
          <Cards />
        </div>
      </div>
    </Fragment>
  );
};

export default UserPages;

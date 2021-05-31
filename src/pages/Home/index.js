import React, { Fragment } from "react";
import { logo } from "../../Components/images";
import { AiOutlineSearch } from "react-icons/ai";

const Home = () => {
  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            display: "flex",
            alignContent: "center",
            maxHeight: "80vh",
          }}
        >
          <div style={{ margin: "auto" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src={logo} alt="logo" />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: 450,
                height: 30,
                border: "none",
              }}
            >
              <div style={{ position: "absolute", left: "33%", top: "53%" }}>
                <AiOutlineSearch size={25} />
              </div>
              <input
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 20,
                  paddingLeft: 40,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;

import React, { Fragment, useContext, useState } from "react";
import { logo } from "../../Components/images";
import { AiOutlineSearch } from "react-icons/ai";
import { getData } from "../../utils/fetch";
import { ApiContext } from "../../useContext";
import { useHistory } from "react-router";

const Home = () => {
  const [stateInput, setStateInput] = useState(null);
  const apiContext = useContext(ApiContext);
  const { state, dispatch } = apiContext;
  const history = useHistory();
  console.log(state, "inisdtate");
  const getSearchData = () => {
    getData(stateInput)
      .then((res) => {
        dispatch({
          type: "GET_USER_SUCCESS",
          payload: res,
        });
        if (res.node_id) {
          history.push("/user/" + res.node_id);
        }
      })
      .catch((e) => {
        dispatch({
          type: "GET_USER_FAILURE",
          payload: e.response.data.message,
        });
        history.push("/search");
      });
  };
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
                onChange={(e) => setStateInput(e.target.value)}
                onKeyPress={(ev) => ev.key === "Enter" && getSearchData()}
                placeholder="Search UserName. Press Enter"
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;

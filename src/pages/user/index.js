import React, { Fragment, useContext, useEffect, useState } from "react";
import Cards from "../../Components/Cards";
import { ApiContext } from "../../useContext";
import { getData } from "../../utils/fetch";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";

const UserPages = () => {
  const [stateData, setStateData] = useState([]);
  const [postsPerPage] = useState(5);
  const [offset, setOffset] = useState(1);
  const apiContext = useContext(ApiContext);
  const { state } = apiContext;

  const getDatas = () => {
    getData((state.data || null)?.login + "/repos")
      .then((res) => {
        const slices =
          res.length > 0 && res.slice(offset - 1, offset - 1 + postsPerPage);
        setStateData(slices);
      })
      .catch((e) => {
        return console.error(e);
      });
  };
  const searchData = (e) => {
    if (stateData.length < 1) return null;
    const filter =
      stateData.length > 0 &&
      stateData.filter((item) =>
        String(item.name)
          .toLowerCase()
          .includes(String(e.target.value).toLowerCase())
      );
    if (e.target.value) return setStateData(filter);
    getDatas();
  };

  useEffect(() => {
    getDatas();
  }, [state, offset]);

  const handlePageClick = (event) => {
    if (offset < 1) return setOffset(1);
    if (event === "back") return setOffset(offset - 1);
    if (event === "next") return setOffset(offset + 1);
  };
  return (
    <Fragment>
      <div style={{ minHeight: "100vh" }}>
        <div style={{ padding: 30, maxWidth: 230 }}>
          <div
            style={{
              height: 260,
              background: "green",
              width: 230,
              borderRadius: 30,
            }}
          >
            <img
              src={state && (state.data || null)?.avatar_url}
              className="img-responsive"
              style={{ width: "100%", height: "100%", borderRadius: 30 }}
              alt="Avatar"
            />
          </div>
          <div style={{ marginTop: 10 }}>
            <div style={{ fontSize: 22, fontWeight: 500 }}>
              {state && (state.data || null)?.name}
            </div>
            <div style={{ fontSize: 16 }}>
              {state && (state.data || null)?.login}
            </div>
            <div style={{ fontSize: 14 }}>
              {state && (state.data || null)?.location}
            </div>
          </div>
          <br />
          <div style={{ display: "flex", alignItems: "center" }}>
            <FiUsers style={{ marginRight: 10 }} />
            <div>
              <span>{state && (state.data || null)?.followers}</span>
              <span>&nbsp;followers</span>
              <span>.</span>
              <span>{state && (state.data || null)?.following}</span>
              <span>&nbsp;following</span>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: 270, top: 30, width: "70%" }}>
          <div style={{ fontSize: 22, fontWeight: 600 }}>Repository</div>
          <hr />
          <input
            onChange={searchData}
            style={{ width: 300, height: 20, borderRadius: 5 }}
            placeholder="Cari Repository"
          />
          <Cards stateData={stateData} />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                cursor: "pointer",
                marginRight: 10,
                padding: 5,
              }}
              onClick={() => handlePageClick("back")}
              hidden={offset === 1 ? true : false}
            >
              <AiOutlineArrowLeft />
            </div>
            <div style={{ fontSize: 18 }}>{offset < 1 ? 1 : offset}</div>
            <div
              style={{ cursor: "pointer", marginLeft: 10, padding: 5 }}
              onClick={() => handlePageClick("next")}
            >
              <AiOutlineArrowRight />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UserPages;

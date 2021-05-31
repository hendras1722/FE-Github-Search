import React, { Fragment } from "react";
import moment from "moment";

const Cards = (props) => {
  const { stateData } = props;
  return (
    <Fragment>
      {stateData &&
        stateData.map((item, index) => (
          <>
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 5,
              }}
            >
              <div>
                <div>{item.name}</div>
                <div>{item.description}</div>
                <div>{moment(item.updated_at).startOf("hour").fromNow()}</div>
              </div>
              <div>
                <div>{item.forks_count} fork</div>
              </div>
            </div>
            <hr />
          </>
        ))}
    </Fragment>
  );
};

export default Cards;

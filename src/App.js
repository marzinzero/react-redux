import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userFatchData } from "./reducers/userReducer";
const App = () => {
  const { post, loadding } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const [state, setState] = useState(5);

  useEffect(() => {
    dispatch(userFatchData());
  }, []);

  // console.log(data[0].title);
  return (
    <div
      style={{
        background: "white",
        margin: "0 auto",
        maxWidth: "600px",
        padding: "8px",
        placeItems: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        boxShadow: "0px 5px 20px #000",
      }}
    >
      {loadding && <h3>Loadding...</h3>}
      {post.slice(0, state).map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </div>
      ))}
      <button
        style={{ cursor: "pointer" }}
        onClick={() => setState((prev) => prev + 5)}
      >
        Loadmore
      </button>
    </div>
  );
};

export default App;

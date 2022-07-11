import React, {
  useState,
  useCallback,
  useMemo,
  useRef,
  useEffect
} from "react";
import Movie from "./Movie";
import User from "./User";
import "./styles.css";

const usePrevious = (val) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = val;
  }, [val]);
  return ref.current;
};

const someFn = (val) => {
  console.log("### SomeVal", val);
  if (isNaN(val)) return 0;
  if (parseInt(val, 10) > 1000) return 1000;

  let idx = 0;
  for (let i = 0; i < parseInt(val, 10); i++) {
    idx++;
  }
  console.log(idx);
  return idx;
};

function App() {
  const [movieValue, setMovieValue] = useState("");
  const [userValue, setUserValue] = useState("");
  const [iterValue, setIterValue] = useState(0);
  const prev = usePrevious(movieValue);
  const someVal = useMemo(() => someFn(iterValue), [iterValue]);
  // const [memoVal, setMemoVal] = useState(someVal);

  const handleChange = (e, type) => {
    const val = e.target.value;
    if (type === "movie") setMovieValue(val);
    else if (type === "user") setUserValue(val);
    else if (type === "iter") setIterValue(val);
  };

  // const cb = () => {
  //   console.log('### cb called');
  // }

  const cb = useCallback(() => {
    console.log("### cb called");
  }, []);

  return (
    <div className="App">
      <div>
        Movie:{" "}
        <input
          type="text"
          value={movieValue}
          onChange={(e) => handleChange(e, "movie")}
        />
        <br />
        Prev Movie: {prev}
        <br />
        User:{" "}
        <input
          type="text"
          value={userValue}
          onChange={(e) => handleChange(e, "user")}
        />
        <br />
        Iter:{" "}
        <input
          type="text"
          value={iterValue}
          onChange={(e) => handleChange(e, "iter")}
        />
        <br />
      </div>
      <div>i: {someVal}</div>
      <div>
        <Movie value={movieValue} cb={cb} />
        <User value={userValue} cb={cb} />
      </div>
    </div>
  );
}

export default App;

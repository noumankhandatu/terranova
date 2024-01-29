import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container p-3 mt-4" style={{ border: "4px solid yellow" }}>
      <div className="row justify-content-center">
        <div className="col text-center">
          <img src="/logo.png" alt="Logo" className="img-fluid" style={{ width: "200px" }} />
        </div>
      </div>
      <div className="row mt-5 justify-content-center mt-3">
        <div className="col text-center">
          <button style={{ ...btnStyl, background: "#e4e4e4" }} className="btn  mx-2 ">
            <div style={lesStyle}>
              <b>
                LES JES <br />
                MIDDAG
              </b>
            </div>
            <br />
            <div style={openVanifStyle}>Open Vanif 20-2023</div>
          </button>
          <button style={{ ...btnStyl, background: "#e4e4e4" }} className="btn  mx-2 ">
            <div style={lesStyle}>
              <b>
                LES JES <br />
                MIDDAG
              </b>
            </div>
            <br />
            <div style={openVanifStyle}>Open Vanif 20-2023</div>
          </button>
          <Link to="/form">
            <button style={{ ...btnStyl, background: "#76a66a" }} className="btn btn-success mx-2 ">
              <div style={lesStyle}>
                <b>
                  LES JES <br />
                  MIDDAG
                </b>
              </div>
              <br />
              <div style={openVanifStyle}>Open Vanif 20-2023</div>
            </button>
          </Link>
        </div>
      </div>
      <div style={{ height: "150px" }} />
    </div>
  );
};

export default Home;

const btnStyl = {
  height: "250px",
  width: "290px",
  position: "relative",
  borderRadius: "40px",
};
const lesStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
};

const openVanifStyle = {
  position: "absolute",
  bottom: "15px",
  left: "50%",
  transform: "translateX(-50%)",
  textAlign: "center",
};

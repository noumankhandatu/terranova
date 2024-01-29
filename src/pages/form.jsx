const AppForm = () => {
  return (
    <div>
      {" "}
      <div className="container p-3 mt-4" style={{ border: "4px solid yellow" }}>
        <div className="row justify-content-center">
          <div className="col text-center">
            <img src="/logo.png" alt="Logo" className="img-fluid" style={{ width: "200px" }} />
          </div>
        </div>
        <div className="row mt-5 justify-content-center mt-3">
          <div className="col-md-12">
            <p className="fs-2 fw-bold">lesjesmiddag</p>
            <b>we communicate over de open dag voornamelijk via de mail.Wat is jouw mailaddress</b>
            <div className="form-floating mb-3">
              <input
                style={{ width: "50%" }}
                type="email"
                className="form-control mt-4"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
          </div>
        </div>
        <div className="row border border-3 border-light-subtle m-1 p-3">
          <div className="row">
            <div className="col">
              <label htmlFor="checkboxes">
                <b>Selecteer datum en tidj</b>
              </label>
              <div className="d-flex mb-5 mt-4 ">
                <div>
                  {[1, 2, 3, 4].map((items, id) => {
                    return (
                      <div key={id} style={{ marginRight: 30 }}>
                        <input type="checkbox" id="checkbox1" />
                      </div>
                    );
                  })}
                </div>
                <div
                  className="border-3 border border-top border-bottom"
                  style={{ height: 100, width: 40 }}
                ></div>
                <br />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="checkboxes">
                <b>Wat is het advices van de basisschool</b>:
              </label>
              <div className="d-md-flex mb-5 mt-4 ">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((items, id) => {
                  return (
                    <div key={id} style={{ marginRight: 30 }}>
                      <input type="checkbox" id="checkbox1" />
                      <label style={{ marginLeft: 8 }} htmlFor="checkbox1">
                        <b>vmbo-b</b>
                      </label>
                    </div>
                  );
                })}

                <br />
              </div>
            </div>
          </div>

          <div className="row mt-5" style={{ alignItems: "center" }}>
            <div className="col-md-6">
              <label htmlFor="" className="fw-bold mb-3">
                Naam Van de basisschool
              </label>
              <input type="text" className="form-control mb-4" placeholder="Input 1" />
              <label htmlFor="" className="fw-bold mb-3">
                Jouw gegevens
              </label>
              <input type="text" className="form-control mb-4" placeholder="Input 2" />
              <input type="text" className="form-control mb-4" placeholder="Input 1" />
              <input type="text" className="form-control mb-4" placeholder="Input 2" />
            </div>
            <div className="col-md-6">
              <input type="text" className="form-control mb-4" placeholder="Input 3" />
              <input type="text" className="form-control mb-4" placeholder="Input 4" />
            </div>
          </div>

          <div className="row">
            <button
              type="button"
              style={{ background: "#76a66a", height: 40 }}
              className="btn btn-success btn-block"
            >
              Versturen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppForm;

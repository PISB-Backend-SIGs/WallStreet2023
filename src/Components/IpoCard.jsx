import React from 'react'

const IpoCard = () => {
  return (
    <div className="card shadow" style={{ backgroundColor: "#3d3d4d", color: "#fefdff", borderRadius: "10px" }}>
        <div
          className="card-body p-2 px-3"
          style={{ backgroundColor: "#3d3d4d", color: "#fefdff", borderRadius: "10px" }}
        >
          <div className="row row-cols-2 row-cols-sm-4 g-4 align-items-center">
            <div className="col text-start text-sm-center">
              <p className="card-text" style={{fontWeight: "bold"}}>APPL</p>
            </div>
            <div className="col text-end text-sm-center">
              <p className="card-text">$ 20.68</p>
            </div>
            <div className="col text-start text-sm-center">
              <p className="card-text">23 Mar</p>
            </div>
            <div className="col text-end text-sm-center">
              <div className="btn btn-sm subscribe">Subscribe</div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default IpoCard
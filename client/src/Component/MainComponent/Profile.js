import React, { useContext } from "react";
import { UserContext } from "../UserContext";

export default function Profile() {
  const { username } = useContext(UserContext);

  return (
    <div className="container py-5" style={{ backgroundColor: "#e7eaf6", minHeight: "100vh" }}>
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow rounded-4 p-4">
            <div className="text-center">
              <div className="profile-circle mb-3">
                {username?.charAt(0)?.toUpperCase()}
              </div>
              <h3 className="fw-bold mb-1">{username || "User"}</h3>
              <p className="text-muted">Welcome to your profile</p>
            </div>

            <hr />

            <div>
              <h5 className="fw-semibold mb-3">Profile Information</h5>
              <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between">
                  <span className="fw-medium">Username:</span>
                  <span>{username || "-"}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span className="fw-medium">Email:</span>
                  <span>(Coming soon)</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span className="fw-medium">Account Created:</span>
                  <span>(Coming soon)</span>
                </li>
              </ul>
            </div>

            <div className="mt-4 text-center">
              <button className="btn btn-outline-danger btn-sm rounded-pill px-4">Edit Profile (Coming soon)</button>
            </div>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .profile-circle {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background-color: #2a9d8f;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          font-weight: bold;
          margin: 0 auto;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
}

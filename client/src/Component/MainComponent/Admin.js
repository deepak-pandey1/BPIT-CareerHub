import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaPlus, FaEllipsisV, FaTrash } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Spinner } from "react-bootstrap"; // Import the Spinner component from react-bootstrap

export default function Admin() {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    package: "",
    img: "",
  });
  const [companies, setCompanies] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [menuOpenId, setMenuOpenId] = useState(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
  const [loginError, setLoginError] = useState("");



  const [isAuthenticated, setIsAuthenticated] = useState(false);
const [loginData, setLoginData] = useState({ username: "", password: "" });

const handleLogin = (e) => {
  e.preventDefault();
  if (
    loginData.username === "admin" &&
    loginData.password === "admin"
  ) {
    setIsAuthenticated(true);
    setLoginError("");
    toast.success("Login successful! 🚀", {
      position: "top-center",
    });
  } else {
    setLoginError("Invalid username or password. Please try again.");
  }
};



  const fetchCompanies = async () => {
    try {
      const res = await axios.get("https://bpit-careerhub.onrender.com/api/company/all");
      setCompanies(res.data);
      setLoading(false); // Set loading to false once data is fetched
    } catch (err) {
      console.error("Failed to fetch companies:", err);
      setLoading(false); // Ensure loading is set to false even on error
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePost = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://bpit-careerhub.onrender.com/api/company/add", formData);
      toast.success("✅ Company added successfully!");
      setFormData({ name: "", role: "", package: "", img: "" });
      fetchCompanies();
      setShowForm(false);
    } catch (err) {
      toast.error("❌ Error adding company.");
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://bpit-careerhub.onrender.com/api/company/delete/${id}`);
      fetchCompanies();
      toast.info("🗑️ Company deleted.");
    } catch (err) {
      toast.error("❌ Error deleting company.");
      console.error("Error deleting company:", err);
    }
  };

  const isFormValid = formData.name && formData.role && formData.package;

  return (
    <>  

<AnimatePresence>
  {!isAuthenticated && (
    <motion.div
      key="login-modal"
      className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
      style={{
        backdropFilter: "blur(10px)",
        background: "rgba(255, 255, 255, 0.2)",
        zIndex: 3000,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <motion.div
        className="p-5"
        style={{
          width: "90%",
          maxWidth: "430px",
          background: "linear-gradient(135deg, #ffffff, #f0f4ff)",
          borderRadius: "2rem",
          boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
        }}
        initial={{ y: -100, opacity: 0, scale: 0.8 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: -50, opacity: 0, scale: 0.7 }}
        transition={{ type: "spring", stiffness: 80, damping: 15 }}
      >
        <div className="text-center mb-4">
          <motion.h4
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ fontWeight: 700, fontSize: "1.5rem", color: "#333" }}
          >
            🔐 Admin Login
          </motion.h4>
          <p className="text-muted mb-0">Enter your credentials to proceed</p>
        </div>

        <form onSubmit={handleLogin}>
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <label className="form-label" style={{ fontWeight: 500 }}>
              Username
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="👤 Enter username"
              style={{
                padding: "0.8rem 1rem",
                borderRadius: "1rem",
                border: "1px solid #ccc",
              }}
              value={loginData.username}
              onChange={(e) =>
                setLoginData({ ...loginData, username: e.target.value })
              }
              required
            />
          </motion.div>

          <motion.div
            className="mb-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <label className="form-label" style={{ fontWeight: 500 }}>
              Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="🔒 Enter password"
              style={{
                padding: "0.8rem 1rem",
                borderRadius: "1rem",
                border: "1px solid #ccc",
              }}
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
              required
            />
          </motion.div>

          <motion.button
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 15px rgba(99, 102, 241, 0.6)",
            }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="btn w-100"
            style={{
              background: "linear-gradient(to right, #6366f1, #3b82f6)",
              color: "#fff",
              fontWeight: 600,
              padding: "0.75rem",
              border: "none",
              borderRadius: "1rem",
            }}
          >
            🚀 Login
          </motion.button>
        </form>
        {loginError && (
  <motion.div
    className="text-danger mt-3 text-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    {loginError}
  </motion.div>
)}

      </motion.div>
    </motion.div>
  )}
</AnimatePresence>




    <div style={{ filter: !isAuthenticated ? "blur(8px)" : "none" }}>
    <div className="container mt-5 position-relative">
      <ToastContainer position="top-right" autoClose={3000} />
      <motion.h2
        className="mb-4 fw-bold text-center"
        initial={{ opacity: 0, y: -30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{
          color: "#333",
          textShadow: "1px 1px 10px rgba(0,0,0,0.1)",
          letterSpacing: "1px",
          marginTop: "-30px", // <-- this pulls it up
        }}
      >
        🛠️ Admin Panel
      </motion.h2>


      {/* Show Spinner while data is loading */}
      {loading && (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 999,
            width: "100%",
            height: "100%",
            // background: "rgba(255, 255, 255, 0.5)", // Add a slight background to prevent interaction
          }}
        >
          <Spinner animation="border" variant="primary" />
        </div>
      )}

      <div className={loading ? "opacity-0" : ""}>
        {/* Content is hidden when loading */}
        <div className="d-flex flex-column gap-3">
          <AnimatePresence>
            {companies.map((company, i) => (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: i * 0.05 }}
                className="card shadow-sm p-3 position-relative bg-light border-0"
                key={company._id}
                style={{ borderRadius: "1rem" }}
              >
                <div className="d-flex align-items-center gap-3">
                  {/* Avatar */}
                  <div>
                    {company.img ? (
                      <img
                        src={company.img}
                        alt="logo"
                        style={{
                          width: "60px",
                          height: "60px",
                          objectFit: "cover",
                          borderRadius: "50%",
                          border: "2px solid #dee2e6",
                          boxShadow: "0 0 8px rgba(0,0,0,0.1)",
                        }}
                      />
                    ) : (
                      <div
                        style={{
                          width: "60px",
                          height: "60px",
                          borderRadius: "50%",
                          background: "#6c63ff",
                          color: "#fff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "22px",
                          fontWeight: "bold",
                        }}
                      >
                        {company.name?.charAt(0)}
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-grow-1">
                    <h5 className="mb-1">{company.name}</h5>
                    <p className="mb-1 text-muted">
                      <strong>Role:</strong> {company.role}
                    </p>
                    <p className="mb-0 text-muted">
                      <strong>Package:</strong> {company.package}
                    </p>
                  </div>

                  {/* Dropdown */}
                  <div className="position-relative">
                    <FaEllipsisV
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        setMenuOpenId(menuOpenId === company._id ? null : company._id)
                      }
                    />
                    <AnimatePresence>
                      {menuOpenId === company._id && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95, y: -5 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95, y: -5 }}
                          transition={{ duration: 0.2 }}
                          className="position-absolute bg-white border rounded shadow-sm"
                          style={{ right: 0, top: "30px", zIndex: 1, minWidth: "140px" }}
                        >
                          <div
                            className="d-flex align-items-center gap-2 px-3 py-2 text-danger fw-semibold"
                            style={{
                              cursor: "pointer",
                              borderRadius: "0.25rem",
                              transition: "background 0.2s",
                            }}
                            onClick={() => setConfirmDeleteId(company._id)}
                            onMouseEnter={(e) =>
                              (e.currentTarget.style.background = "#f8d7da")
                            }
                            onMouseLeave={(e) =>
                              (e.currentTarget.style.background = "transparent")
                            }
                          >
                            <FaTrash />
                            <span>Delete</span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal Form */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
            style={{
              backdropFilter: "blur(6px)",
              background: "rgba(0, 0, 0, 0.4)",
              zIndex: 1000,
            }}
            onClick={() => setShowForm(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="card p-4 shadow-lg"
              style={{
                width: "90%",
                maxWidth: "500px",
                borderRadius: "1rem",
                background: "#f9f9f9",
              }}
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h5 className="mb-3 text-center">
                <motion.span
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                  style={{ display: "inline-block", marginRight: "0.5rem" }}
                >
                  🚀
                </motion.span>
                Add New Company
              </h5>
              <form onSubmit={handlePost}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Company Name"
                  className="form-control my-2"
                  required
                />
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  placeholder="Role"
                  className="form-control my-2"
                  required
                />
                <input
                  type="text"
                  name="package"
                  value={formData.package}
                  onChange={handleChange}
                  placeholder="Package (e.g., ₹6 LPA)"
                  className="form-control my-2"
                  required
                />
                <input
                  type="text"
                  name="img"
                  value={formData.img}
                  onChange={handleChange}
                  placeholder="Image URL (optional)"
                  className="form-control my-2"
                />
                {isFormValid && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="btn btn-success mt-3 w-100"
                  >
                    Post Company
                  </motion.button>
                )}
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Confirm Delete Modal */}
      <AnimatePresence>
        {confirmDeleteId && (
          <motion.div
            className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
            style={{
              backdropFilter: "blur(4px)",
              background: "rgba(0,0,0,0.4)",
              zIndex: 2000,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-4 rounded shadow-lg text-center"
              style={{ width: "90%", maxWidth: "400px", borderRadius: "1rem" }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <h5 className="mb-3">⚠️ Confirm Deletion</h5>
              <p>Are you sure you want to delete this company?</p>
              <div className="d-flex justify-content-center gap-3 mt-4">
                <button
                  className="btn btn-secondary"
                  onClick={() => setConfirmDeleteId(null)}
                >
                  Cancel
                </button>
                <button
                  className="btn btn-danger"
                  onClick={async () => {
                    await handleDelete(confirmDeleteId);
                    setConfirmDeleteId(null);
                  }}
                >
                  Yes, Delete
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        className="btn btn-gradient position-fixed d-flex justify-content-center align-items-center"
        style={{
          bottom: "30px",
          right: "30px",
          width: "60px",
          height: "60px",
          fontSize: "24px",
          borderRadius: "50%",
          background: "#113f67",
          color: "#fff",
          boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
          zIndex: 1050,
        }}
        onClick={() => setShowForm(!showForm)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaPlus />
      </motion.button>
    </div>
    </div>
    </>
  );
}

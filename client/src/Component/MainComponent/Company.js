import React, { useContext, useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { UserContext } from '../UserContext.js';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { Spinner } from 'react-bootstrap';
import { FaTimes, FaSearch, FaTimesCircle, FaPaperPlane } from 'react-icons/fa';
import './Company.css';
import { FaFilter, FaDollarSign } from 'react-icons/fa';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';



export default function Company() {


  const { username } = useContext(UserContext);
  const navigate = useNavigate();
  const isLoggedIn = !!username;

  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  const [roleFilter, setRoleFilter] = useState('');
  const [packageFilter, setPackageFilter] = useState('');
  const [sortOption, setSortOption] = useState('');

  const handleLoginRedirect = () => navigate('/login');

  const fetchCompanies = async () => {
    try {
      const res = await axios.get('https://bpit-careerhub.onrender.com/api/company/all');
      setCompanies(res.data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching companies:', err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  const getPackageValue = (pkg) => {
    if (!pkg) return 0;
    // Extract number like "5" from "5 LPA" or "10+ LPA"
    const match = pkg.match(/\d+(\.\d+)?/); 
    return match ? parseFloat(match[0]) : 0;
  };
  

  const filteredCompanies = companies
    .filter((company) =>
      company.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((company) => (roleFilter ? company.role?.toLowerCase() === roleFilter.toLowerCase() : true))

    .filter((company) => {
      const pkgVal = getPackageValue(company.package);
      if (packageFilter === '<5') return pkgVal < 5;
      if (packageFilter === '5-10') return pkgVal >= 5 && pkgVal <= 10;
      if (packageFilter === '>10') return pkgVal > 10;
      return true;
    })
    .sort((a, b) => {
      if (sortOption === 'package') {
        return getPackageValue(b.package) - getPackageValue(a.package);
      } else if (sortOption === 'name') {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });

  const renderCompanyLogoOrLetter = (companyName, companyImg) => {
    if (companyImg) {
      return (
        <img
          src={companyImg}
          alt={companyName}
          style={{
            width: '40px',
            height: '40px',
            objectFit: 'cover',
            borderRadius: '50%',
          }}
        />
      );
    } else {
      return (
        <div
          style={{
            width: '40px',
            height: '40px',
            backgroundColor: '#d1d9e6',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50%',
            fontSize: '18px',
            color: '#fff',
          }}
        >
          {companyName.charAt(0).toUpperCase()}
        </div>
      );
    }
  };

  return (
    <AnimatePresence>
  <motion.div
    className="company-wrapper"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1, ease: 'easeOut' }}
  >
    {/* Your content goes here */}
  </motion.div>
    <div className="company-wrapper position-relative" style={{ minHeight: '100vh', padding: '1rem' }}>
      {!isLoggedIn && (
        <div className="login-overlay">
          <div className="login-overlay-content">
            <p className="fs-5 fw-semibold mb-0" style={{ userSelect: 'none' }}>
              Please login to view company details
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLoginRedirect}
              className="btn btn-dark px-4 py-2 d-flex align-items-center gap-2"
            >
              <FaPaperPlane /> Login
            </motion.button>
          </div>
        </div>
      )}

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Search */}
        <motion.div
          className="my-4 d-flex justify-content-end"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } }}
        >
          <div
            className={`search-wrapper position-relative ${searchFocused ? 'focused' : ''}`}
            style={{ width: '100%', maxWidth: '400px', transition: 'all 0.3s ease' }}
          >
            <FaSearch
              className="search-icon"
              style={{
                position: 'absolute',
                top: '50%',
                left: '15px',
                transform: 'translateY(-50%)',
                color: '#666',
                zIndex: 1,
                transition: 'transform 0.3s ease',
              }}
            />
            <input
              type="text"
              placeholder="Search for a company..."
              className="form-control form-control-lg shadow-sm search-input ps-5"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setShowSuggestions(e.target.value.length > 0);
              }}
              onFocus={() => {
                setSearchFocused(true);
                if (searchTerm.length > 0) setShowSuggestions(true);
              }}
              onBlur={() => {
                setSearchFocused(false);
                setTimeout(() => setShowSuggestions(false), 150);
              }}
              style={{
                borderRadius: '30px',
                background: '#f1f3f5',
                boxShadow: searchFocused
                  ? 'inset 2px 2px 5px #d1d9e6, inset -2px -2px 5px #ffffff, 0 4px 10px rgba(0,0,0,0.1)'
                  : 'inset 2px 2px 5px #d1d9e6, inset -2px -2px 5px #ffffff',
                transition: 'all 0.3s ease',
              }}
            />
            {searchTerm && (
              <motion.div
                className="clear-icon"
                style={{
                  position: 'absolute',
                  top: '50%',
                  right: '15px',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer',
                  color: '#999',
                  zIndex: 1,
                }}
                onClick={() => {
                  setSearchTerm('');
                  setShowSuggestions(false);
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.3, ease: 'easeInOut' } }}
                exit={{ opacity: 0 }}
              >
                <FaTimesCircle />
              </motion.div>
            )}
            {showSuggestions && (
              <motion.div
                className="suggestions-dropdown bg-white shadow rounded-4 p-2 mt-2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {filteredCompanies.length > 0 ? (
                  filteredCompanies.map((company) => (
                    <motion.div
                      key={company._id}
                      className="d-flex align-items-center gap-2 p-2 rounded-3 hover-bg"
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        setSelectedCompany(company);
                        setSearchTerm(company.name);
                        setShowSuggestions(false);
                      }}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2, ease: 'easeInOut' },
                      }}
                    >
                      {renderCompanyLogoOrLetter(company.name, company.img)}
                      <span>{company.name}</span>
                    </motion.div>
                  ))
                ) : (
                  <div className="no-results text-center p-2 text-muted">No companies found</div>
                )}
              </motion.div>
            )}
          </div>
        </motion.div>

        <div className="hide-on-small">
        {/* Filter & Sort */}
        <div className="d-flex flex-wrap gap-2 align-items-center mb-4">
  <AnimatePresence>
    {/* Role Filter */}
    {['Software', 'Analyst', 'Core'].map((role) => (
      <motion.button
        key={role}
        className={`btn btn-sm rounded-pill ${roleFilter === role ? 'btn-dark' : 'btn-outline-dark'}`}
        onClick={() => setRoleFilter(roleFilter === role ? '' : role)}
        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}  // Fade out when removed
        transition={{ opacity: { duration: 0.4 }, delay: 0.2 }}
      >
        <FaFilter className="me-2" />
        {role}
      </motion.button>
    ))}

    {/* Package Slab Filter */}
    {['<5', '5-10', '>10'].map((slab) => (
      <motion.button
        key={slab}
        className={`btn btn-sm rounded-pill border-2`}
        onClick={() => setPackageFilter(packageFilter === slab ? '' : slab)}
        whileHover={{
          scale: 1.05,
          backgroundColor: '#00509e', 
          color: '#fff',
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}  // Fade out when removed
        transition={{ opacity: { duration: 0.5 }, delay: 0.3 }}  // Slightly longer delay for staggered effect
        style={{
          borderColor: '#00509e',
          backgroundColor: packageFilter === slab ? '#00509e' : 'transparent',
          color: packageFilter === slab ? '#fff' : '#00509e',
        }}
      >
        <FaDollarSign
          className="me-2"
          style={{
            color: packageFilter === slab ? '#fff' : '#00509e',
          }}
        />
        {slab === '<5' ? '<5 LPA' : slab === '5-10' ? '5-10 LPA' : '10+ LPA'}
      </motion.button>
    ))}

    {/* Sort */}
    <motion.select
      className="form-select form-select-sm ms-auto"
      style={{ width: '200px' }}
      value={sortOption}
      onChange={(e) => setSortOption(e.target.value)}
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}  // Fade out when removed
      transition={{ opacity: { duration: 0.5 }, delay: 0.4 }}
    >
      <option value="">Sort by</option>
      <option value="package">Highest Package</option>
      <option value="name">A-Z Name</option>
    </motion.select>
  </AnimatePresence>
</div>
        </div>

        {loading ? (
            <div className="company-skeleton-list">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="company-list-item d-flex align-items-center gap-3 p-3 mb-3 shadow-sm rounded-4">
                <Skeleton circle width={40} height={40} />
                <div className="flex-grow-1">
                  <Skeleton height={20} width="60%" />
                </div>
                <Skeleton height={30} width={80} />
              </div>
            ))}
          </div>
        ) : (
          <AnimatePresence>
            <motion.div
              className="company-list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              {filteredCompanies.map((company, index) => (
                <motion.div
                  key={company._id}
                  className="company-list-item"
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  onClick={() => setSelectedCompany(company)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.6,
                    ease: 'easeOut',
                  }}
                >
                  {renderCompanyLogoOrLetter(company.name, company.img)}
                  <span className="company-list-name">{company.name}</span>
                  <motion.a
                    href={company.applylink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn btn-sm btn-primary d-flex align-items-center gap-2 ${!isLoggedIn ? 'disabled' : ''}`}
                    onClick={(e) => e.stopPropagation()}
                    style={{ pointerEvents: isLoggedIn ? 'auto' : 'none' }}
                    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.span
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <FaPaperPlane />
                    </motion.span>{' '}
                    Apply
                  </motion.a>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      {/* Popup */}
      <AnimatePresence>
        {selectedCompany && (
          <motion.div
            className="popup-overlay"
            onClick={() => setSelectedCompany(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="popup-card-new"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                className="popup-close-btn"
                onClick={() => setSelectedCompany(null)}
                whileHover={{ rotate: 180, scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaTimes />
              </motion.button>
              <div className="popup-img-wrapper">
                <img
                  src={selectedCompany.img || 'https://via.placeholder.com/100'}
                  alt={selectedCompany.name}
                  className="popup-img-new"
                />
              </div>
              <div className="popup-content">
                <h5 className="company-name text-center">{selectedCompany.name}</h5>
                <p className="chip text-center mb-2">Role: {selectedCompany.role}</p>
                <p className="chip text-center mb-4">Package: {selectedCompany.package}</p>
                <motion.a
                  href={selectedCompany.applylink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`popup-apply-btn d-flex align-items-center justify-content-center gap-2 ${!isLoggedIn ? 'disabled' : ''}`}
                  style={{ pointerEvents: isLoggedIn ? 'auto' : 'none' }}
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <FaPaperPlane />
                  </motion.span>{' '}
                  Apply Now
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </AnimatePresence>
  );
  
}

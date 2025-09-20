import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaHeart, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import Modal from "react-modal";

import logo from "../../assets/imgs/dd-logo.svg";

if (document.getElementById("root")) {
  Modal.setAppElement("#root");
}

const Header = () => {
  const cartItems = useSelector((state) => state.app.cart);
  const wishlistItems = useSelector((state) => state.app.wishlist);

  const totalCartItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  const totalWishlistItems = wishlistItems.length;

  const [user, setUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [auth]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
      handleCloseModal();
    } catch (err) {
      console.error(err.message);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header
        className="bg-white shadow-md py-4 sticky top-0 z-50"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        <div
          className="container mx-auto flex items-center justify-between px-4"
          style={{ maxWidth: "1400px" }}
        >
          {/* Desktop - Left Side: Nav Links */}
          <div className="hidden md:flex flex-1 justify-start items-center space-x-8 text-lg font-semibold ">
            <Link
              to="/"
              className="text-gray-700 hover:text-pink-600 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/menu"
              className="text-gray-700 hover:text-pink-600 transition-colors"
            >
              Menu
            </Link>
          </div>

          {/* Logo - Centered on Desktop, Left on Mobile */}
          <div className="flex-shrink-0">
            <Link to="/">
              <motion.img
                src={logo}
                alt="Dunkin' Donuts Logo"
                className="h-12"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              />
            </Link>
          </div>

          {/* Desktop - Right Side: Nav Links & Buttons */}
          <div className="hidden md:flex flex-1 justify-end items-center space-x-8 text-lg font-semibold">
            <Link
              to="/about"
              className="text-gray-700 hover:text-pink-600 transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-pink-600 transition-colors"
            >
              Contact
            </Link>
            <div className="flex items-center space-x-4">
              <Link
                to="/wishlist"
                className="relative text-2xl text-gray-700 hover:text-pink-600 transition-colors"
              >
                <FaHeart />
                {totalWishlistItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#9F135A] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalWishlistItems}
                  </span>
                )}
              </Link>
              <Link
                to="/cart"
                className="relative text-2xl text-gray-700 hover:text-pink-600 transition-colors"
              >
                <FaShoppingCart />
                {totalCartItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#9F135A] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalCartItems}
                  </span>
                )}
              </Link>
            </div>
            {user && user.displayName ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-700 font-medium">
                  {user.displayName}
                </span>
                <button
                  onClick={handleOpenModal}
                  className="bg-pink-600 text-white font-bold py-2 px-4 rounded-full hover:bg-pink-700 transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/signin"
                className="bg-pink-600 text-white font-bold py-2 px-4 rounded-full hover:bg-pink-700 transition-colors"
              >
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile View: Hamburger Menu & Icons */}
          <div className="md:hidden flex items-center space-x-4">
            <div className="flex items-center space-x-4">
              <Link
                to="/wishlist"
                className="relative text-2xl text-gray-700 hover:text-pink-600 transition-colors"
              >
                <FaHeart />
                {totalWishlistItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#9F135A] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalWishlistItems}
                  </span>
                )}
              </Link>
              <Link
                to="/cart"
                className="relative text-2xl text-gray-700 hover:text-pink-600 transition-colors"
              >
                <FaShoppingCart />
                {totalCartItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#9F135A] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalCartItems}
                  </span>
                )}
              </Link>
            </div>
            <button
              onClick={toggleSidebar}
              className="text-2xl text-gray-700 hover:text-pink-600 transition-colors"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <button
            onClick={toggleSidebar}
            className="text-2xl text-gray-700 hover:text-pink-600"
          >
            <FaTimes />
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4">
          <Link
            to="/"
            className="text-gray-700 hover:text-pink-600 transition-colors"
            onClick={toggleSidebar}
          >
            Home
          </Link>
          <Link
            to="/menu"
            className="text-gray-700 hover:text-pink-600 transition-colors"
            onClick={toggleSidebar}
          >
            Menu
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-pink-600 transition-colors"
            onClick={toggleSidebar}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 hover:text-pink-600 transition-colors"
            onClick={toggleSidebar}
          >
            Contact
          </Link>
          <hr />
          {user && user.displayName ? (
            <>
              <span className="text-gray-700 font-medium">
                {user.displayName}
              </span>
              <button
                onClick={() => {
                  handleOpenModal();
                  toggleSidebar();
                }}
                className="bg-pink-600 text-white font-bold py-2 px-4 rounded-full hover:bg-pink-700 transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/signin"
              className="bg-pink-600 text-white font-bold py-2 px-4 rounded-full hover:bg-pink-700 transition-colors"
              onClick={toggleSidebar}
            >
              Sign In
            </Link>
          )}
        </nav>
      </div>

      {/* Modal for Logout */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Logout Confirmation"
        className="Modal-content"
        overlayClassName="Modal-overlay"
      >
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm mx-auto my-12 text-center">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Logout</h2>
          <p className="text-gray-600 mb-6">
            Are you sure you want to log out?
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={handleLogout}
              className="bg-pink-600 text-white font-bold py-2 px-4 rounded-full hover:bg-pink-700 transition-colors"
            >
              Yes, Logout
            </button>
            <button
              onClick={handleCloseModal}
              className="bg-gray-200 text-gray-700 font-bold py-2 px-6 rounded-full hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Header;

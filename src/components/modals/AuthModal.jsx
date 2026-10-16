import { useContext, useEffect, useState } from "react";
import {
  FaXmark,
  FaUser,
  FaEnvelope,
  FaLock,
  FaPhone,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa6";
import { loginUser, registerUser } from "../../services/authService";
import { AuthContext } from "../../context/AuthContext";

export default function AuthModal({ isOpen, onClose, initialMode = "login" }) {
  const [mode, setMode] = useState(initialMode);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isOpen) {
      setMode(initialMode || "login");
      setError("");
    }
  }, [isOpen, initialMode]);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { user, setUser } = useContext(AuthContext);
  const isLogin = mode === "login";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!isLogin && formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    // Fix common typos in email domains (e.g. gmal.com, gmai.com, gamil.com -> gmail.com)
    let cleanedEmail = (formData.email || "").trim().toLowerCase();
    cleanedEmail = cleanedEmail.replace(/@(gmai|gmal|gamil|gmial|gmaill)\.com$/i, "@gmail.com");

    const payload = {
      ...formData,
      email: cleanedEmail,
    };

    try {
      setLoading(true);

      const response = isLogin
        ? await loginUser(payload)
        : await registerUser(payload);

      if (response?.data?.token) {
        localStorage.setItem("token", response.data.token);
      }
      if (response?.data?.user) {
        setUser(response.data.user);
      }
      onClose();
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center
      bg-black/70 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-2xl border
        border-gray-700 bg-[#0B0F19] p-6 sm:p-8 text-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white"
          aria-label="Close modal"
        >
          <FaXmark size={22} />
        </button>

        <h2 className="text-2xl font-bold">
          {isLogin ? "Welcome Back!" : "Create Account"}
        </h2>

        <p className="mt-2 text-sm text-gray-400">
          {isLogin
            ? "Login to your VahanSetu account"
            : "Register to get started with VahanSetu"}
        </p>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="relative">
              <FaUser className="absolute left-4 top-4 text-gray-400" />
              <input
                type="text"
                placeholder="Full Name"
                required
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-700
                bg-[#121722] py-3 pl-11 pr-4 outline-none
                focus:border-orange-500"
              />
            </div>
          )}

          {!isLogin && (
            <div className="relative">
              <FaPhone className="absolute left-4 top-4 text-gray-400" />
              <input
                type="text"
                placeholder="Phone No"
                required
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-700
                bg-[#121722] py-3 pl-11 pr-4 outline-none
                focus:border-orange-500"
              />
            </div>
          )}

          <div className="relative">
            <FaEnvelope className="absolute left-4 top-4 text-gray-400" />
            <input
              type="email"
              placeholder="Email Address"
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-700
              bg-[#121722] py-3 pl-11 pr-4 outline-none
              focus:border-orange-500"
            />
          </div>

          <div className="relative">
            <FaLock className="absolute left-4 top-4 text-gray-400" />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              name="password"
              value={formData.password}
              onChange={handleChange}
              minLength={6}
              className="w-full rounded-xl border border-gray-700
    bg-[#121722] py-3 pl-11 pr-12 outline-none
    focus:border-orange-500"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-4 text-gray-400 hover:text-white"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {!isLogin && (
            <div className="relative">
              <FaLock className="absolute left-4 top-4 text-gray-400" />

              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                required
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                minLength={6}
                className="w-full rounded-xl border border-gray-700
    bg-[#121722] py-3 pl-11 pr-12 outline-none
    focus:border-orange-500"
              />

              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-4 text-gray-400 hover:text-white"
                aria-label={
                  showConfirmPassword ? "Hide password" : "Show password"
                }
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          )}

          {error && <p className="text-sm text-red-500">{error}</p>}

          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r
            from-[#FF5500] to-[#FF6B00] py-3 font-semibold
            transition hover:brightness-110"
            disabled={loading}
          >
            {loading ? "Please wait..." : isLogin ? "Login" : "Create Account"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-400">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => {
              setMode(isLogin ? "register" : "login");
              setError("");
            }}
            className="font-semibold text-[#FF6500] hover:underline"
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}

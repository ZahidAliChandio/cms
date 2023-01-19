const { createContext, useState, useEffect } = require("react");

export const AuthContext = createContext({
  isLoggedIn: false,
  // Authorization
  token: null,
  userId: null,
  login: () => {},
  logout: () => {},
});

let logoutTimer;

const AuthProvider = (props) => {
  const [token, setToken] = useState(false);
  const [userId, setUserId] = useState(null);
  const [tokenExpirationDate, setTokenExpirationDate] = useState();

  const login = (uid, token, expirationDate) => {
    setToken(token);
    const tokenExpirationDate =
      expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    setTokenExpirationDate(tokenExpirationDate);
    localStorage.setItem(
      "userData",
      JSON.stringify({
        userId: uid,
        token,
        expiration: tokenExpirationDate.toISOString(),
      })
    );
    setUserId(uid);
  };
  const logout = () => {
    setToken(null);
    setUserId(null);
    setTokenExpirationDate(null);
    localStorage.removeItem("userData");
  };

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData && storedData.token) {
      login(storedData.userId, storedData.token);
    }
  }, []);

  useEffect(() => {
    if (token && tokenExpirationDate) {
      const remainingTime =
        tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, tokenExpirationDate]);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: token, token, userId, login, logout }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

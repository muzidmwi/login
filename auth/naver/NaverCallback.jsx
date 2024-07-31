import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const NaverCallback = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const clientId = useSelector((state) => state.auth.clientId);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get("code");
    const state = queryParams.get("state");
    const error = queryParams.get("error");
    const errorDescription = queryParams.get("error_description");

    const handleLoginSuccess = (response) => {
      dispatch({
        type: "LOGIN",
        payload: {
          user: "admin",
          userType: response.data.userType,
          expiration: response.data.expiresIn,
          clientId: response.data.clientId,
        },
      });
      navigate("/", { replace: true });
      window.history.pushState(null, null, window.location.href);
    };

    const handleSignUp = (response) => {
      alert("회원가입을 진행합니다.");
      sessionStorage.setItem("oauth2UserId", response.data.oauth2UserId);
      navigate("/signup", { replace: true });
      window.history.pushState(null, null, window.location.href);
    };

    const handleError = (error) => {
      if (error.response && error.response.data) {
        const { code, message } = error.response.data;
        if (code === "AUTH009") {
          alert(message);
        } else if (code === "USER_E001") {
          alert(message);
        } else {
          alert("error");
        }
      } else {
        alert("API SERVER ERROR");
      }
      navigate("/signin", { replace: true });
      window.history.pushState(null, null, window.location.href);
    };

    if (!isProcessing && code && state === process.env.REACT_APP_NAVER_STATE) {
      setIsProcessing(true);

      axios
        .post(
          "/oauth/naver/token",
          { authCode: code },
          { withCredentials: true }
        )
        .then((response) => {
          if (
            response.data.userType === null ||
            response.data.code === "AUTH_S003"
          ) {
            handleSignUp(response);
          } else if (response.data.userType === "GENERAL") {
            handleLoginSuccess(response);
          }
        })
        .catch(handleError);
    } else if (error != null) {
      alert(errorDescription);
    } else if (!code) {
      navigate("/signin", { replace: true });
      window.history.pushState(null, null, window.location.href);
    }
  }, [location, navigate, dispatch, clientId, isProcessing]);

  useEffect(() => {
    const handlePopState = () => {
      navigate("/signin", { replace: true });
      window.history.pushState(null, null, window.location.href);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [navigate]);

  return <div>Loading...</div>;
};

export default NaverCallback;

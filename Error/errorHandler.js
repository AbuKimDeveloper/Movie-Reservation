import CustomError from "./expressError";
import { NODE_ENV } from "../config/envVariables";
// Helper Functions
const isDev = () => NODE_ENV === "development";
const isProd = () => NODE_ENV === "production";

// Error Handlers
const castErrorHandler = (err) => {
  const msg = `Invalid value for ${err.path}: ${err.value}!`;
  return new CustomError(msg, 400);
};

const duplicateKeyErrorHandler = (err) => {
  const name = Object.keys(err.keyValue).join(", ");
  const msg = `Duplicate value for field(s): ${name}. Please use different values!`;
  return new CustomError(msg, 400);
};

const validationErrorHandler = (err) => {
  const errors = Object.values(err.errors).map((val) => val.message);
  const msg = `Validation Error: ${errors.join(". ")}`;
  return new CustomError(msg, 400);
};

const jwtErrorHandler = () => {
  const msg = "Invalid token. Please log in again!";
  return new CustomError(msg, 401);
};

const jwtExpiredErrorHandler = () => {
  const msg = "Your token has expired. Please log in again!";
  return new CustomError(msg, 401);
};

// Development Error Response
const devErrors = (res, error) => {
  res.status(error.statusCode).json({
    status: error.statusCode,
    message: error.message,
    stack: error.stack,
    error,
  });
};

// Production Error Response
const prodErrors = (res, error) => {
  if (error.isOperational) {
    res.status(error.statusCode).json({
      message: error.message,
      showError: error.showError,
    });
  } else {
    console.error("ERROR 💥", error);
    res.status(500).json({
      status: "error",
      message: "Something went wrong! Please try again later.",
    });
  }
};

// Main Error Handler Middleware
export const errorHandler = (error, req, res, next) => {
  error.statusCode = error.statusCode || 500;

  if (isDev()) {
    devErrors(res, error);
  } else if (isProd()) {
    // Handle specific errors
    if (error.name === "CastError") error = castErrorHandler(error);
    if (error.code === 11000) error = duplicateKeyErrorHandler(error);
    if (error.name === "ValidationError") error = validationErrorHandler(error);
    if (error.name === "JsonWebTokenError") error = jwtErrorHandler();
    if (error.name === "TokenExpiredError") error = jwtExpiredErrorHandler();

    prodErrors(res, error);
  }
  next();
};

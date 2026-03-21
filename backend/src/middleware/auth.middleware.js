export const protectRoute = async (req, res, next) => {
  if (!req.auth().isAuthenticated) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized - you must be logged in",
    });
  }
  next();
};

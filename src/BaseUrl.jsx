let baseUrl;
if (process.env.NODE_ENV === "production") {
  baseUrl = "https://vans-hud2.onrender.com/api";
} else {
  baseUrl = "http://localhost:3000/api";
}

export default baseUrl;

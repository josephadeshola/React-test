let baseUrl;
if (process.env.NODE_ENV === "production") {
  baseUrl = "https://vans-hud2.onrender.com/";
} else {
  baseUrl = "http://localhost:3000/";
}

export default baseUrl;

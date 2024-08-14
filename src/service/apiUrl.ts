let API_URL: string;

if (process.env.NODE_ENV === "production")
    API_URL = "https://daily-readings-zeta.vercel.app"
else
    API_URL = "http://localhost:3001"

export default API_URL;
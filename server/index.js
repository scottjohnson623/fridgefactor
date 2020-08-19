require("dotenv").config();
const app = require("./app.js");

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`App is listening on http://localhost:${PORT}`);
});

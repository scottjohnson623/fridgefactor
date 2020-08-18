const app = require("./app.js");
require("dotenv").config();
const PORT = 9000; //temporary

app.listen(PORT, () => {
  console.log(`App is listening on http://localhost:${PORT}`);
});

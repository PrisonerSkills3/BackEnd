const server = require("./api/server");
require("dotenv").config();

const PORT = process.env.PORT || 9001;

server.listen(PORT, () => {
  console.log(`** Console listening on port ${PORT} **`);
});

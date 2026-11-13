const { app, PORT } = require("./src/app.js");

app.listen(PORT, () => {
  console.log(`Server is running on port - ${PORT}`);
});

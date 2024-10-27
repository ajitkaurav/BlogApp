const express = require('express');
const app = express();
app.use(express.json());
const PORT=process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is Listening on PORT:", PORT);
});
app.get("/status", (request,response)=>
{
    const status={
        "Status" : "running"
    };
    response.send(status);
});
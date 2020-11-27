const express = requrie('express')

const app = express()

const PORT = process.env.PORT || 3535

db.sync()
.then(()=>{
    app.listen(PORT,()=>console.log(`Site is hosted at http://localhost:${PORT}`))
})
.catch((err)=>console.error(err))
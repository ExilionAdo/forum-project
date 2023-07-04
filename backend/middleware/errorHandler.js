
const errorHandler = (err, req, res, next)  => {
   const statusCode = res.statusCode !== 200 ? res.status(res.statusCode) : res.status(500)

   res.json({error: err.message, status: res.statusCode})

}
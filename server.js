
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
 
server.use(middlewares);
server.use(router); // Use the router for all routes
server.listen(process.env.PORT || 3000, () => {
  console.log('JSON Server is running');
});


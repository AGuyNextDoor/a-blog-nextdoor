/* global db */
db.createUser({
  user: "mongo-basics-app",
  pwd: "password",
  roles: [{ role: "readWrite", db: "mongo-basics" }],
});
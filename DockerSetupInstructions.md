# Docker server setup instructions

When using docker to host the mongo DB insted of Atlas change ./api/app.module.ts line 20 to
```
MongooseModule.forRoot(`mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_URL}`),
```

then shell into the docker conainer and execute `mongosh`

inside of mongosh run the following to create a user
```
use admin
db.createUser(
  {
    user: "myUserAdmin",
    pwd: passwordPrompt(), // or cleartext password
    roles: [
      { role: "userAdminAnyDatabase", db: "admin" },
      { role: "readWriteAnyDatabase", db: "admin" }
    ]
  }
)
```

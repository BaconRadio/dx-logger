# dx-logger

## Initial Setup
- docker-compose -f stack.yml up
- db.createUser({user: "server", pwd: "password", roles: [{role:"readWrite", db:"dx-logger-db"}]})
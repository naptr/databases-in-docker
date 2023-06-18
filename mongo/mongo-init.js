db = db.getSiblingDB('ews')

db.createUser(
  {
    user: "local",
    pwd: "local",
    roles: [
      {
        role: "readWrite",
        db: "ews"
      }
    ]
  }
)

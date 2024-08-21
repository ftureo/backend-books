# Endpoint

## Books

### POST /create-book

#### Request

```json
{
    "bookTitle": String,
    "bookAuthor": String,
    "bookImage": img/jpeg, img/png
}
```

--- Users

#### Prefix: /api/auth

### POST /register

#### Request

```json
{
    "username": String,
    "dni": Number,
    "email": String,
    "password": String
}
```

### POST /login

#### Request

```json
{
    "email": String,
    "password": String
}
```

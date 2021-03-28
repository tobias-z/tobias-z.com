---
title: Rest persons DTO
description:
  This was my our first time creating a rest api which we would then use on the
  client side afterwards
slug: rest-persons-dto
date: 28/03/2021
---

[![Build Status](https://travis-ci.com/tobias-z/dat3sem-week5-rest-persons-dto.svg?branch=main)](https://travis-ci.com/tobias-z/dat3sem-week5-rest-persons-dto)

# REST Persons dto assignment

## Author

👤 **Tobias Zimmermann**

- [Github](https://github.com/CphTobias)

## API Documentation

🏠 [Project link](https://tobias-z.com/)

**Base URL:** https://api.tobias-z.com/rest-persons-dto

#### Person

```http
GET /person/{id}
```

| Description       |
| :---------------- |
| Find person by id |

```http
GET /person/
```

| Description     |
| :-------------- |
| Find all people |

---

#### Required body for POST and PUT

```javascript
{
      "firstName": string,
      "lastName": string,
      "phoneNumber": string,
      "address": {
          "street": string,
          "zip": string,
          "city": string
      }
}
```

---

```http
POST /person/
```

| Description         |
| :------------------ |
| Create a new person |

```http
PUT /person/{id}
```

| Description                            |
| :------------------------------------- |
| Updates an existing person by their id |

```http
DELETE /person/{id}
```

| Description           |
| :-------------------- |
| Delete a person by id |

## Responses

A single person:

```javascript
{
      "id": int,
      "firstName": string,
      "lastName": string,
      "phoneNumber": string,
      "address": {
          "street": string,
          "zip": string,
          "city": string
      }
}
```

Multiple people:

```javascript
{
    "all": [
        {
          "id": int,
          "firstName": string,
          "lastName": string,
          "phoneNumber": string,
          "address": {
              "street": string,
              "zip": string,
              "city": string
          }
        },
    ]
}
```

Error response:

```javascript
{
      "code": int,
      "message": string
}
```

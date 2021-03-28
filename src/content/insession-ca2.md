---
title: Insession CA2
description: This is our CA2 project from Cphbusiness flow-2
slug: insession-ca2
date: 27/03/2021
---

# InSession CA2 server

[![Build Status](https://travis-ci.com/tobias-z/insession-CA2-backend.svg?branch=master)](https://travis-ci.com/tobias-z/insession-CA2-backend)

### [🏠Github repository](https://github.com/tobias-z/insession-CA2-backend)

## Authors

👤 **Peter R Andersen**

- [Github](https://github.com/Peter-Rambeck)

👤 **Tobias Zimmermann**

- [Github](https://github.com/tobias-z)

👤**Jens Gelbek**

- [Github](https://github.com/jensgelbek)

👤**Rasmus Ditlev Hansen**

- [Github](https://github.com/RasmusDH)

# API documentation

## Base URL : https://api.tobias-z.com/insession-CA2/api

| Method | URL                        | Request Body (JSON) | Response (JSON) | Error (e) |
| :----- | :------------------------- | :------------------ | :-------------- | :-------- |
| GET    | /persons/phone/{number}    |                     | Single person   | YES       |
| GET    | /persons/hobby/{hobbyName} |                     | Many people     | YES       |
| GET    | /persons/city/{zipCode}    |                     | Many people     | YES       |
| GET    | /persons                   |                     | Many people     | YES       |
| GET    | /persons/{id}              |                     | Single person   | YES       |
| PUT    | /persons/{id}              | Person request      | Single person   | YES       |
| POST   | /persons                   | Person request      | Single person   | YES       |
| GET    | /cities                    |                     | Cities          | YES       |
| GET    | /hobbies                   |                     | Hobbies         | YES       |

---

## Request Body for POST and PUT

**Person**

```javascript
{
  "email": String,
  "firstName": String,
  "lastName": String,
  "phones": [
    {
      "number": String,
      "description": String
    }
  ],
  "hobby": [
    {
      "name": String,
      "description": String
    }
  ],
  "address": {
    "street": String,
    "additionalInfo": String,
    "cityInfo": {
      "zipCode": String,
      "city": String
    }
  }
}
```

---

## Responses

**A single person**

```javascript
{
  "id": Number,
  "email": String,
  "firstName": String,
  "lastName": String,
  "phones": [
    {
      "id": Number,
      "number": String,
      "description": String
    }
  ],
  "hobby": [
    {
      "id": Number,
      "name": String,
      "description": String
    }
  ],
  "address": {
    "street": String,
    "additionalInfo": String,
    "cityInfo": {
      "zipCode": String,
      "city": String
    }
  }
}
```

**Many people**

```javascript
{
  "all": [
    {
      "id": Number,
      "email": String,
      "firstName": String,
      "lastName": String,
      "phones": [
        {
          "id": Number,
          "number": String,
          "description": String
        }
      ],
      "hobby": [
        {
          "id": Number,
          "name": String,
          "description": String
        }
      ],
      "address": {
        "street": String,
        "additionalInfo": String,
        "cityInfo": {
          "zipCode": String,
          "city": String
        }
      }
    }
  ]
}
```

**Cities**

```javascript
{
  "all": [
    {
      "zipCode": String,
      "city": String
    }
  ]
}
```

**Scripts**

```javascript
{
  "worked": String
}
```

**Hobbies**

```javascript
{
  "all": [
    {
      "id": Number,
      "name": String,
      "wikiLink": String,
      "type": String
    }
  ]
}
```

**Errors**

```javascript
{
    "code": String,
    "message": String
}
```

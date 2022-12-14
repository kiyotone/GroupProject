# Api Endpoints

## Login or Get Access Token

* **URL**

    /auth/token

* **Method:**

    `POST`

* **Data Params**

    `username=[string]` <br />
    `password=[string]`

* **Success Response**

    * **Code:** 200 <br />
    **Content:** `{refresh: <refresh-token>, access: <access-token>}`

* **Error Response**

    TODO

## Register

* **URL**

    /auth/register

* **Method:**

    `POST`

* **Data Params**

    `username=[string]` <br />
    `password=[string]`

* **Success Response**

    * **Code:** 200 <br />
    **Content:** `{refresh: <refresh-token>, access: <access-token>}`

* **Error Response**

    TODO

## Get user

* **URL**

    /auth/getuser

* **Method:**

    `GET`

* **Required Headers:**

    `Authorization: Bearer <access-token>`

* **Success Response**

    * **Code:** 200 <br />
    **Content:** `{username: <username>}`

* **Error Response**

    TODO

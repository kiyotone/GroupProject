# Api Endpoints

## **Login or Get Access Token**

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

    * **Code:** 401 Unauthorized <br />
    **Content:** `{detail: "No active account found with the given credentials"}`

    * **Code:** 400 Bad Request <br />
    **Content:** `{"username": ["this field is required"], "password": ["this field is required"]}`

---

## **Refresh access token using refresh-token**

* **URL**

    /auth/token/refresh

* **Method:**

    `POST`

* **Data Params**

    `refresh: <refresh-token>`

* **Success Response**

    * **Code:** 200 <br />
    **Content:** `{refresh: <refresh-token>, access: <access-token>}`

* **Error Response**

    * **Code:** 400 Bad Request <br />
    **Content:** `{"refresh": ["this field is required"]}`

    * **Code:** 401 Unauthorized <br />
    **Content:** `{"detail": "token is invalid or expired", "code": "token_not_valid"}`

---

## **Verify access token**

* **URL**

    /auth/token/refresh

* **Method:**

    `POST`

* **Data Params**

    `refresh: <refresh-token>`

* **Success Response**

    * **Code:** 200 <br />
    **Content:** `{}`

* **Error Response**

    * **Code:** 400 Bad Request <br />
    **Content:** `{"token": ["this field is required"]}`

    * **Code:** 401 Unauthorized <br />
    **Content:** `{"detail": "token is invalid or expired", "code": "token_not_valid"}`

---

## **Register and get access tokens**

* **URL**

    /auth/register

* **Method:**

    `POST`

* **Data Params**

    `username=[string]` <br />
    `password=[string]`

* **Success Response**

    * **Code:** 201 Created <br />
    **Content:** `{refresh: <refresh-token>, access: <access-token>}`

* **Error Response**

    * **Code:** 400 Bad Request <br />
    **Content:** `{"username": ["this field is required"], "password": ["this field is required"]}`

    * **Code:** 409 Conflict <br />
    **Content:** `{"detail": "User already exists"}`

---

## **Get user**

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

    * **Code:** 401 Unauthorized <br />

---

## **Add Post**

* **URL**

    /posts/add

* **Method:**
    
    `POST`

* **Data Params**
    
    `title=[string]` <br />
    `content=[string]`

* **Required Headers:**

    `Authorization: Bearer <access-token>`

* **Success Response**

    * **Code:** 201 Created <br />
    **Content:** `{id: <post-id>}`

* **Error Response**
    
    * **Code:** 400 Bad Request <br />
    **Content:** `{"title": ["this field is required"], "content": ["this field is required"]}`

    * **Code:** 401 Unauthorized <br />

---

## **Get Posts**

* **URL**

    /posts/getposts

* **Method:**
    
    `GET`

* **Data Params**
    
    `start=[integer]`[default=0]

* **Required Headers**

    `Authorization: Bearer <access-token>`

* **Success Response**

    * **Code:** 200 <br />
    **Content:** `{"posts": [{"id": <post-id>,"title": <title>, "content": <content>, "author": <post-author>, "created_at": <post-creation-date>}, ...]}`

* **Error Response**

    * **Code:** 400 Bad Request <br />
    **Content:** `{"detail": "Invalid data parameters"}`

    * **Code:** 401 Unauthorized <br />

## **Follow and Unfollow**

* **URL**

    /follow/`<username: string>`

* **Method**

    `PUT`, `DELETE`

* **Required Headers**

    `Authorization: Bearer <access-token>`

* **Success Response**

    * **Code:** 202 Accepted

* **Error Response**

    * **Code:** 401 Unauthorized <br />

    * **Code:** 409 Conflict <br />
    **Content:** `{"detail": "User not found"}`

    * **Code:** 409 Conflict <br />
    **Content:** `{"detail": "Already following"}`

    * **Code:** 409 Conflict <br />
    **Content:** `{"detail": "Not following"}`


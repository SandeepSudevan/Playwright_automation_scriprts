import { test, expect } from "@playwright/test";

test("API_Testing", async function ({ request }) {
  const tokenData = {
    "username": "admin",
    "password": "password123",
  };
  const getToken = await request.post(
    "https://restful-booker.herokuapp.com/auth",
    { headers: { "Content-Type": "application/json" }, data: tokenData }
  );
  const getJson = await getToken.json();
  const token = getJson.token;

  const postData = {
    "firstname": "Jim",
    "lastname": "Brown",
    "totalprice": 111,
    "depositpaid": true,
    "bookingdates": {
      "checkin": "2018-01-01",
      "checkout": "2019-01-01",
    },
    "additionalneeds": "Breakfast",
  };
  const post = await request.post(
    "https://restful-booker.herokuapp.com/booking",
    {
      headers: { "Content-Type": "application/json" },
      data: postData,
    }
  );
  const postJson = await post.json();
  const bookingID = postJson.bookingid;

  const putData = {
    "firstname": "Sandeep",
    "lastname": "Daszio",
    "totalprice": 333,
    "depositpaid": true,
    "bookingdates": {
      "checkin": "2018-01-01",
      "checkout": "2019-01-01",
    },
    "additionalneeds": "Breakfast",
  };

  const put = await request.put(
    `https://restful-booker.herokuapp.com/booking/${bookingID}`,
    {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Cookie": `token=${token}`,
      },
      data: putData,
    }
  );

  const putJson = await put.json();
  console.log(putJson);

  const deleteID = await request.delete(
    `https://restful-booker.herokuapp.com/booking/${bookingID}`,
    {
      headers: {
        "Content-Type": "application/json",
        "Cookie": `token=${token}`,
      },
    }
  );

  expect(deleteID.status()).toBe(201);
  expect(deleteID.statusText()).toBe("Created");
});

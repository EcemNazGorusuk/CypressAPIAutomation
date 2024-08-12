import Data from "../dataHelper/data";

describe("User Tests", () => {
  const data = new Data();

  it("User Create", () => {
    //This test sends a POST request to the Petstore API and checks
    //if the response status is 200, indicating success.
    cy.request({
      method: "POST",
      url: "https://petstore.swagger.io/v2/user",
      body: data.bodyPayload(
        "ecem",
        "ecem",
        "naz",
        "ecemnazgorusuk@gmail.com",
        "123",
        "05053456765",
        0
      ),
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });


  it("Get User Info", () => {
    //This test sends a GET request to the Petstore API and checks
    //if the response status is 200, indicating success.
    cy.request("GET", "https://petstore.swagger.io/v2/user/ecem").then(
      (response) => {
        expect(response.status).to.eq(200);
      }
    );
  });


  it("Update User", () => {
    //This test sends a PUT request to the Petstore API and checks
    //if the response status is 200, indicating success.

    cy.request({
      method: "PUT",
      url: "https://petstore.swagger.io/v2/user/ecem",
      body: data.bodyPayload(
        "ecem",
        "ecem naz",
        "görüşük",
        "ecemnazgorusuk@gmail.com",
        "123",
        "05053456765",
        0
      ),
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });


  it("Delete User", () => {
    //This test sends a DELETE request to the Petstore API and checks
    //if the response status is 200, indicating success.

    cy.request({
      method: "DELETE",
      url: "https://petstore.swagger.io/v2/user/ecem",
      headers: data.headerPayload(),
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  
  it("Login User", () => {
    cy.request({
      method: "GET",
      url: "https://petstore.swagger.io/v2/user/login",
      headers: data.userSign("ecem", "12345"),
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });


  it("Logout User", () => {
    cy.request({
      method: "GET",
      url: "https://petstore.swagger.io/v2/user/logout",
      headers: data.headerPayload(),
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });


  it("Create With List", () => {
    cy.request({
      method: "POST",
      url: "https://petstore.swagger.io/v2/user/createWithList",
      body: data.listPostData(),
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });


  it("Create With Array", () => {
    cy.request({
      method: "POST",
      url: "https://petstore.swagger.io/v2/user/createWithArray",
      headers: data.headerPayload(),
      body: data.arrayPostData(),
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});

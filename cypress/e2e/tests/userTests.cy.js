describe("User Tests", () => {
  it("User Create", () => {
    //This test sends a POST request to the Petstore API and checks
    //if the response status is 200, indicating success.
    const postData = {
      id: 54321,
      username: "ecem",
      firstName: "ecem",
      lastName: "naz",
      email: "ecemnazgorusuk@gmail.com",
      password: "123",
      phone: "05053456765",
      userStatus: 0,
    };
    cy.request({
      method: "POST",
      url: "https://petstore.swagger.io/v2/user",
      body: postData,
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
    const postData = {
      id: 54321,
      username: "ecem",
      firstName: "ecem naz",
      lastName: "görüşük",
      email: "ecemnazgorusuk@gmail.com",
      password: "123",
      phone: "05053456765",
      userStatus: 0,
    };
    cy.request({
      method: "PUT",
      url: "https://petstore.swagger.io/v2/user/ecem",
      body: postData,
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Delete User", () => {
    //This test sends a DELETE request to the Petstore API and checks
    //if the response status is 200, indicating success.
    const headerBody = { accept: "application/json" };
    cy.request({
      method: "DELETE",
      url: "https://petstore.swagger.io/v2/user/ecem",
      Headers: headerBody,
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});

describe("User Tests", () =>{
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
      headers: headerBody,
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });


  it("Login User", () => {
    const queryBody = {
      username:"ecem",
      password:"12345"
    };
    cy.request({
      method: "GET",
      url: "https://petstore.swagger.io/v2/user/login",
      headers: queryBody,
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Logout User", () => {
    const headerBody = { accept: "application/json" };
    cy.request({
      method: "GET",
      url: "https://petstore.swagger.io/v2/user/logout",
      headers: headerBody,
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

 
  it("Create With List", () => {
    const postData =[ {
      "id": 1,
      "username": "ahmet",
      "firstName": "Ahmet",
      "lastName": "Öz",
      "email": "ahmet1@gmail.com",
      "password": "1234",
      "phone": "345",
      "userStatus": 0
    },
    {
      "id": 2,
      "username": "mehmet",
      "firstName": "Mehmet",
      "lastName": "Masad",
      "email": "mehmet@gmail.com",
      "password": "234",
      "phone": "123213",
      "userStatus": 0
    }];
    cy.request({
      method: "POST",
      url: "https://petstore.swagger.io/v2/user/createWithList",
      body: postData,
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });


  it("Create With Array", () => {
    const postData =[ {
      "id": 3,
      "username": "duygu",
      "firstName": "Duygu",
      "lastName": "Öz",
      "email": "duygu@gmail.com",
      "password": "3456",
      "phone": "123456",
      "userStatus": 0
    }];
    const headerBody={
      "accept":"application/json",
      "Content-Type":"application/json"
    }
    cy.request({
      method: "POST",
      url: "https://petstore.swagger.io/v2/user/createWithArray",
      headers:headerBody,
      body: postData,
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});

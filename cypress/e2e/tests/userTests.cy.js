import Params from "../dataHelper/params";
import UserData from "../dataHelper/userData";

describe("User Tests", () => {
  const data = new UserData();
  const params=new Params();
  const urls=params.url();

   
  it("/v2/user userCreate", () => {
    //This test sends a POST request to the Petstore API and checks
    //if the response status is 200, indicating success.
    cy.request({
      method: "POST",
      url:urls+'/v2/user',
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


  it("/v2/user/ecem getUserInfo", () => {
    //This test sends a GET request to the Petstore API and checks
    //if the response status is 200, indicating success.
    cy.request("GET",urls+'/v2/user/ecem').then(
      (response) => {
        expect(response.status).to.eq(200);
      }
    );
  });


  it("/v2/user/ecem updateUser", () => {
    //This test sends a PUT request to the Petstore API and checks
    //if the response status is 200, indicating success.
    cy.request({
      method: "PUT",
      url:  urls+'/v2/user/ecem',
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


  it('/v2/user/ecem updateUserFailure', () => {
    cy.request({
        method: 'PUT',
        url:  urls+'/v2/user/',
        headers: data.bodyPayload(),
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(405) 
        })
})

  it("/v2/user/ecem deleteUser", () => {
    //This test sends a DELETE request to the Petstore API and checks
    //if the response status is 200, indicating success.
    cy.request({
      method: "DELETE",
      url:  urls+'/v2/user/ecem',
      headers: data.headerPayload(),
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  

  it("/v2/user/login loginUser", () => {
    cy.request({
      method: "GET",
      url:  urls+'/v2/user/login',
      headers: data.userSign("ecem", "12345"),
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });



  it("/v2/user/logout logoutUser", () => {
    cy.request({
      method: "GET",
      url:  urls+'/v2/user/logout',
      headers: data.headerPayload(),
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });



  it("/v2/user/createWithList createWithList", () => {
    cy.request({
      method: "POST",
      url: urls+'/v2/user/createWithList',
      body: data.listPostData(),
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });



  it("/v2/user/createWithArray createWithArray", () => {
    cy.request({
      method: "POST",
      url: urls+'/v2/user/createWithArray',
      headers: data.headerPayload(),
      body: data.arrayPostData(),
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});

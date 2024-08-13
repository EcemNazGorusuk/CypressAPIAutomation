import Params from "../dataHelper/params";
import PetData from "../dataHelper/petData";

describe("Pet Tests", () => {
  const data = new PetData();
  const params = new Params();
  const urls = params.url();


  it("/v2/pet addNewDog", () => {
    cy.request({
      method: "POST",
      url: urls + "/v2/pet",
      body: data.bodyPayload(
        "Köpük",
        "https://thumbs.dreamstime.com/b/golden-retriever-dog-21668976.jpg",
        "dog",
        "available"
      ),
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("/v2/pet addNewCat", () => {
    cy.request({
      method: "POST",
      url: urls + "/v2/pet",
      body: data.bodyPayload(
        "Simba",
        "https://trthaberstatic.cdn.wp.trt.com.tr/resimler/1174000/1174272.jpg",
        "cat",
        "pending"
      ),
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });


  it("/v2/pet/12345 getPetInfo", () => {
    cy.request("GET", urls + "/v2/pet/12345").then((response) => {
      expect(response.status).to.eq(200);
    });
  });


  it("/v2/pet/findByStatus?status=available getPetAvailableStatus", () => {
     cy.request("GET", urls + "/v2/pet/findByStatus?status=available").then((response) => {
       expect(response.status).to.eq(200);
     });
   });


  it("/v2/pet/12345a getPetInfoFailure", () => {
    cy.request({
      method: "GET",
      url: urls + "/v2/pet/12345a",
      failOnStatusCode: false, // Added because we expect 'Not Found' error
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });
  

  it("/v2/pet/12345a getPetInfoReturnsNull", () => {
    cy.request({
      method: "GET",
      url: urls + "/v2/pet/",
      failOnStatusCode: false, // Added because we expect 'Null' error
    }).then((response) => {
      expect(response.status).to.eq(405);
    });
  });


  it("/v2/pet updateExistingPet", () => {
    cy.request({
      method: "PUT",
      url: urls + "/v2/pet",
      body: data.bodyPayload(
        "Pamuk",
        "https://thumbs.dreamstime.com/b/golden-retriever-dog-21668976.jpg",
        "dog",
        "available"
      ),
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });



  it("/v2/pet updateExistingPetInvalidData", () => {
    cy.request({
      method: "PUT",
      url: urls + "/v2/pet",
      body: {
        name: "", // invalid data
        photoUrls: ["https://example.com/image.jpg"],
        status: "available"
      },
      headers: data.headerPayload(),
      failOnStatusCode: false, 
    }).then((response) => {
      expect(response.status).to.not.eq(404); 
    });
  });
  


    it("/v2/pet/12345 deletePet", () => {
      cy.request({
        method: "DELETE",
        url:   urls + "/v2/pet/12345",
        headers: data.headerPayload(),
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
    });


    it('/v2/pet deletePetError', () => {
        cy.request({
          method: "DELETE",
          url: urls + '/v2/pet',
          headers:data.headerPayload(),
          failOnStatusCode: false
        })
          .then((response) => {
            expect(response.status).to.eq(405) 
          })
      })

  
});

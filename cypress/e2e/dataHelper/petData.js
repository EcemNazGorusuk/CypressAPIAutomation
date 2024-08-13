class PetData {

  headerPayload() {
    const headerBody = {
      accept: "application/json",
      "Content-Type": "application/json",
    };
    return headerBody;
  }

  bodyPayload(petName, photoUrl, animalType,status) {
    const postData = {
      "id": 12345,
      "category": {
        "id": 67890,
        "name": "pet"
      },
      "name": petName,
      "photoUrls": [
        photoUrl
      ],
      "tags": [
        {
          "id": 1,
          "name": animalType
        }
      ],
      "status": status
    };
    return postData;
  }


  userSign(uName, uPassword) {
    const queryBody = {
      username: uName,
      password: uPassword,
    };
    return queryBody;
  }


  listPostData() {
    const postData = [
      {
        id: 1,
        username: "ahmet",
        firstName: "Ahmet",
        lastName: "Öz",
        email: "ahmet1@gmail.com",
        password: "1234",
        phone: "345",
        userStatus: 0,
      },
      {
        id: 2,
        username: "mehmet",
        firstName: "Mehmet",
        lastName: "Masad",
        email: "mehmet@gmail.com",
        password: "234",
        phone: "123213",
        userStatus: 0,
      },
    ];
    return postData;
  }

  arrayPostData() {
    const postData = [
      {
        id: 3,
        username: "duygu",
        firstName: "Duygu",
        lastName: "Öz",
        email: "duygu@gmail.com",
        password: "3456",
        phone: "123456",
        userStatus: 0,
      },
    ];
    return postData;
  }
}

export default PetData;

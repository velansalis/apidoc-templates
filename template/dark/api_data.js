define({ "api": [
  {
    "type": "post",
    "url": "/api/auth/forgot-password",
    "title": "Forgot Password",
    "description": "<p>This module sends a reset link to user's provided email id or phone number.</p>",
    "name": "Forgot_Password",
    "group": "Authentication",
    "version": "0.0.1",
    "permission": [
      {
        "name": "None"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the Rider</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone Number of the Rider</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body",
          "content": "{ email : \"johndoe@example.com\" }\n- OR -\n{ phone : 9876543210 }",
          "type": "JSON"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Appropriate success message is returned</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n\tdata : {\n\t\tmessage : \"reset link has been sent\"\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Appropriate error message is returned</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response",
          "content": "{\n\tmessage : < Appropriate Error Message >\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "src/controller/auth/forgot-password.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "/api/auth/login",
    "title": "Login Rider",
    "name": "Login",
    "group": "Authentication",
    "version": "0.0.1",
    "permission": [
      {
        "name": "None"
      }
    ],
    "description": "<p>This module authenticates and logs the user in. Returns the bearer token.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the Rider</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone Number of the Rider</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the Rider</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body",
          "content": "{\n\temail : \"johndoe@example.com\",\n\tpassword : examplepassword\n}\n- OR -\n{\n\tphone : 9876543210,\n\tpassword : examplepassword\n}",
          "type": "JSON"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Generated user token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n\tdata : {\n\t\ttoken : < Generated Token >\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Appropriate error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response",
          "content": "{\n\tmessage : < Appropriate Error Message >\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "src/controller/auth/login.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "/api/auth/register",
    "title": "Register a Rider",
    "name": "Register",
    "group": "Authentication",
    "version": "0.0.1",
    "permission": [
      {
        "name": "None"
      }
    ],
    "description": "<p>This module registers the user and generates a bearer token. Returns the bearer token.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Rider</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the Rider</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the Rider</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone Number of the Rider</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body",
          "content": "{\n\tname : John,\n\temail : \"johndoe@example.com\",\n\tphone : 9876543210,\n\tpassword : examplepassword\n}",
          "type": "JSON"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Generated user token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n\tdata : {\n\t\ttoken : < Generated Token >\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Appropriate error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response",
          "content": "{\n\tmessage : < Appropriate Error Message >\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "src/controller/auth/register.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "/api/auth/reset-password",
    "title": "Reset Password",
    "description": "<p>This module replaces the user's old password with the provided new password.</p>",
    "name": "Reset_Password",
    "group": "Authentication",
    "version": "0.0.1",
    "permission": [
      {
        "name": "Rider"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token for authentication</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "{\n\t\"Authorization\" : \"Bearer <token>\"\n}",
          "type": "JSON"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "oldPassword",
            "description": "<p>Old password of the rider (existing)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newPassword",
            "description": "<p>New password of the rider (to be replaced)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body",
          "content": "{\n\toldPassword : \"examplepassword\",\n\tnewPassword : \"onemoreexamplepassword\"\n}",
          "type": "JSON"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Appropriate success message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n\tdata : {\n\t\tmessage : \"password successfully reset\"\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Appropriate error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response",
          "content": "{\n\tmessage : < Appropriate Error Message >\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controller/auth/reset-password.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "/api/auth/terminate",
    "title": "Terminate Account",
    "description": "<p>This module autheticates the user and deletes his/her account.</p>",
    "name": "Terminate_Account",
    "group": "Authentication",
    "version": "0.0.1",
    "permission": [
      {
        "name": "None"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the Rider</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone Number of the Rider</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the Rider</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n\temail : \"johndoe@example.com\",\n\tpassword : \"examplepassword\"\n}\nOR\n{\n\tphone : 9876543210,\n\tpassword : \"examplepassword\"\n}",
          "type": "JSON"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Appropriate success message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n\tdata : {\n\t\tmessage : \"rider successfully deleted\"\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Appropriate error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response",
          "content": "{\n\tmessage : < Appropriate Error Message >\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "src/controller/auth/terminate.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "/api/dealer",
    "title": "Add Dealer",
    "name": "Add_a_Dealer",
    "group": "Dealer",
    "version": "0.0.1",
    "permission": [
      {
        "name": "Rider"
      }
    ],
    "description": "<p>This module adds a service dealer.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "{\n\t\"Authorization\" : \"Bearer <token>\"\n}",
          "type": "JSON"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the dealer</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address of the dealer</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>Name of the City</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>Name of the state</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone number of the dealer</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ratings",
            "description": "<p>Rating of the dealer</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body",
          "content": "{\n\t\"name\": \"Tune Motors\",\n\t\"address\": \"NH 6, Edapally, Santhekatte\",\n\t\"city\": \"udupi\",\n\t\"state\": \"karnataka\",\n\t\"phone\": \"9876543210\",\n\t\"ratings\": 4\n}",
          "type": "JSON"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Appropriate success message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n\tdata : {\n\t\tmessage : \"dealer successfully created\"\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Appropriate error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response",
          "content": "{\n\tmessage : < Appropriate Error Message >\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "src/controller/dealer/add.dealer.js",
    "groupTitle": "Dealer"
  },
  {
    "type": "get",
    "url": "/api/dealer/:dealerID",
    "title": "Get Dealer",
    "name": "Get_Dealer",
    "group": "Dealer",
    "version": "0.0.1",
    "permission": [
      {
        "name": "Rider"
      }
    ],
    "description": "<p>This module gets the dealer.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "{\n\t\"Authorization\" : \"Bearer <token>\"\n}",
          "type": "JSON"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": ":dealerID",
            "description": "<p>ID of the dealer</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example URL",
          "content": "/api/dealer/5eae5f8d1182562facc4f929",
          "type": "URL"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID of the dealer</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Dealer name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Dealer address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>Dealer's city</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>Dealer's state</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ratings",
            "description": "<p>Dealer's rating.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n\t\"data\": {\n\t\t\"_id\": \"5eae5f8d1182562facc4f929\",\n\t\t\"name\": \"Tune Motors\",\n\t\t\"address\": \"NH 6, Edapally, Santhekatte\",\n\t\t\"city\": \"udupi\",\n\t\t\"state\": \"karnataka\",\n\t\t\"ratings\": 4\n\t}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Appropriate error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response",
          "content": "{\n\tmessage : < Appropriate Error Message >\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controller/dealer/get.dealer.js",
    "groupTitle": "Dealer"
  },
  {
    "type": "get",
    "url": "/api/dealer?city=<cityName>&&page=<pageNumber>&&sortby=<sortParameter>&&orderBy<orderParameter>",
    "title": "Get Dealers",
    "name": "Get_Dealers",
    "group": "Dealer",
    "version": "0.0.1",
    "permission": [
      {
        "name": "Rider"
      }
    ],
    "description": "<p>This module gets the list of dealers filtered by URL parameters.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "{\n\t\"Authorization\" : \"Bearer <token>\"\n}",
          "type": "JSON"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>City name</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sortby",
            "description": "<p>Parameter by which output needs to be sorted</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orderby",
            "description": "<p>Ascending or Descending (asc or dsc)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example URL",
          "content": "/api/dealer?city=udupi&&page=2&&sortby=name&&orderby=asc",
          "type": "URL"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Dealer's name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>Dealer's city</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ratings",
            "description": "<p>Dealer's ratings</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n\"data\": {\n\t\"count\": 1,\n\t\t\"dealers\": [\n\t\t\t{\n\t\t\t\t_id\": \"5eae5f8d1182562facc4f929\",\n\t\t\t\t\"name\": \"Tune Motors\",\n\t\t\t\t\"city\": \"udupi\",\n\t\t\t\t\"ratings\": 4\n\t\t\t},\n\t\t}\n\t}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Appropriate error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response",
          "content": "{\n\tmessage : < Appropriate Error Message >\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controller/dealer/get.dealers.js",
    "groupTitle": "Dealer"
  },
  {
    "type": "post",
    "url": "/api/rider/avatar",
    "title": "Add profile picture",
    "name": "Add_profile_picture",
    "group": "Rider",
    "version": "0.0.1",
    "permission": [
      {
        "name": "Rider (Owner)"
      }
    ],
    "description": "<p>This module uploads the profile picture of the rider and adds the file name to the 'avatar' parameter in rider's document.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "{\n\t\"Authorization\" : \"Bearer <token>\"\n}",
          "type": "JSON"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "JSON",
            "optional": false,
            "field": "avatar",
            "description": "<p>Image file need to be uploaded in multipart form</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Parameter Example",
          "content": "{ avatar : <Image File> }",
          "type": "JSON"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Appropriate success message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n\tdata : {\n\t\tmessage : \"avatar successfully uploaded\"\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Appropriate error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response",
          "content": "{\n\tmessage : < Appropriate Error Message >\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "src/controller/rider/add.avatar.js",
    "groupTitle": "Rider"
  },
  {
    "type": "get",
    "url": "/api/rider?_id=<riderID>",
    "title": "Get Rider Profile",
    "name": "Get_Rider",
    "group": "Rider",
    "version": "0.0.1",
    "permission": [
      {
        "name": "Rider"
      }
    ],
    "description": "<p>This module takes in rider ID from the URL parameter and sends the rider information back to the user. If URL parameter is not passed, current rider information is returned.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "{\n\t\"Authorization\" : \"Bearer <token>\"\n}",
          "type": "JSON"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Rider ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example URL",
          "content": "/api/rider -OR- /api/rider/_id=5eae80d77fd66c5610fbbf26",
          "type": "URL"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Rider ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Rider name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Rider email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Rider phone number</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>Rider's avatar name</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "joinedTrips",
            "description": "<p>List of ID's of trips joined or created by the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "services",
            "description": "<p>List of ID's of the services done by the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Online/Offline status</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Timestamp of when the rider was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Timestamp of when the rider was last updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\t\"data\": {\n\t\t\"_id\": \"5eae80d77fd66c5610fbbf26\",\n\t\t\"avatar\": null,\n\t\t\"joinedTrips\": [],\n\t\t\"services\": [],\n\t\t\"status\": \"offline\",\n\t\t\"name\": \"Velan Salis\",\n\t\t\"email\": \"velansalis@tuta.io\",\n\t\t\"phone\": \"9876543230\",\n\t\t\"createdAt\": \"2020-05-03T08:29:11.391Z\",\n\t\t\"updatedAt\": \"2020-05-03T08:29:11.395Z\"\n\t}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Appropriate error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response",
          "content": "{\n\tmessage : < Appropriate Error Message >\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controller/rider/get.rider.js",
    "groupTitle": "Rider"
  },
  {
    "type": "put",
    "url": "/api/rider",
    "title": "Update Rider Profile",
    "name": "Update_Rider_Profile",
    "group": "Rider",
    "version": "0.0.1",
    "permission": [
      {
        "name": "Rider (Owner)"
      }
    ],
    "description": "<p>This module updates the parameters in rider's document.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "{\n\t\"Authorization\" : \"Bearer <token>\"\n}",
          "type": "JSON"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "JSON",
            "optional": false,
            "field": "body",
            "description": "<p>Update Query</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Parameter Example",
          "content": "{\n\tname : \"Jane Doe\",\n\tphone : 9876543210\n\t...rqeuired update queries...\n}",
          "type": "JSON"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Appropriate success message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n\tdata : {\n\t\tmessage : \"rider successfully updated\"\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Appropriate error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response",
          "content": "{\n\tmessage : < Appropriate Error Message >\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "src/controller/rider/edit.rider.js",
    "groupTitle": "Rider"
  },
  {
    "type": "post",
    "url": "/api/service",
    "title": "Add Service",
    "name": "Add_a_Service",
    "group": "Service",
    "version": "0.0.1",
    "permission": [
      {
        "name": "Rider"
      }
    ],
    "description": "<p>This module adds a vehicle service.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "{\n\t\"Authorization\" : \"Bearer <token>\"\n}",
          "type": "JSON"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone number of the rider</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "slotDate",
            "description": "<p>Slot date of the service</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "slotTime",
            "description": "<p>Slot time of the service</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vehicleNumber",
            "description": "<p>Vehicle number of rider's vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vehicleType",
            "description": "<p>Vehicle type of rider's vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serviceType",
            "description": "<p>Type of service [General, Free, Breakdown]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comments",
            "description": "<p>Comments (tags) of services</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dealer",
            "description": "<p>ID of the dealer</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body",
          "content": "{\n\tphone : 9876543210,\n\tvehicleNumber : KA 02 F 9087,\n\tvehicleType : Classic 350 - black,\n\tserviceType : general,\n\tcomments : \"break oil, tight chain\",\n\tdealer : 5eae5f8d1182562facc4f929\n}",
          "type": "JSON"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Appropriate success message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n\tdata : {\n\t\tmessage : \"dealer successfully created\"\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Appropriate error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response",
          "content": "{\n\tmessage : < Appropriate Error Message >\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "src/controller/service/add.service.js",
    "groupTitle": "Service"
  },
  {
    "type": "post",
    "url": "/api/service",
    "title": "Get Service",
    "name": "Get_Service_Details",
    "group": "Service",
    "version": "0.0.1",
    "permission": [
      {
        "name": "Rider"
      }
    ],
    "description": "<p>This module gets vehicle service details from ID.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "{\n\t\"Authorization\" : \"Bearer <token>\"\n}",
          "type": "JSON"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serviceID",
            "description": "<p>ID of the service</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Appropriate success message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n\tdata : {\n\t\tmessage : \"dealer successfully created\"\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Appropriate error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response",
          "content": "{\n\tmessage : < Appropriate Error Message >\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "src/controller/service/get.service.js",
    "groupTitle": "Service"
  },
  {
    "type": "post",
    "url": "/api/trip",
    "title": "Add Trip",
    "description": "<p>This module authenticates the user and creates a trip on his/her ownership. And adds the created trip ID in user's record under 'joinedTrips' parameter.</p>",
    "name": "Add_trip",
    "group": "Trip",
    "version": "0.0.1",
    "permission": [
      {
        "name": "Rider"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token for authentication</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "{\n\t\"Authorization\" : \"Bearer <token>\"\n}",
          "type": "JSON"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the trip</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "source",
            "description": "<p>Trip source in latitudes and longitude values.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "destination",
            "description": "<p>Trip destination in latitudes and longitude values.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "milestones",
            "description": "<p>Trip milestones in latitudes and longitude values.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startDate",
            "description": "<p>Trip start date in DD/MM/YYYY format</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startTime",
            "description": "<p>Trip start time in hh:mm format</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endDate",
            "description": "<p>Trip end date in DD/MM/YYYY format</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "invitedUsers",
            "description": "<p>Profile ID's of riders to be invited.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n\t\"name\": \"Exquisite Manali\",\n\t\"destination\": [100, -200],\n\t\"source\": [300,200],\n\t\"startDate\": \"1/2/1997\",\n\t\"endDate\": \"2/2/1997\",\n\t\"startTime\": \"10:30\",\n\t\"milestones\": [[100,200],[300,400],[500,600]],\n\t\"invitedUsers\": [ <\"Rider profile ID's\"> ]\n}",
          "type": "JSON"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Appropriate success message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n\tdata : {\n\t\tmessage : \"trip successfully added\"\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Appropriate error message is returned</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response",
          "content": "{\n\tmessage : <\"Appropriate Error Message\">\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "src/controller/trip/add.trip.js",
    "groupTitle": "Trip"
  },
  {
    "type": "delete",
    "url": "/api/trip/<tripID>",
    "title": "Delete Trip",
    "description": "<p>This module authenticates the user and deletes the trip. Removes the trip ID from user's 'joinedTrips' parameter.</p>",
    "name": "Delete_trip",
    "group": "Trip",
    "version": "0.0.1",
    "permission": [
      {
        "name": "Trip Owner"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tripID",
            "description": "<p>Trip ID of the trip</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "{\n\t\"Authorization\" : \"Bearer <token>\"\n}",
          "type": "JSON"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Appropriate success message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n\tdata : {\n\t\tmessage : \"trip successfully deleted\"\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Appropriate error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response",
          "content": "{\n\tmessage : <\"Appropriate Error Message\">\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "src/controller/trip/delete.trip.js",
    "groupTitle": "Trip"
  },
  {
    "type": "put",
    "url": "/api/trip/:tripID",
    "title": "Edit Trip",
    "description": "<p>This module updates the trip parameters.</p>",
    "name": "Edit_trip",
    "group": "Trip",
    "version": "0.0.1",
    "permission": [
      {
        "name": "Trip Owner"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token for authentication</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "{\n\t\"Authorization\" : \"Bearer <token>\"\n}",
          "type": "JSON"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "JSON",
            "optional": false,
            "field": "query",
            "description": "<p>Update query for the trip.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body",
          "content": "{\n\t\"name\": \"Exquisite Manali\",\n\t\"destination\": [100, -200],\n\t\"source\": [300,200],\n\t... other required parameters ...\n}",
          "type": "JSON"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Appropriate success message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\tdata : {\n\t\tmessage : \"trip successfully updated\"\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Appropriate error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response",
          "content": "{\n\tmessage : <\"Appropriate Error Message\">\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "src/controller/trip/edit.trip.js",
    "groupTitle": "Trip"
  },
  {
    "type": "get",
    "url": "/api/trip?page=<pageNumber>&&sortBy=<tripParams>&&orderBy=<order>",
    "title": "Get Trips",
    "description": "<p>This module returns the trips based on provided URL query filters. (filters are optional, yet they can be used to have greater control over the trips response)</p>",
    "name": "Get_Trips",
    "group": "Trip",
    "version": "0.0.1",
    "permission": [
      {
        "name": "Rider"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageNumber",
            "description": "<p>Page Number of the desired trips (pagination). eg. 1,2,3,4...</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tripParams",
            "description": "<p>The trip parameter with which the output needs to be sorted. eg. name, createdAt, updatedAt</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order",
            "description": "<p>The order in which the output needs to be sorted. can be ascending (asc) or descending (dsc)</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token for authentication</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "{\n\t\"Authorization\" : \"Bearer <token>\"\n}",
          "type": "JSON"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>Number of trips returned</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Generated Unique ID of the trip</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the trip</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\tdata : {\n\t\tcount : <\"Number of Trips\">,\n\t\ttrips : [\n\t\t\t\"_id\": \"5ead17c809369b4b1d57a481\",\n\t\t\t\"name\": \"Exquisite Manali\"\n\t\t]\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Appropriate error message is returned</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response",
          "content": "{\n\tmessage : <\"Appropriate Error Message\">\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "src/controller/trip/get.trips.js",
    "groupTitle": "Trip"
  },
  {
    "type": "get",
    "url": "/api/trip/<tripID>",
    "title": "Gets a Trip By ID",
    "description": "<p>This module returns the trip associated with the trip ID in the URL query.</p>",
    "name": "Get_trip_by_ID",
    "group": "Trip",
    "version": "0.0.1",
    "permission": [
      {
        "name": "Rider"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tripID",
            "description": "<p>Trip ID of the trip</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token for authentication</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "{\n\t\"Authorization\" : \"Bearer <token>\"\n}",
          "type": "JSON"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Generated Unique ID of the trip</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the trip</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "source",
            "description": "<p>Trip source in latitudes and longitude values.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "destination",
            "description": "<p>Trip destination in latitudes and longitude values.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "milestones",
            "description": "<p>Trip milestones in latitudes and longitude values.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "startDate",
            "description": "<p>Trip start date and start time in UTC format</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "endDate",
            "description": "<p>Trip end date in UTC format</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "invitedUsers",
            "description": "<p>Profile ID's of riders invited.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n\tdata : {\n\t\t\"_id\": \"5ead17c809369b4b1d57a481\",\n\t\t\"destination\": [100,-200],\n\t\t\"source\": [300,200],\n\t\t\"milestones\": [[100,200],[300,400],[500,600]],\n\t\t\"invitedUsers\": [],\n\t\t\"name\": \"Exquisite Manali\",\n\t\t\"startDate\": \"1997-02-01T05:00:00.000Z\",\n\t\t\"endDate\": \"1997-02-01T18:30:00.000Z\"\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Appropriate error message is returned</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response",
          "content": "{\n\tmessage : <\"Appropriate Error Message\">\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "src/controller/trip/get.trip.js",
    "groupTitle": "Trip"
  }
] });

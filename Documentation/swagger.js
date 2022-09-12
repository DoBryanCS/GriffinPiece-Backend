const swaggerDocument = {
    openapi: '3.0.0',
    info: {
        title: 'Projet 3 API',
        description: 'Projet 3 API',
        contact: {
            name: 'Francis Jad Khoa Mathieu'
        },
        servers: ['http://localhost:3000']
    },
    tags: [
        { name: 'Authentification' },
        { name: 'User' },
        { name: 'Shows' },
        { name: 'Seasons'},
        { name: 'Episodes'},
        { name: 'Comments'},
        { name: 'History'},
        { name: 'Favorites'},
    ],
    paths: {
        "/auth/login": {
            "post": {
                tags: ["Authentification"],
                summary: "Get Token",
                description: "Authentification",
                parameters: [
                    {
                        name: "login",
                        in: "body",
                        schema: {
                            type: "object",
                            properties: {
                                email: {
                                    type: "string",
                                    example: "e12345678@cmaisonneuve.qc.ca"
                                },
                                password: {
                                    type: "string",
                                    example: "password"
                                }
                            }
                        }
                    }
                ],
                responses: {
                    "200": {
                        description: "successful operation",
                        schema: {
                            type: "object",
                            properties: {
                                success: {
                                    type: "boolean",
                                    example: "true"
                                },
                                token: {
                                    type: "string",
                                    example: "ABCTOKEN"
                                },
                            }
                        }
                    },
                    "401": {
                        description: "Unauthorized",
                        schema: {
                            type: "object",
                            properties: {
                                succes: {
                                    type: "boolean",
                                    example: "false"
                                },
                                message: {
                                    type: "string",
                                    example: "email ou mot de passe incorrect!"
                                }
                            }
                        }
                    },
                    "500": {
                        description: "Internal Server Error"
                    }
                }


            }
        },
        "/auth/register": {
            "post": {
                tags: ["Authentification"],
                summary: "Create User",
                description: "Authentification",
                parameters: [
                    {
                        name: "register",
                        in: "body",
                        schema: {
                            type: "object",
                            properties: {
                                email: {
                                    type: "string",
                                    example: "e12345678@cmaisonneuve.qc.ca"
                                },
                                password: {
                                    type: "string",
                                    example: "password"
                                },
                                username: {
                                    type: "string",
                                    example: "username"
                                }
                            }
                        }
                    }
                ],
                responses: {
                    "201": {
                        description: "successful operation",
                        schema: {
                            type: "object",
                            properties: {
                                succes: {
                                    type: "boolean",
                                    example: "true"
                                },
                                token: {
                                    type: "string",
                                    example: "ABCTOKEN"
                                },
                            }
                        }
                    },
                    "500": {
                        description: "Internal Server Error"
                    }
                }


            }
        },
        "/user": {
            "put": {
                tags: ['User'],
                summary: "Update current User",
                description: "Permet de update un user",
                security: [
                    {
                        bearerAuth: []
                    }
                ],
                parameters: [
                    {
                        name: "newData",
                        in: "body",
                        schema: {
                            type: "object",
                            properties: {
                                email: {
                                    type: "string",
                                    example: "e12345678@cmaisonneuve.qc.ca"
                                },
                                username: {
                                    type: "string",
                                    example: "username"
                                },
                                password: {
                                    type: "string",
                                    example: "password"
                                }
                            }
                        }
                    }
                ],
                responses: {
                    "200": {
                        description: "successful operation",
                        schema: {
                            type: "object",
                            properties: {
                                success: {
                                    type: "boolean",
                                    example: "true"
                                },
                            }
                        }
                    },
                    "401": {
                        description: "Unauthorized",
                        schema: {
                            type: "object",
                            properties: {
                                succes: {
                                    type: "boolean",
                                    example: "false"
                                },
                                message: {
                                    type: "string",
                                    example: "Vous n'etes pas connecter!"
                                }
                            }
                        }
                    },
                    "404": {
                        description: "Not Found",
                        schema: {
                            type: "object",
                            properties: {
                                succes: {
                                    type: "boolean",
                                    example: "false"
                                },
                                message: {
                                    type: "string",
                                    example: "User not found!"
                                }
                            }
                        }
                    },
                    "500": {
                        description: "Internal Server Error"
                    }
                }
            },
        },
        "/user/{Id}": {
            "delete": {
                tags: ['User'],
                summary: "Delete User from Id",
                description: "Permet de delete un user",
                security: [
                    {
                        bearerAuth: []
                    }
                ],
                parameters: [
                    {
                        name: "Id",
                        in: "path",
                        description: "Le id du user",
                        required: true,
                        type: "int",
                        example: 3
                    }
                ],
                responses: {
                    "200": {
                        description: "successful operation",
                        schema: {
                            type: "object",
                            properties: {
                                success: {
                                    type: "boolean",
                                    example: "true"
                                },
                            }
                        }
                    },
                    "401": {
                        description: "Unauthorized",
                        schema: {
                            type: "object",
                            properties: {
                                succes: {
                                    type: "boolean",
                                    example: "false"
                                },
                                message: {
                                    type: "string",
                                    example: "Vous n'etes pas connecter!"
                                }
                            }
                        }
                    },
                    "403": {
                        description: "Forbidden",
                        schema: {
                            type: "object",
                            properties: {
                                succes: {
                                    type: "boolean",
                                    example: "false"
                                },
                                message: {
                                    type: "string",
                                    example: "Vous n'avez pas les droits nécessaires!"
                                }
                            }
                        }
                    },
                    "404": {
                        description: "Not Found",
                        schema: {
                            type: "object",
                            properties: {
                                succes: {
                                    type: "boolean",
                                    example: "false"
                                },
                                message: {
                                    type: "string",
                                    example: "User not found!"
                                }
                            }
                        }
                    },
                    "500": {
                        description: "Internal Server Error"
                    }
                }
            }
        },
        "/comment/{episodeId}": {
            "post": {
                tags: ['Comments'],
                summary: "Create Comment",
                description: "Permet de creer un commentaire",
                security: [
                    {
                        bearerAuth: []
                    }
                ],
                parameters: [
                    {
                        name: "episodeId",
                        in: "path",
                        description: "Le id de l'episode",
                        required: true,
                        type: "int",
                        example: 3
                    },
                    {
                        name: "comment",
                        in: "body",
                        schema: {
                            type: "object",
                            properties: {
                                comment: {
                                    type: "string",
                                    example: "Among us Fong us One Piece"
                                }
                            }
                        }
                    },
                ],
                responses: {
                    "200": {
                        description: "successful operation",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        success: {
                                            type: "boolean",
                                            example: "true"
                                        },
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        description: "Unauthorized",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        succes: {
                                            type: "boolean",
                                            example: "false"
                                        },
                                        message: {
                                            type: "string",
                                            example: "Vous n'etes pas connecter!"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "403": {
                        description: "Forbidden",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        succes: {
                                            type: "boolean",
                                            example: "false"
                                        },
                                        message: {
                                            type: "string",
                                            example: "Vous n'avez pas les droits nécessaires!"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "404": {
                        description: "Not Found",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        succes: {
                                            type: "boolean",
                                            example: "false"
                                        },
                                        message: {
                                            type: "string",
                                            example: "User not found!"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "500": {
                        description: "Internal Server Error"
                    }
                }
            },
            "get": {
                tags: ['Comments'],
                summary: "Get all Comment from episodeId",
                description: "Permet de load des commentaire de un episode",
                security: [
                    {
                        bearerAuth: []
                    }
                ],
                parameters: [
                    {
                        name: "episodeId",
                        in: "path",
                        description: "Le id de l'episode",
                        required: true,
                        type: "int",
                        example: 3
                    }
                ],
                responses: {
                    "200": {
                        description: "successful operation",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/components/schemas/Comment"
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        description: "Unauthorized",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        succes: {
                                            type: "boolean",
                                            example: "false"
                                        },
                                        message: {
                                            type: "string",
                                            example: "Vous n'etes pas connecter!"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "403": {
                        description: "Forbidden",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        succes: {
                                            type: "boolean",
                                            example: "false"
                                        },
                                        message: {
                                            type: "string",
                                            example: "Vous n'avez pas les droits nécessaires!"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "404": {
                        description: "Not Found",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        succes: {
                                            type: "boolean",
                                            example: "false"
                                        },
                                        message: {
                                            type: "string",
                                            example: "User not found!"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "500": {
                        description: "Internal Server Error"
                    }
                }
            },
        },
    },
    components: {
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer",
                bearerFormat: "JWT"
            }
        },
        schemas: {
            Episode: {
                type: "object",
                properties: {
                    episodeId: {
                        type: "integer",
                        example: 3
                    },
                    seasonId: {
                        type: "integer",
                        example: 1
                    },
                    showId: {
                        type: "integer",
                        example: 1
                    },
                    episodeNumber: {
                        type: "integer",
                        example: 1
                    },
                    title: {
                        type: "string",
                        example: "I'm Luffy! The Man Who Will Become the Pirate King!"
                    },
                    length: { 
                        type: "int",
                        example: "20"
                    },
                    imageURL: {
                        type: "string",
                        example: "https://static.wikia.nocookie.net/onepiece/images/a/a1/Episode_1.png/revision/latest/scale-to-width-down/350?cb=20140915112845"
                    },
                    videoURL: {
                        type: "string",
                        example: "https://www.google.com"
                    },
                }
            },
            Season: {
                type: "object",
                properties: {
                    seasonId: {
                        type: "integer",
                        example: 1
                    },
                    showId: {
                        type: "integer",
                        example: 1
                    },
                    title: {
                        type: "string",
                        example: "East Blue"
                    },
                    imageURL: {
                        type: "string",
                        example: "https://m.media-amazon.com/images/M/MV5BZDQwMTYzN2EtNmFlOS00OTI1LWE5YmEtOTIyNGQwZjNiY2ZlXkEyXkFqcGdeQXVyMTEyNTc4NTI1._V1_.jpg"
                    },
                }
            },
            Show: {
                type: "object",
                properties: {
                    showId: {
                        type: "integer",
                        example: 1
                    },
                    title: {
                        type: "string",
                        example: "East Blue"
                    },
                    description: {
                        type: "string",
                        example: "A man wants to become the pirate king"
                    },
                    imageURL: {
                        type: "string",
                        example: "https://images.justwatch.com/poster/248497985/s718/one-piece.%7Bformat%7D"
                    },
                }
            },
            Comment:{
                type: "object",
                properties: {
                    commentId: {
                        type: "integer",
                        example: 1
                    },
                    episodeId: {
                        type: "integer",
                        example: 1
                    },
                    userId: {
                        type: "integer",
                        example: 1
                    },
                    content: {
                        type: "string",
                        example: "J'ai adoré cet épisode!"
                    },
                }
            }
        }
    }
};

module.exports = swaggerDocument;
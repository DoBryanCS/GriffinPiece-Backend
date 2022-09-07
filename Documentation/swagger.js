const swaggerDocument = {
    swagger: '2.0',
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
                summary: "Authentification",
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
                summary: "Authentification",
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
        "/user/{Id}": {
            "put": {
                tags: ['User'],
                description: "Permet de update un user",
                parameters: [
                    {
                        name: "Id",
                        in: "path",
                        description: "Le id du user",
                        required: true,
                        type: "int",
                        example: 3
                    },
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
                                    example: "Vous n'avez pas les droits nécessaires!"
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
            },
            "delete": {
                tags: ['User'],
                description: "Permet de delete un user",
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
                                    example: "Vous n'avez pas les droits nécessaires!"
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
        "/personnes/{Id}": {
            "get": {
                tags: ['Personnes'],
                description: "Retourne une personne depuis un Id",
                parameters: [
                    {
                        name: "Id",
                        in: "path",
                        description: "Le id de la personne",
                        required: true,
                        type: "int",
                        example: 3
                    }
                ],
                responses: {
                    "200": {
                        schema: {
                            type: "object",
                            properties: {
                                resultat: {
                                    $ref: "#/definitions/PersonneDetail",
                                },
                                token: {
                                    type: "string",
                                    example: "null"
                                }
                            }
                        },
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
                                    example: "Vous n'avez pas les droits nécessaires!"
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
                        description: "Not Found"
                    },
                    "500": {
                        description: "Internal Server Error"
                    }
                }
            },
            "delete": {
                tags: ['Personnes'],
                description: "Supprime une personne",
                parameters: [
                    {
                        name: "Id",
                        in: "path",
                        description: "Le id de la personne",
                        required: true,
                        type: "int",
                        example: 3
                    }
                ],
                responses: {
                    "200": {
                        description: "Succes",
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
                                    example: "Vous n'avez pas les droits nécessaires!"
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
                        description: "Not Found"
                    },
                    "500": {
                        description: "Internal Server Error"
                    }
                }
            },
            "put": {
                tags: ['Personnes'],
                description: "modifie une personne",
                parameters: [
                    {
                        name: "Id",
                        in: "path",
                        description: "Le id de la personne",
                        required: true,
                        type: "int",
                        example: 3
                    },
                    {
                        name: "personne",
                        in: "body",
                        description: "Les nouvelles donnees de la personne",
                        schema: {
                            type: "object",
                            properties: {
                                nom: {
                                    type: "string",
                                    example: "Ducharme"
                                },
                                prenom1: {
                                    type: "string",
                                    example: "Benoit"
                                },
                                prenom2: {
                                    type: "string",
                                    example: "null"
                                },
                                Sexe: {
                                    type: "integer",
                                    enum: [0, 1],
                                    example: 1
                                },
                                DateNaissance: {
                                    type: "string",
                                    example: "1975-08-31"
                                }
                            }
                        }
                    }
                ],
                responses: {
                    "200": {
                        description: "Succes",
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
                                    example: "Vous n'avez pas les droits nécessaires!"
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
                        description: "Not Found"
                    },
                    "500": {
                        description: "Internal Server Error"
                    }
                }
            }
        },
        "/ippes": {
            "get": {
                tags: ['IPPE'],
                description: "Retourne une ou plusieurs IPPE incluant les donnees de la personne",
                parameters: [
                    {
                        name: "nom",
                        in: "query",
                        description: "Le nom de la personne",
                        required: true,
                        type: "string",
                        example: "Ducharme"
                    },
                    {
                        name: "prenom1",
                        in: "query",
                        description: "Le prenom1 de la personne",
                        required: true,
                        type: "string",
                        example: "Benoit"
                        
                    },
                    {
                        name: "prenom2",
                        in: "query",
                        description: "Le prenom2 de la personne",
                        required: true,
                        type: "string",
                        example: "null"
                        
                    },
                    {
                        name: "Sexe",
                        in: "query",
                        description: "Le sexe de la personne",
                        required: true,
                        type: "integer",
                        enum: [0, 1],
                        example: 1                        
                    },
                    {
                        name: "DateNaissance",
                        in: "query",
                        description: "La date de naissance de la personne",
                        required: true,
                        type: "string",
                        example: "1975-08-31"
                    }
                ],
                responses: {
                    "200": {
                        description: "Une personne",
                        schema: {
                            type: "array",
                            items: {
                                $ref: "#/definitions/IppeDetail"
                            }
                        },
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
                                    example: "Vous n'avez pas les droits nécessaires!"
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
                    "500": {
                        description: "Internal Server Error"
                    }
                }
            }
        },
    },
    definitions: {
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
    }
};

module.exports = swaggerDocument;
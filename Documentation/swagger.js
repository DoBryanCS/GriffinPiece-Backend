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
                    "200": {
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
        "/personnes": {
            "get": {
                tags: ['Personnes'],
                description: "Retourne toutes les personnes",
                responses: {
                    "200": {          
                        description: "Une liste des personnes",
                        schema : {
                            type: "object",
                            properties: {
                                data: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/PersonneDetail",
                                    }
                                },
                                token: {
                                    type: "string",
                                    example: "null"
                                }
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
        PersonneDetail: {
            type: "object",
            properties: {
                IdPersonne: {
                    type: "integer",
                    example: 3
                },
                TypePersonne: {
                    type: "string",
                    enum: [
                        "Étudiant",
                        "Enseignant",
                        "Personnage",
                        "Comédien"
                    ]
                },
                NomFamille: {
                    type: "string",
                    example: "Ducharme"
                },
                Prenom1: {
                    type: "string",
                    example: "Benoit"
                },
                Prenom2: {
                    type: "string",
                    example: ""
                },
                DateNaissance: {
                    type: "string",
                    example: "1975-08-31T00:00:00.000Z"
                },
                Masculin: {
                    type: "boolean",
                    example: true
                },
                Telephone: {
                    type: "string",
                    example: null
                },
                NoPermis: {
                    type: "string",
                    example: null
                },
                Adresse1: {
                    type: "string",
                    example: null
                },
                Adresse2: {
                    type: "string",
                    example: null
                },
                Ville: {
                    type: "string",
                    example: null
                },
                Province: {
                    type: "string",
                    example: null
                },
                CodePostal: {
                    type: "string",
                    example: null
                },
                Race: {
                    type: "string",
                    example: null
                },
                Taille: {
                    type: "string",
                    example: null
                },
                Yeux: {
                    type: "string",
                    example: null
                },
                Cheveux: {
                    type: "string",
                    example: null
                },
                Marques: {
                    type: "string",
                    example: null
                },
                Toxicomanie: {
                    type: "boolean",
                    example: null
                },
                Desorganise: {
                    type: "boolean",
                    example: null
                },
                Depressif: {
                    type: "boolean",
                    example: null
                },
                Suicidaire: {
                    type: "boolean",
                    example: null
                },
                Violent: {
                    type: "boolean",
                    example: null
                },
                Gilet: {
                    type: "string",
                    example: null
                },
                Pantalon: {
                    type: "string",
                    example: null
                },
                AutreVetement: {
                    type: "string",
                    example: null
                },
            }
        },
        IppeDetail: {
            type: "object",
            properties: {

                Id: {
                    type: "array",
                    items: {
                        type: "integer",
                        example: [3,2,null]
                    }
                },
                NomFamille: {
                    type: "string",
                    example: "Ducharme"
                },
                Prenom1: {
                    type: "string",
                    example: "Benoit"
                },
                Prenom2: {
                    type: "string",
                    example: ""
                },
                Masculin: {
                    type: "boolean",
                    example: true
                },
                DateNaissance: {
                    type: "string",
                    example: "1975-08-31"
                },
                Telephone: {
                    type: "string",
                    example: null
                },
                NoPermis: {
                    type: "string",
                    example: null
                },
                Adresse1: {
                    type: "string",
                    example: null
                },
                Adresse2: {
                    type: "string",
                    example: null
                },
                Ville: {
                    type: "string",
                    example: null
                },
                Province: {
                    type: "string",
                    example: null
                },
                CodePostal: {
                    type: "string",
                    example: null
                },
                Race: {
                    type: "string",
                    example: null
                },
                Taille: {
                    type: "string",
                    example: null
                },
                Yeux: {
                    type: "string",
                    example: null
                },
                Cheveux: {
                    type: "string",
                    example: null
                },
                Marques: {
                    type: "string",
                    example: null
                },
                Toxicomanie: {
                    type: "boolean",
                    example: null
                },
                Desorganise: {
                    type: "boolean",
                    example: null
                },
                Depressif: {
                    type: "boolean",
                    example: null
                },
                Suicidaire: {
                    type: "boolean",
                    example: null
                },
                Violent: {
                    type: "boolean",
                    example: null
                },
                Gilet: {
                    type: "string",
                    example: null
                },
                Pantalon: {
                    type: "string",
                    example: null
                },
                AutreVetement: {
                    type: "string",
                    example: null
                },
                Categorie: {
                    type: "string",
                    enum: [
                        "Étudiant",
                        "Enseignant",
                        "Personnage",
                        "Comédien"
                    ]
                },
                IdPersonne: {
                    type: "integer",
                    example: 3
                },
                NoEvenement: {
                    type: "string",
                    example: "108-220208-0031"
                },
                TypeEvenement: {
                    type: "string",
                    enum: [
                        "Recherché",
                        "Enquête",
                        "Découverte",
                        "Autre"
                    ]
                },
                Raison: {
                    type: "string",
                    example: "Arrestation"
                },
                DossierEnquete: {
                    type: "string",
                    example: null
                },
                Cour: {
                    type: "string",
                    example: "Municipale de Longueuil"
                },
                NoCour: {
                    type: "string",
                    example: "CM-LGL-A-26840"
                },
                NatureCrime: {
                    type: "string",
                    example: "Agression armée"
                },
                LieuDetention: {
                    type: "string",
                    example: null
                },
                FinSentence: {
                    type: "string",
                    example: null
                },
                VuDerniereFois: {
                    type: "string",
                    example: null
                },
                Agent: {
                    type: "string",
                    example: null
                },
                Poste: {
                    type: "string",
                    example: null
                },
                IdIPPE: {
                    type: "integer",
                    example: null
                },
                Libelle: {
                    type: "string",
                    example: null
                },
            },
        },
    },
};

module.exports = swaggerDocument;
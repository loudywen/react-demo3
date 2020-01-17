export const Environment = [
    {
        environmentName: "Dev",
        environmentCode: 1,
        lastUpdated: "2020-01-14T14:48:35.443Z",
        lastUpdatedBy: "Command Center",
        links: [
            {
                rel: "getEnvironment",
                href: "http://localhost:8080/environments/Dev",
                media: "application/json;charset=UTF-8",
                type: "GET"
            },
            {
                rel: "deleteEnvironment",
                href: "http://localhost:8080/environments/Dev",
                media: "application/json;charset=UTF-8",
                type: "DELETE"
            },
            {
                rel: "updateEnvironment",
                href: "http://localhost:8080/environments/Dev",
                media: "application/json;charset=UTF-8",
                type: "PUT"
            }
        ]
    }
];

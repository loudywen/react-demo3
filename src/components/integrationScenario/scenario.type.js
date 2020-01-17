export const ScenarioType = [
    {
        scenarioTypeName: "Messaging",
        scenarioTypeDesc: "This designates a common messaging pattern",
        lastUpdated: "2020-01-13T14:30:54.386Z",
        lastUpdatedBy: "Command Center",
        links: [
            {
                rel: "getScenarioType",
                href: "http://localhost:8080/scenario-types/Messaging",
                media: "application/json;charset=UTF-8",
                type: "GET"
            },
            {
                rel: "deleteScenarioType",
                href: "http://localhost:8080/scenario-types/Messaging",
                media: "application/json;charset=UTF-8",
                type: "DELETE"
            },
            {
                rel: "updateScenarioType",
                href: "http://localhost:8080/scenario-types/Messaging",
                media: "application/json;charset=UTF-8",
                type: "PUT"
            }
        ]
    },
    {
        scenarioTypeName: "kafka",
        scenarioTypeDesc: "kafka topic changed",
        lastUpdated: "2020-01-12T23:10:23.745Z",
        lastUpdatedBy: "Command Center",
        links: [
            {
                rel: "getScenarioType",
                href: "http://localhost:8080/scenario-types/kafka",
                media: "application/json;charset=UTF-8",
                type: "GET"
            },
            {
                rel: "deleteScenarioType",
                href: "http://localhost:8080/scenario-types/kafka",
                media: "application/json;charset=UTF-8",
                type: "DELETE"
            },
            {
                rel: "updateScenarioType",
                href: "http://localhost:8080/scenario-types/kafka",
                media: "application/json;charset=UTF-8",
                type: "PUT"
            }
        ]
    }
];

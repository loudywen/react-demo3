export const HopTypes = [
    {
        hopTypeName: "Audit",
        hopTypeDesc:
            "The Audit hop will be responsible for auditing the transactions within Armada",
        lastUpdated: "2020-01-06T19:49:42.026Z",
        lastUpdatedBy: "DWA7DEVUS00062",
        serviceContracts: [
            {
                serviceMetaData: {
                    serviceName: "auditV1",
                    serviceVersion: "1",
                    messageFormat: "Any",
                    serviceDescription:
                        "The Audit Service will drive whether or not to audit the payload or the header once the message is processed by the auditing service",
                    documentationLink:
                        "https://confluence.walmart.com/display/ARMADA/Bicycle+Audit+Service",
                    "@class":
                        "com.walmart.intech.armada.engine.service.contracts.audit.AuditV1"
                },
                serviceSchema: {
                    type: "object",
                    id:
                        "urn:jsonschema:com:walmart:intech:armada:engine:service:contracts:audit:AuditV1",
                    properties: {
                        auditPayload: {
                            type: "boolean",
                            required: true
                        },
                        auditHeader: {
                            type: "boolean",
                            required: true
                        },
                        endpointName: {
                            type: "string"
                        },
                        endpointProtocol: {
                            type: "string"
                        }
                    }
                }
            }
        ],
        links: [
            {
                rel: "getHopType",
                href: "http://localhost:8080/hop-types/Audit",
                media: "application/json;charset=UTF-8",
                type: "GET"
            },
            {
                rel: "deleteHopType",
                href: "http://localhost:8080/hop-types/Audit",
                media: "application/json;charset=UTF-8",
                type: "DELETE"
            },
            {
                rel: "updateHopType",
                href: "http://localhost:8080/hop-types/Audit",
                media: "application/json;charset=UTF-8",
                type: "PUT"
            }
        ]
    },
    {
        hopTypeName: "Exception",
        hopTypeDesc:
            "The Exception hop will be responsible for hanling failures within Armada",
        lastUpdated: "2020-01-14T23:30:47.136Z",
        lastUpdatedBy: "engine-exception-b9ff679b6-fq62x",
        serviceContracts: [],
        links: [
            {
                rel: "getHopType",
                href: "http://localhost:8080/hop-types/Exception",
                media: "application/json;charset=UTF-8",
                type: "GET"
            },
            {
                rel: "deleteHopType",
                href: "http://localhost:8080/hop-types/Exception",
                media: "application/json;charset=UTF-8",
                type: "DELETE"
            },
            {
                rel: "updateHopType",
                href: "http://localhost:8080/hop-types/Exception",
                media: "application/json;charset=UTF-8",
                type: "PUT"
            }
        ]
    },
    {
        hopTypeName: "entry-hop",
        hopTypeDesc:
            "The Entry hop will be responsible for the ingress handling from within Armada",
        lastUpdated: "2020-01-15T05:32:02.905Z",
        lastUpdatedBy: "engine-entry-hop-687d4986c-5ws6p",
        serviceContracts: [],
        links: [
            {
                rel: "getHopType",
                href: "http://localhost:8080/hop-types/entry-hop",
                media: "application/json;charset=UTF-8",
                type: "GET"
            },
            {
                rel: "deleteHopType",
                href: "http://localhost:8080/hop-types/entry-hop",
                media: "application/json;charset=UTF-8",
                type: "DELETE"
            },
            {
                rel: "updateHopType",
                href: "http://localhost:8080/hop-types/entry-hop",
                media: "application/json;charset=UTF-8",
                type: "PUT"
            }
        ]
    },
    {
        hopTypeName: "exit-hop",
        hopTypeDesc:
            "The Exit hop will be responsible for routing the message to its final destination",
        lastUpdated: "2020-01-14T23:31:58.038Z",
        lastUpdatedBy: "engine-exit-hop-68c8ffc66c-bh7sr",
        serviceContracts: [],
        links: [
            {
                rel: "getHopType",
                href: "http://localhost:8080/hop-types/exit-hop",
                media: "application/json;charset=UTF-8",
                type: "GET"
            },
            {
                rel: "deleteHopType",
                href: "http://localhost:8080/hop-types/exit-hop",
                media: "application/json;charset=UTF-8",
                type: "DELETE"
            },
            {
                rel: "updateHopType",
                href: "http://localhost:8080/hop-types/exit-hop",
                media: "application/json;charset=UTF-8",
                type: "PUT"
            }
        ]
    },
    {
        hopTypeName: "splitter-hop",
        hopTypeDesc:
            "The Splitter hop will be responsible for the splitting messages of various formats by various criteria within Armada",
        lastUpdated: "2020-01-15T13:53:01.455Z",
        lastUpdatedBy: "engine-splitter-hop-5bc7549586-w7j8z",
        serviceContracts: [
            {
                serviceMetaData: {
                    serviceName: "splitBySizeFIXEDv1",
                    serviceVersion: "1",
                    messageFormat: "FIXED",
                    serviceDescription:
                        "The splitter service will break down message based on size",
                    documentationLink: "http://wmlink/jira",
                    "@class":
                        "com.walmart.intech.armada.engine.service.contracts.splitter.SplitBySizeFIXEDv1"
                },
                serviceSchema: {
                    type: "object",
                    id:
                        "urn:jsonschema:com:walmart:intech:armada:engine:service:contracts:splitter:SplitBySizeFIXEDv1",
                    properties: {
                        size: {
                            type: "integer",
                            required: true,
                            maximum: 1048576.0
                        },
                        padLastMessage: {
                            type: "boolean"
                        }
                    }
                }
            },
            {
                serviceMetaData: {
                    serviceName: "splitByDelimiterFIXEDv1",
                    serviceVersion: "1",
                    messageFormat: "FIXED",
                    serviceDescription:
                        "The splitter service will break down message based on a supplied delimiter",
                    documentationLink: "http://wmlink/jira",
                    "@class":
                        "com.walmart.intech.armada.engine.service.contracts.splitter.SplitByDelimiterFIXEDv1"
                },
                serviceSchema: {
                    type: "object",
                    id:
                        "urn:jsonschema:com:walmart:intech:armada:engine:service:contracts:splitter:SplitByDelimiterFIXEDv1",
                    properties: {
                        delimiter: {
                            type: "string",
                            required: true,
                            maxLength: 50,
                            minLength: 1
                        }
                    }
                }
            }
        ],
        links: [
            {
                rel: "getHopType",
                href: "http://localhost:8080/hop-types/splitter-hop",
                media: "application/json;charset=UTF-8",
                type: "GET"
            },
            {
                rel: "deleteHopType",
                href: "http://localhost:8080/hop-types/splitter-hop",
                media: "application/json;charset=UTF-8",
                type: "DELETE"
            },
            {
                rel: "updateHopType",
                href: "http://localhost:8080/hop-types/splitter-hop",
                media: "application/json;charset=UTF-8",
                type: "PUT"
            }
        ]
    },
    {
        hopTypeName: "transformation-hop",
        hopTypeDesc:
            "The Transformation hop will be responsible for the message transformation handling from within Armada",
        lastUpdated: "2020-01-14T23:47:48.067Z",
        lastUpdatedBy: "engine-transformation-hop-664cbd5fd6-vd9j8",
        serviceContracts: [
            {
                serviceMetaData: {
                    serviceName: "transformationV1",
                    serviceVersion: "1",
                    messageFormat: "ANY",
                    serviceDescription:
                        "The Transformation service transforms the payload using IBM Transformation Extender.Transformation is performed based on the rules defined in the configured map",
                    documentationLink: "https://youtu.be/dQw4w9WgXcQ",
                    "@class":
                        "com.walmart.intech.armada.engine.service.contracts.transformation.TransformationV1"
                },
                serviceSchema: {
                    type: "object",
                    id:
                        "urn:jsonschema:com:walmart:intech:armada:engine:service:contracts:transformation:TransformationV1",
                    properties: {
                        mapName: {
                            type: "string",
                            required: true,
                            maxLength: 50,
                            minLength: 1
                        },
                        inputCard: {
                            type: "string",
                            required: true,
                            maxLength: 50,
                            minLength: 1
                        },
                        outputCards: {
                            type: "array",
                            items: {
                                type: "string"
                            }
                        }
                    }
                }
            }
        ],
        links: [
            {
                rel: "getHopType",
                href: "http://localhost:8080/hop-types/transformation-hop",
                media: "application/json;charset=UTF-8",
                type: "GET"
            },
            {
                rel: "deleteHopType",
                href: "http://localhost:8080/hop-types/transformation-hop",
                media: "application/json;charset=UTF-8",
                type: "DELETE"
            },
            {
                rel: "updateHopType",
                href: "http://localhost:8080/hop-types/transformation-hop",
                media: "application/json;charset=UTF-8",
                type: "PUT"
            }
        ]
    }
];

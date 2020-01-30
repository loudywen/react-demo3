export const IntegrationScenario = [
    {
        "scenarioId": 41,
        "scenarioName": "ESB0041_GL_POSTING",
        "scenarioCountry": "WW",
        "environmentCode": 1,
        "instanceTypeCode": 1,
        "scenarioTypeName": "Messaging",
        "lastUpdated": "2020-01-24T22:52:20.502Z",
        "hops": [
            {
                "hopName": "ingress",
                "hopType": "ingress",
                "hopTypeDesc": "The Entry hop will be responsible for the ingress handling from within Armada",
                "from": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "localhost",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.ENTRY.SERVICE.IN"
                },
                "to": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "localhost",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.TRANSFORMATION.SERVICE.IN"
                }
            },
            {
                "hopName": "transformation-hop",
                "hopType": "transformation-hop",
                "hopTypeDesc": "The Transformation hop will be responsible for the message transformation handling from within Armada",
                "from": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "localhost",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.TRANSFORMATION.SERVICE.IN"
                },
                "to": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "localhost",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.EXIT.SERVICE.IN"
                },
                "services": [
                    {
                        "serviceContract": {
                            "serviceMetaData": {
                                "serviceName": "serviceName",
                                "serviceVersion": "1",
                                "messageFormat": "Any",
                                "serviceDescription": "serviceDescription",
                                "documentationLink": "wmlink/documentationLink",
                                "@class": "com.walmart.intech.armada.engine.service.contracts.transformation.TransformationV1"
                            },
                            "serviceSchema": {
                                "type": "object",
                                "id": "urn:jsonschema:com:walmart:intech:armada:engine:service:contracts:transformation:TransformationV1",
                                "properties": {
                                    "mapName": {
                                        "type": "string",
                                        "required": true
                                    },
                                    "inputCard": {
                                        "type": "string",
                                        "required": true
                                    },
                                    "outputCards": {
                                        "type": "array",
                                        "required": true
                                    }
                                }
                            }
                        },
                        "serviceProperties": {
                            "@class": "com.walmart.intech.armada.engine.service.contracts.transformation.TransformationV1",
                            "mapName": "ESB0041_GL_POSTING_V1",
                            "inputCard": "1",
                            "outputCards": [
                                "1"
                            ]
                        }
                    }
                ]
            },
            {
                "hopName": "egress",
                "hopType": "egress",
                "hopTypeDesc": "The Exit hop will be responsible for routing the message to its final destination",
                "from": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "localhost",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.EXIT.SERVICE.IN"
                },
                "to": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "localhost",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.SAP.GL_POSTING_I0089.EXIT.OUT"
                }
            }
        ],
        "services": [
            {
                "serviceContract": {
                    "serviceMetaData": {
                        "serviceName": "auditV1",
                        "serviceVersion": "1",
                        "messageFormat": "Any",
                        "serviceDescription": "The Audit Service will drive whether or not to audit the payload or the header once the message is processed by the auditing service",
                        "documentationLink": "wmlink/documentationLink",
                        "@class": "com.walmart.intech.armada.engine.service.contracts.audit.AuditV1"
                    },
                    "serviceSchema": {
                        "type": "object",
                        "id": "urn:jsonschema:com:walmart:intech:armada:engine:service:contracts:audit:AuditV1",
                        "properties": {
                            "auditPayload": {
                                "type": "boolean",
                                "required": true
                            },
                            "auditHeader": {
                                "type": "boolean",
                                "required": true
                            },
                            "endpointName": {
                                "type": "string",
                                "required": true
                            },
                            "endpointProtocol": {
                                "type": "string",
                                "required": true
                            }
                        }
                    }
                },
                "serviceProperties": {
                    "@class": "com.walmart.intech.armada.engine.service.contracts.audit.AuditV1",
                    "auditPayload": true,
                    "auditHeader": true,
                    "endpointName": "ARMADA.AUDIT.SERVICE.OUT",
                    "endpointProtocol": "wmq"
                }
            }
        ],
        "lastUpdatedBy": "Command Center",
        "links": [
            {
                "rel": "getIntegrationScenario",
                "href": "http://localhost:8080/scenarios/ESB0041_GL_POSTING/WW/1/1",
                "media": "application/json;charset=UTF-8",
                "type": "GET"
            },
            {
                "rel": "deleteIntegrationScenario",
                "href": "http://localhost:8080/scenarios/ESB0041_GL_POSTING/WW/1/1",
                "media": "application/json;charset=UTF-8",
                "type": "DELETE"
            },
            {
                "rel": "updateIntegrationScenario",
                "href": "http://localhost:8080/scenarios/ESB0041_GL_POSTING/WW/1/1",
                "media": "application/json;charset=UTF-8",
                "type": "PUT"
            }
        ]
    },
    {
        "scenarioId": 148,
        "scenarioName": "ESB0148_AP_INVOICE",
        "scenarioCountry": "K1",
        "environmentCode": 1,
        "instanceTypeCode": 1,
        "scenarioTypeName": "Messaging",
        "lastUpdated": "2020-01-27T23:32:20.151Z",
        "hops": [
            {
                "hopName": "ingress",
                "hopType": "ingress",
                "hopTypeDesc": "The Entry hop will be responsible for the ingress handling from within Armada",
                "from": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.ENTRY.SERVICE.IN"
                },
                "to": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.SPLITTER.SERVICE.IN"
                }
            },
            {
                "hopName": "splitter-hop",
                "hopType": "splitter-hop",
                "hopTypeDesc": "The Splitter hop will be responsible for the splitting messages of various formats by various criteria within Armada",
                "from": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.SPLITTER.SERVICE.IN"
                },
                "to": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.TRANSFORMATION.SERVICE.IN"
                },
                "services": [
                    {
                        "serviceContract": {
                            "serviceMetaData": {
                                "serviceName": "splitByDelimiterFIXEDv1",
                                "serviceVersion": "1",
                                "messageFormat": "FIXED",
                                "serviceDescription": "The splitter service will break down message based on a supplied delimiter",
                                "documentationLink": "http://wmlink/jira",
                                "@class": "com.walmart.intech.armada.engine.service.contracts.splitter.SplitByDelimiterFIXEDv1"
                            },
                            "serviceSchema": {
                                "type": "object",
                                "id": "urn:jsonschema:com:walmart:intech:armada:engine:service:contracts:splitter:SplitByDelimiterFIXEDv1",
                                "properties": {
                                    "delimiter": {
                                        "type": "string",
                                        "required": true
                                    }
                                }
                            }
                        },
                        "serviceProperties": {
                            "@class": "com.walmart.intech.armada.engine.service.contracts.splitter.SplitByDelimiterFIXEDv1",
                            "delimiter": "\n"
                        }
                    }
                ]
            },
            {
                "hopName": "transformation-hop",
                "hopType": "transformation-hop",
                "hopTypeDesc": "The Transformation hop will be responsible for the message transformation handling from within Armada",
                "from": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.TRANSFORMATION.SERVICE.IN"
                },
                "to": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.EXIT.SERVICE.IN"
                },
                "services": [
                    {
                        "serviceContract": {
                            "serviceMetaData": {
                                "serviceName": "serviceName",
                                "serviceVersion": "1",
                                "messageFormat": "Any",
                                "serviceDescription": "serviceDescription",
                                "documentationLink": "wmlink/documentationLink",
                                "@class": "com.walmart.intech.armada.engine.service.contracts.transformation.TransformationV1"
                            },
                            "serviceSchema": {
                                "type": "object",
                                "id": "urn:jsonschema:com:walmart:intech:armada:engine:service:contracts:transformation:TransformationV1",
                                "properties": {
                                    "mapName": {
                                        "type": "string",
                                        "required": true
                                    },
                                    "inputCard": {
                                        "type": "string",
                                        "required": true
                                    },
                                    "outputCards": {
                                        "type": "array",
                                        "required": true
                                    }
                                }
                            }
                        },
                        "serviceProperties": {
                            "@class": "com.walmart.intech.armada.engine.service.contracts.transformation.TransformationV1",
                            "mapName": "K1_ESB0148_AP_INVOICE",
                            "inputCard": "1",
                            "outputCards": [
                                "1"
                            ]
                        }
                    }
                ]
            },
            {
                "hopName": "egress",
                "hopType": "egress",
                "hopTypeDesc": "The Exit hop will be responsible for routing the message to its final destination",
                "from": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.EXIT.SERVICE.IN"
                },
                "to": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "K1.SAP.AP_INVOICE_I0616.EXIT.OUT"
                }
            }
        ],
        "services": [
            {
                "serviceContract": {
                    "serviceMetaData": {
                        "serviceName": "auditV1",
                        "serviceVersion": "1",
                        "messageFormat": "Any",
                        "serviceDescription": "The Audit Service will drive whether or not to audit the payload or the header once the message is processed by the auditing service",
                        "documentationLink": "wmlink/documentationLink",
                        "@class": "com.walmart.intech.armada.engine.service.contracts.audit.AuditV1"
                    },
                    "serviceSchema": {
                        "type": "object",
                        "id": "urn:jsonschema:com:walmart:intech:armada:engine:service:contracts:audit:AuditV1",
                        "properties": {
                            "auditPayload": {
                                "type": "boolean",
                                "required": true
                            },
                            "auditHeader": {
                                "type": "boolean",
                                "required": true
                            },
                            "endpointName": {
                                "type": "string",
                                "required": true
                            },
                            "endpointProtocol": {
                                "type": "string",
                                "required": true
                            }
                        }
                    }
                },
                "serviceProperties": {
                    "@class": "com.walmart.intech.armada.engine.service.contracts.audit.AuditV1",
                    "auditPayload": true,
                    "auditHeader": true,
                    "endpointName": "ARMADA.AUDIT.SERVICE.OUT",
                    "endpointProtocol": "wmq"
                }
            }
        ],
        "lastUpdatedBy": "Command Center",
        "links": [
            {
                "rel": "getIntegrationScenario",
                "href": "http://localhost:8080/scenarios/ESB0148_AP_INVOICE/K1/1/1",
                "media": "application/json;charset=UTF-8",
                "type": "GET"
            },
            {
                "rel": "deleteIntegrationScenario",
                "href": "http://localhost:8080/scenarios/ESB0148_AP_INVOICE/K1/1/1",
                "media": "application/json;charset=UTF-8",
                "type": "DELETE"
            },
            {
                "rel": "updateIntegrationScenario",
                "href": "http://localhost:8080/scenarios/ESB0148_AP_INVOICE/K1/1/1",
                "media": "application/json;charset=UTF-8",
                "type": "PUT"
            }
        ]
    },
    {
        "scenarioId": 894,
        "scenarioName": "ESB0894_GL_JRNL_POSTING",
        "scenarioCountry": "R1",
        "environmentCode": 1,
        "instanceTypeCode": 1,
        "scenarioTypeName": "Messaging",
        "lastUpdated": "2020-01-27T22:50:09.538Z",
        "hops": [
            {
                "hopName": "ingress",
                "hopType": "ingress",
                "hopTypeDesc": "The Entry hop will be responsible for the ingress handling from within Armada",
                "from": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.ENTRY.SERVICE.IN"
                },
                "to": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.TRANSFORMATION.SERVICE.IN"
                }
            },
            {
                "hopName": "transformation-hop",
                "hopType": "transformation-hop",
                "hopTypeDesc": "The Transformation hop will be responsible for the message transformation handling from within Armada",
                "from": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.TRANSFORMATION.SERVICE.IN"
                },
                "to": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.EXIT.SERVICE.IN"
                },
                "services": [
                    {
                        "serviceContract": {
                            "serviceMetaData": {
                                "serviceName": "serviceName",
                                "serviceVersion": "1",
                                "messageFormat": "Any",
                                "serviceDescription": "serviceDescription",
                                "documentationLink": "wmlink/documentationLink",
                                "@class": "com.walmart.intech.armada.engine.service.contracts.transformation.TransformationV1"
                            },
                            "serviceSchema": {
                                "type": "object",
                                "id": "urn:jsonschema:com:walmart:intech:armada:engine:service:contracts:transformation:TransformationV1",
                                "properties": {
                                    "mapName": {
                                        "type": "string",
                                        "required": true
                                    },
                                    "inputCard": {
                                        "type": "string",
                                        "required": true
                                    },
                                    "outputCards": {
                                        "type": "array",
                                        "required": true
                                    }
                                }
                            }
                        },
                        "serviceProperties": {
                            "@class": "com.walmart.intech.armada.engine.service.contracts.transformation.TransformationV1",
                            "mapName": "ESB0894_GL_JRNL_POSTING_REST_V1",
                            "inputCard": "1",
                            "outputCards": [
                                "1"
                            ]
                        }
                    }
                ]
            },
            {
                "hopName": "egress",
                "hopType": "egress",
                "hopTypeDesc": "The Exit hop will be responsible for routing the message to its final destination",
                "from": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.EXIT.SERVICE.IN"
                },
                "to": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "EMEA.SAP.FAA.EXIT.OUT"
                }
            }
        ],
        "services": [
            {
                "serviceContract": {
                    "serviceMetaData": {
                        "serviceName": "auditV1",
                        "serviceVersion": "1",
                        "messageFormat": "Any",
                        "serviceDescription": "The Audit Service will drive whether or not to audit the payload or the header once the message is processed by the auditing service",
                        "documentationLink": "wmlink/documentationLink",
                        "@class": "com.walmart.intech.armada.engine.service.contracts.audit.AuditV1"
                    },
                    "serviceSchema": {
                        "type": "object",
                        "id": "urn:jsonschema:com:walmart:intech:armada:engine:service:contracts:audit:AuditV1",
                        "properties": {
                            "auditPayload": {
                                "type": "boolean",
                                "required": true
                            },
                            "auditHeader": {
                                "type": "boolean",
                                "required": true
                            },
                            "endpointName": {
                                "type": "string",
                                "required": true
                            },
                            "endpointProtocol": {
                                "type": "string",
                                "required": true
                            }
                        }
                    }
                },
                "serviceProperties": {
                    "@class": "com.walmart.intech.armada.engine.service.contracts.audit.AuditV1",
                    "auditPayload": true,
                    "auditHeader": true,
                    "endpointName": "ARMADA.AUDIT.SERVICE.OUT",
                    "endpointProtocol": "wmq"
                }
            }
        ],
        "lastUpdatedBy": "Command Center",
        "links": [
            {
                "rel": "getIntegrationScenario",
                "href": "http://localhost:8080/scenarios/ESB0894_GL_JRNL_POSTING/R1/1/1",
                "media": "application/json;charset=UTF-8",
                "type": "GET"
            },
            {
                "rel": "deleteIntegrationScenario",
                "href": "http://localhost:8080/scenarios/ESB0894_GL_JRNL_POSTING/R1/1/1",
                "media": "application/json;charset=UTF-8",
                "type": "DELETE"
            },
            {
                "rel": "updateIntegrationScenario",
                "href": "http://localhost:8080/scenarios/ESB0894_GL_JRNL_POSTING/R1/1/1",
                "media": "application/json;charset=UTF-8",
                "type": "PUT"
            }
        ]
    },
    {
        "scenarioId": 894,
        "scenarioName": "ESB0894_GL_JRNL_POSTING",
        "scenarioCountry": "R2",
        "environmentCode": 1,
        "instanceTypeCode": 1,
        "scenarioTypeName": "Messaging",
        "lastUpdated": "2020-01-24T19:12:52.068Z",
        "hops": [
            {
                "hopName": "ingress",
                "hopType": "ingress",
                "hopTypeDesc": "The Entry hop will be responsible for the ingress handling from within Armada",
                "from": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.ENTRY.SERVICE.IN"
                },
                "to": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.TRANSFORMATION.SERVICE.IN"
                }
            },
            {
                "hopName": "transformation-hop",
                "hopType": "transformation-hop",
                "hopTypeDesc": "The Transformation hop will be responsible for the message transformation handling from within Armada",
                "from": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.TRANSFORMATION.SERVICE.IN"
                },
                "to": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.EXIT.SERVICE.IN"
                },
                "services": [
                    {
                        "serviceContract": {
                            "serviceMetaData": {
                                "serviceName": "serviceName",
                                "serviceVersion": "1",
                                "messageFormat": "Any",
                                "serviceDescription": "serviceDescription",
                                "documentationLink": "wmlink/documentationLink",
                                "@class": "com.walmart.intech.armada.engine.service.contracts.transformation.TransformationV1"
                            },
                            "serviceSchema": {
                                "type": "object",
                                "id": "urn:jsonschema:com:walmart:intech:armada:engine:service:contracts:transformation:TransformationV1",
                                "properties": {
                                    "mapName": {
                                        "type": "string",
                                        "required": true
                                    },
                                    "inputCard": {
                                        "type": "string",
                                        "required": true
                                    },
                                    "outputCards": {
                                        "type": "array",
                                        "required": true
                                    }
                                }
                            }
                        },
                        "serviceProperties": {
                            "@class": "com.walmart.intech.armada.engine.service.contracts.transformation.TransformationV1",
                            "mapName": "ESB0894_GL_JRNL_POSTING_REST_V1",
                            "inputCard": "1",
                            "outputCards": [
                                "1"
                            ]
                        }
                    }
                ]
            },
            {
                "hopName": "egress",
                "hopType": "egress",
                "hopTypeDesc": "The Exit hop will be responsible for routing the message to its final destination",
                "from": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.EXIT.SERVICE.IN"
                },
                "to": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "LTAM.SAP.FAA.EXIT.OUT"
                }
            }
        ],
        "services": [
            {
                "serviceContract": {
                    "serviceMetaData": {
                        "serviceName": "auditV1",
                        "serviceVersion": "1",
                        "messageFormat": "Any",
                        "serviceDescription": "The Audit Service will drive whether or not to audit the payload or the header once the message is processed by the auditing service",
                        "documentationLink": "wmlink/documentationLink",
                        "@class": "com.walmart.intech.armada.engine.service.contracts.audit.AuditV1"
                    },
                    "serviceSchema": {
                        "type": "object",
                        "id": "urn:jsonschema:com:walmart:intech:armada:engine:service:contracts:audit:AuditV1",
                        "properties": {
                            "auditPayload": {
                                "type": "boolean",
                                "required": true
                            },
                            "auditHeader": {
                                "type": "boolean",
                                "required": true
                            },
                            "endpointName": {
                                "type": "string",
                                "required": true
                            },
                            "endpointProtocol": {
                                "type": "string",
                                "required": true
                            }
                        }
                    }
                },
                "serviceProperties": {
                    "@class": "com.walmart.intech.armada.engine.service.contracts.audit.AuditV1",
                    "auditPayload": true,
                    "auditHeader": true,
                    "endpointName": "ARMADA.AUDIT.SERVICE.OUT",
                    "endpointProtocol": "wmq"
                }
            }
        ],
        "lastUpdatedBy": "g3jenki",
        "links": [
            {
                "rel": "getIntegrationScenario",
                "href": "http://localhost:8080/scenarios/ESB0894_GL_JRNL_POSTING/R2/1/1",
                "media": "application/json;charset=UTF-8",
                "type": "GET"
            },
            {
                "rel": "deleteIntegrationScenario",
                "href": "http://localhost:8080/scenarios/ESB0894_GL_JRNL_POSTING/R2/1/1",
                "media": "application/json;charset=UTF-8",
                "type": "DELETE"
            },
            {
                "rel": "updateIntegrationScenario",
                "href": "http://localhost:8080/scenarios/ESB0894_GL_JRNL_POSTING/R2/1/1",
                "media": "application/json;charset=UTF-8",
                "type": "PUT"
            }
        ]
    },
    {
        "scenarioId": 894,
        "scenarioName": "ESB0894_GL_JRNL_POSTING",
        "scenarioCountry": "R3",
        "environmentCode": 1,
        "instanceTypeCode": 1,
        "scenarioTypeName": "Messaging",
        "lastUpdated": "2020-01-24T16:26:19.859Z",
        "hops": [
            {
                "hopName": "ingress",
                "hopType": "ingress",
                "hopTypeDesc": "The Entry hop will be responsible for the ingress handling from within Armada",
                "from": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.ENTRY.SERVICE.IN"
                },
                "to": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.TRANSFORMATION.SERVICE.IN"
                }
            },
            {
                "hopName": "transformation-hop",
                "hopType": "transformation-hop",
                "hopTypeDesc": "The Transformation hop will be responsible for the message transformation handling from within Armada",
                "from": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.TRANSFORMATION.SERVICE.IN"
                },
                "to": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.EXIT.SERVICE.IN"
                },
                "services": [
                    {
                        "serviceContract": {
                            "serviceMetaData": {
                                "serviceName": "serviceName",
                                "serviceVersion": "1",
                                "messageFormat": "Any",
                                "serviceDescription": "serviceDescription",
                                "documentationLink": "wmlink/documentationLink",
                                "@class": "com.walmart.intech.armada.engine.service.contracts.transformation.TransformationV1"
                            },
                            "serviceSchema": {
                                "type": "object",
                                "id": "urn:jsonschema:com:walmart:intech:armada:engine:service:contracts:transformation:TransformationV1",
                                "properties": {
                                    "mapName": {
                                        "type": "string",
                                        "required": true
                                    },
                                    "inputCard": {
                                        "type": "string",
                                        "required": true
                                    },
                                    "outputCards": {
                                        "type": "array",
                                        "required": true
                                    }
                                }
                            }
                        },
                        "serviceProperties": {
                            "@class": "com.walmart.intech.armada.engine.service.contracts.transformation.TransformationV1",
                            "mapName": "ESB0894_GL_JRNL_POSTING_REST_V1",
                            "inputCard": "1",
                            "outputCards": [
                                "1"
                            ]
                        }
                    }
                ]
            },
            {
                "hopName": "egress",
                "hopType": "egress",
                "hopTypeDesc": "The Exit hop will be responsible for routing the message to its final destination",
                "from": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.EXIT.SERVICE.IN"
                },
                "to": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "APAC.SAP.FAA.EXIT.OUT"
                }
            }
        ],
        "services": [
            {
                "serviceContract": {
                    "serviceMetaData": {
                        "serviceName": "auditV1",
                        "serviceVersion": "1",
                        "messageFormat": "Any",
                        "serviceDescription": "The Audit Service will drive whether or not to audit the payload or the header once the message is processed by the auditing service",
                        "documentationLink": "wmlink/documentationLink",
                        "@class": "com.walmart.intech.armada.engine.service.contracts.audit.AuditV1"
                    },
                    "serviceSchema": {
                        "type": "object",
                        "id": "urn:jsonschema:com:walmart:intech:armada:engine:service:contracts:audit:AuditV1",
                        "properties": {
                            "auditPayload": {
                                "type": "boolean",
                                "required": true
                            },
                            "auditHeader": {
                                "type": "boolean",
                                "required": true
                            },
                            "endpointName": {
                                "type": "string",
                                "required": true
                            },
                            "endpointProtocol": {
                                "type": "string",
                                "required": true
                            }
                        }
                    }
                },
                "serviceProperties": {
                    "@class": "com.walmart.intech.armada.engine.service.contracts.audit.AuditV1",
                    "auditPayload": true,
                    "auditHeader": true,
                    "endpointName": "ARMADA.AUDIT.SERVICE.OUT",
                    "endpointProtocol": "wmq"
                }
            }
        ],
        "lastUpdatedBy": "g3jenki",
        "links": [
            {
                "rel": "getIntegrationScenario",
                "href": "http://localhost:8080/scenarios/ESB0894_GL_JRNL_POSTING/R3/1/1",
                "media": "application/json;charset=UTF-8",
                "type": "GET"
            },
            {
                "rel": "deleteIntegrationScenario",
                "href": "http://localhost:8080/scenarios/ESB0894_GL_JRNL_POSTING/R3/1/1",
                "media": "application/json;charset=UTF-8",
                "type": "DELETE"
            },
            {
                "rel": "updateIntegrationScenario",
                "href": "http://localhost:8080/scenarios/ESB0894_GL_JRNL_POSTING/R3/1/1",
                "media": "application/json;charset=UTF-8",
                "type": "PUT"
            }
        ]
    },
    {
        "scenarioId": 894,
        "scenarioName": "ESB0894_GL_JRNL_POSTING",
        "scenarioCountry": "R4",
        "environmentCode": 1,
        "instanceTypeCode": 1,
        "scenarioTypeName": "Messaging",
        "lastUpdated": "2020-01-24T19:06:58.963Z",
        "hops": [
            {
                "hopName": "ingress",
                "hopType": "ingress",
                "hopTypeDesc": "The Entry hop will be responsible for the ingress handling from within Armada",
                "from": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.ENTRY.SERVICE.IN"
                },
                "to": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.TRANSFORMATION.SERVICE.IN"
                }
            },
            {
                "hopName": "transformation-hop",
                "hopType": "transformation-hop",
                "hopTypeDesc": "The Transformation hop will be responsible for the message transformation handling from within Armada",
                "from": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.TRANSFORMATION.SERVICE.IN"
                },
                "to": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.EXIT.SERVICE.IN"
                },
                "services": [
                    {
                        "serviceContract": {
                            "serviceMetaData": {
                                "serviceName": "serviceName",
                                "serviceVersion": "1",
                                "messageFormat": "Any",
                                "serviceDescription": "serviceDescription",
                                "documentationLink": "wmlink/documentationLink",
                                "@class": "com.walmart.intech.armada.engine.service.contracts.transformation.TransformationV1"
                            },
                            "serviceSchema": {
                                "type": "object",
                                "id": "urn:jsonschema:com:walmart:intech:armada:engine:service:contracts:transformation:TransformationV1",
                                "properties": {
                                    "mapName": {
                                        "type": "string",
                                        "required": true
                                    },
                                    "inputCard": {
                                        "type": "string",
                                        "required": true
                                    },
                                    "outputCards": {
                                        "type": "array",
                                        "required": true
                                    }
                                }
                            }
                        },
                        "serviceProperties": {
                            "@class": "com.walmart.intech.armada.engine.service.contracts.transformation.TransformationV1",
                            "mapName": "ESB0894_GL_JRNL_POSTING_REST_V1",
                            "inputCard": "1",
                            "outputCards": [
                                "1"
                            ]
                        }
                    }
                ]
            },
            {
                "hopName": "egress",
                "hopType": "egress",
                "hopTypeDesc": "The Exit hop will be responsible for routing the message to its final destination",
                "from": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.EXIT.SERVICE.IN"
                },
                "to": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "NAMR.SAP.FAA.EXIT.OUT"
                }
            }
        ],
        "services": [
            {
                "serviceContract": {
                    "serviceMetaData": {
                        "serviceName": "auditV1",
                        "serviceVersion": "1",
                        "messageFormat": "Any",
                        "serviceDescription": "The Audit Service will drive whether or not to audit the payload or the header once the message is processed by the auditing service",
                        "documentationLink": "wmlink/documentationLink",
                        "@class": "com.walmart.intech.armada.engine.service.contracts.audit.AuditV1"
                    },
                    "serviceSchema": {
                        "type": "object",
                        "id": "urn:jsonschema:com:walmart:intech:armada:engine:service:contracts:audit:AuditV1",
                        "properties": {
                            "auditPayload": {
                                "type": "boolean",
                                "required": true
                            },
                            "auditHeader": {
                                "type": "boolean",
                                "required": true
                            },
                            "endpointName": {
                                "type": "string",
                                "required": true
                            },
                            "endpointProtocol": {
                                "type": "string",
                                "required": true
                            }
                        }
                    }
                },
                "serviceProperties": {
                    "@class": "com.walmart.intech.armada.engine.service.contracts.audit.AuditV1",
                    "auditPayload": true,
                    "auditHeader": true,
                    "endpointName": "ARMADA.AUDIT.SERVICE.OUT",
                    "endpointProtocol": "wmq"
                }
            }
        ],
        "lastUpdatedBy": "g3jenki",
        "links": [
            {
                "rel": "getIntegrationScenario",
                "href": "http://localhost:8080/scenarios/ESB0894_GL_JRNL_POSTING/R4/1/1",
                "media": "application/json;charset=UTF-8",
                "type": "GET"
            },
            {
                "rel": "deleteIntegrationScenario",
                "href": "http://localhost:8080/scenarios/ESB0894_GL_JRNL_POSTING/R4/1/1",
                "media": "application/json;charset=UTF-8",
                "type": "DELETE"
            },
            {
                "rel": "updateIntegrationScenario",
                "href": "http://localhost:8080/scenarios/ESB0894_GL_JRNL_POSTING/R4/1/1",
                "media": "application/json;charset=UTF-8",
                "type": "PUT"
            }
        ]
    },
    {
        "scenarioId": 911,
        "scenarioName": "ESB0911_EXRATE_M_SUB",
        "scenarioCountry": "WW",
        "environmentCode": 1,
        "instanceTypeCode": 1,
        "scenarioTypeName": "Messaging",
        "lastUpdated": "2020-01-24T19:20:52.253Z",
        "hops": [
            {
                "hopName": "ingress",
                "hopType": "ingress",
                "hopTypeDesc": "The Entry hop will be responsible for the ingress handling from within Armada",
                "from": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.ENTRY.SERVICE.IN"
                },
                "to": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.TRANSFORMATION.SERVICE.IN"
                }
            },
            {
                "hopName": "transformation-hop",
                "hopType": "transformation-hop",
                "hopTypeDesc": "The Transformation hop will be responsible for the message transformation handling from within Armada",
                "from": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.TRANSFORMATION.SERVICE.IN"
                },
                "to": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.EXIT.SERVICE.IN"
                },
                "services": [
                    {
                        "serviceContract": {
                            "serviceMetaData": {
                                "serviceName": "serviceName",
                                "serviceVersion": "1",
                                "messageFormat": "Any",
                                "serviceDescription": "serviceDescription",
                                "documentationLink": "wmlink/documentationLink",
                                "@class": "com.walmart.intech.armada.engine.service.contracts.transformation.TransformationV1"
                            },
                            "serviceSchema": {
                                "type": "object",
                                "id": "urn:jsonschema:com:walmart:intech:armada:engine:service:contracts:transformation:TransformationV1",
                                "properties": {
                                    "mapName": {
                                        "type": "string",
                                        "required": true
                                    },
                                    "inputCard": {
                                        "type": "string",
                                        "required": true
                                    },
                                    "outputCards": {
                                        "type": "array",
                                        "required": true
                                    }
                                }
                            }
                        },
                        "serviceProperties": {
                            "@class": "com.walmart.intech.armada.engine.service.contracts.transformation.TransformationV1",
                            "mapName": "ESB0917_EXRATE_GROUP_REID_V1",
                            "inputCard": "1",
                            "outputCards": [
                                "1"
                            ]
                        }
                    }
                ]
            },
            {
                "hopName": "egress",
                "hopType": "egress",
                "hopTypeDesc": "The Exit hop will be responsible for routing the message to its final destination",
                "from": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.EXIT.SERVICE.IN"
                },
                "to": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESSBASE.EX_RATE.M.EXIT.OUT"
                }
            }
        ],
        "services": [
            {
                "serviceContract": {
                    "serviceMetaData": {
                        "serviceName": "auditV1",
                        "serviceVersion": "1",
                        "messageFormat": "Any",
                        "serviceDescription": "The Audit Service will drive whether or not to audit the payload or the header once the message is processed by the auditing service",
                        "documentationLink": "wmlink/documentationLink",
                        "@class": "com.walmart.intech.armada.engine.service.contracts.audit.AuditV1"
                    },
                    "serviceSchema": {
                        "type": "object",
                        "id": "urn:jsonschema:com:walmart:intech:armada:engine:service:contracts:audit:AuditV1",
                        "properties": {
                            "auditPayload": {
                                "type": "boolean",
                                "required": true
                            },
                            "auditHeader": {
                                "type": "boolean",
                                "required": true
                            },
                            "endpointName": {
                                "type": "string",
                                "required": true
                            },
                            "endpointProtocol": {
                                "type": "string",
                                "required": true
                            }
                        }
                    }
                },
                "serviceProperties": {
                    "@class": "com.walmart.intech.armada.engine.service.contracts.audit.AuditV1",
                    "auditPayload": true,
                    "auditHeader": true,
                    "endpointName": "ARMADA.AUDIT.SERVICE.OUT",
                    "endpointProtocol": "wmq"
                }
            }
        ],
        "lastUpdatedBy": "g3jenki",
        "links": [
            {
                "rel": "getIntegrationScenario",
                "href": "http://localhost:8080/scenarios/ESB0911_EXRATE_M_SUB/WW/1/1",
                "media": "application/json;charset=UTF-8",
                "type": "GET"
            },
            {
                "rel": "deleteIntegrationScenario",
                "href": "http://localhost:8080/scenarios/ESB0911_EXRATE_M_SUB/WW/1/1",
                "media": "application/json;charset=UTF-8",
                "type": "DELETE"
            },
            {
                "rel": "updateIntegrationScenario",
                "href": "http://localhost:8080/scenarios/ESB0911_EXRATE_M_SUB/WW/1/1",
                "media": "application/json;charset=UTF-8",
                "type": "PUT"
            }
        ]
    },
    {
        "scenarioId": 912,
        "scenarioName": "ESB0912_EXRATE_P_SUB",
        "scenarioCountry": "WW",
        "environmentCode": 1,
        "instanceTypeCode": 1,
        "scenarioTypeName": "Messaging",
        "lastUpdated": "2020-01-24T19:21:23.207Z",
        "hops": [
            {
                "hopName": "ingress",
                "hopType": "ingress",
                "hopTypeDesc": "The Entry hop will be responsible for the ingress handling from within Armada",
                "from": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.ENTRY.SERVICE.IN"
                },
                "to": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.TRANSFORMATION.SERVICE.IN"
                }
            },
            {
                "hopName": "transformation-hop",
                "hopType": "transformation-hop",
                "hopTypeDesc": "The Transformation hop will be responsible for the message transformation handling from within Armada",
                "from": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.TRANSFORMATION.SERVICE.IN"
                },
                "to": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.EXIT.SERVICE.IN"
                },
                "services": [
                    {
                        "serviceContract": {
                            "serviceMetaData": {
                                "serviceName": "serviceName",
                                "serviceVersion": "1",
                                "messageFormat": "Any",
                                "serviceDescription": "serviceDescription",
                                "documentationLink": "wmlink/documentationLink",
                                "@class": "com.walmart.intech.armada.engine.service.contracts.transformation.TransformationV1"
                            },
                            "serviceSchema": {
                                "type": "object",
                                "id": "urn:jsonschema:com:walmart:intech:armada:engine:service:contracts:transformation:TransformationV1",
                                "properties": {
                                    "mapName": {
                                        "type": "string",
                                        "required": true
                                    },
                                    "inputCard": {
                                        "type": "string",
                                        "required": true
                                    },
                                    "outputCards": {
                                        "type": "array",
                                        "required": true
                                    }
                                }
                            }
                        },
                        "serviceProperties": {
                            "@class": "com.walmart.intech.armada.engine.service.contracts.transformation.TransformationV1",
                            "mapName": "ESB0917_EXRATE_GROUP_REID_V1",
                            "inputCard": "1",
                            "outputCards": [
                                "1"
                            ]
                        }
                    }
                ]
            },
            {
                "hopName": "egress",
                "hopType": "egress",
                "hopTypeDesc": "The Exit hop will be responsible for routing the message to its final destination",
                "from": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.EXIT.SERVICE.IN"
                },
                "to": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESSBASE.EX_RATE.P.EXIT.OUT"
                }
            }
        ],
        "services": [
            {
                "serviceContract": {
                    "serviceMetaData": {
                        "serviceName": "auditV1",
                        "serviceVersion": "1",
                        "messageFormat": "Any",
                        "serviceDescription": "The Audit Service will drive whether or not to audit the payload or the header once the message is processed by the auditing service",
                        "documentationLink": "wmlink/documentationLink",
                        "@class": "com.walmart.intech.armada.engine.service.contracts.audit.AuditV1"
                    },
                    "serviceSchema": {
                        "type": "object",
                        "id": "urn:jsonschema:com:walmart:intech:armada:engine:service:contracts:audit:AuditV1",
                        "properties": {
                            "auditPayload": {
                                "type": "boolean",
                                "required": true
                            },
                            "auditHeader": {
                                "type": "boolean",
                                "required": true
                            },
                            "endpointName": {
                                "type": "string",
                                "required": true
                            },
                            "endpointProtocol": {
                                "type": "string",
                                "required": true
                            }
                        }
                    }
                },
                "serviceProperties": {
                    "@class": "com.walmart.intech.armada.engine.service.contracts.audit.AuditV1",
                    "auditPayload": true,
                    "auditHeader": true,
                    "endpointName": "ARMADA.AUDIT.SERVICE.OUT",
                    "endpointProtocol": "wmq"
                }
            }
        ],
        "lastUpdatedBy": "g3jenki",
        "links": [
            {
                "rel": "getIntegrationScenario",
                "href": "http://localhost:8080/scenarios/ESB0912_EXRATE_P_SUB/WW/1/1",
                "media": "application/json;charset=UTF-8",
                "type": "GET"
            },
            {
                "rel": "deleteIntegrationScenario",
                "href": "http://localhost:8080/scenarios/ESB0912_EXRATE_P_SUB/WW/1/1",
                "media": "application/json;charset=UTF-8",
                "type": "DELETE"
            },
            {
                "rel": "updateIntegrationScenario",
                "href": "http://localhost:8080/scenarios/ESB0912_EXRATE_P_SUB/WW/1/1",
                "media": "application/json;charset=UTF-8",
                "type": "PUT"
            }
        ]
    },
    {
        "scenarioId": 913,
        "scenarioName": "ESB0913_EXRATE_X_SUB",
        "scenarioCountry": "WW",
        "environmentCode": 1,
        "instanceTypeCode": 1,
        "scenarioTypeName": "Messaging",
        "lastUpdated": "2020-01-24T19:22:00.881Z",
        "hops": [
            {
                "hopName": "ingress",
                "hopType": "ingress",
                "hopTypeDesc": "The Entry hop will be responsible for the ingress handling from within Armada",
                "from": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.ENTRY.SERVICE.IN"
                },
                "to": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.TRANSFORMATION.SERVICE.IN"
                }
            },
            {
                "hopName": "transformation-hop",
                "hopType": "transformation-hop",
                "hopTypeDesc": "The Transformation hop will be responsible for the message transformation handling from within Armada",
                "from": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.TRANSFORMATION.SERVICE.IN"
                },
                "to": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.EXIT.SERVICE.IN"
                },
                "services": [
                    {
                        "serviceContract": {
                            "serviceMetaData": {
                                "serviceName": "serviceName",
                                "serviceVersion": "1",
                                "messageFormat": "Any",
                                "serviceDescription": "serviceDescription",
                                "documentationLink": "wmlink/documentationLink",
                                "@class": "com.walmart.intech.armada.engine.service.contracts.transformation.TransformationV1"
                            },
                            "serviceSchema": {
                                "type": "object",
                                "id": "urn:jsonschema:com:walmart:intech:armada:engine:service:contracts:transformation:TransformationV1",
                                "properties": {
                                    "mapName": {
                                        "type": "string",
                                        "required": true
                                    },
                                    "inputCard": {
                                        "type": "string",
                                        "required": true
                                    },
                                    "outputCards": {
                                        "type": "array",
                                        "required": true
                                    }
                                }
                            }
                        },
                        "serviceProperties": {
                            "@class": "com.walmart.intech.armada.engine.service.contracts.transformation.TransformationV1",
                            "mapName": "ESB0917_EXRATE_GROUP_REID_V1",
                            "inputCard": "1",
                            "outputCards": [
                                "1"
                            ]
                        }
                    }
                ]
            },
            {
                "hopName": "egress",
                "hopType": "egress",
                "hopTypeDesc": "The Exit hop will be responsible for routing the message to its final destination",
                "from": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.EXIT.SERVICE.IN"
                },
                "to": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESSBASE.EX_RATE.X.EXIT.OUT"
                }
            }
        ],
        "services": [
            {
                "serviceContract": {
                    "serviceMetaData": {
                        "serviceName": "auditV1",
                        "serviceVersion": "1",
                        "messageFormat": "Any",
                        "serviceDescription": "The Audit Service will drive whether or not to audit the payload or the header once the message is processed by the auditing service",
                        "documentationLink": "wmlink/documentationLink",
                        "@class": "com.walmart.intech.armada.engine.service.contracts.audit.AuditV1"
                    },
                    "serviceSchema": {
                        "type": "object",
                        "id": "urn:jsonschema:com:walmart:intech:armada:engine:service:contracts:audit:AuditV1",
                        "properties": {
                            "auditPayload": {
                                "type": "boolean",
                                "required": true
                            },
                            "auditHeader": {
                                "type": "boolean",
                                "required": true
                            },
                            "endpointName": {
                                "type": "string",
                                "required": true
                            },
                            "endpointProtocol": {
                                "type": "string",
                                "required": true
                            }
                        }
                    }
                },
                "serviceProperties": {
                    "@class": "com.walmart.intech.armada.engine.service.contracts.audit.AuditV1",
                    "auditPayload": true,
                    "auditHeader": true,
                    "endpointName": "ARMADA.AUDIT.SERVICE.OUT",
                    "endpointProtocol": "wmq"
                }
            }
        ],
        "lastUpdatedBy": "g3jenki",
        "links": [
            {
                "rel": "getIntegrationScenario",
                "href": "http://localhost:8080/scenarios/ESB0913_EXRATE_X_SUB/WW/1/1",
                "media": "application/json;charset=UTF-8",
                "type": "GET"
            },
            {
                "rel": "deleteIntegrationScenario",
                "href": "http://localhost:8080/scenarios/ESB0913_EXRATE_X_SUB/WW/1/1",
                "media": "application/json;charset=UTF-8",
                "type": "DELETE"
            },
            {
                "rel": "updateIntegrationScenario",
                "href": "http://localhost:8080/scenarios/ESB0913_EXRATE_X_SUB/WW/1/1",
                "media": "application/json;charset=UTF-8",
                "type": "PUT"
            }
        ]
    },
    {
        "scenarioId": 914,
        "scenarioName": "ESB0914_EXRATE_Y_SUB",
        "scenarioCountry": "WW",
        "environmentCode": 1,
        "instanceTypeCode": 1,
        "scenarioTypeName": "Messaging",
        "lastUpdated": "2020-01-27T21:35:50.513Z",
        "hops": [
            {
                "hopName": "ingress",
                "hopType": "ingress",
                "hopTypeDesc": "The Entry hop will be responsible for the ingress handling from within Armada",
                "from": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.ENTRY.SERVICE.IN"
                },
                "to": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.TRANSFORMATION.SERVICE.IN"
                }
            },
            {
                "hopName": "transformation-hop",
                "hopType": "transformation-hop",
                "hopTypeDesc": "The Transformation hop will be responsible for the message transformation handling from within Armada",
                "from": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.TRANSFORMATION.SERVICE.IN"
                },
                "to": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.EXIT.SERVICE.IN"
                },
                "services": [
                    {
                        "serviceContract": {
                            "serviceMetaData": {
                                "serviceName": "serviceName",
                                "serviceVersion": "1",
                                "messageFormat": "Any",
                                "serviceDescription": "serviceDescription",
                                "documentationLink": "wmlink/documentationLink",
                                "@class": "com.walmart.intech.armada.engine.service.contracts.transformation.TransformationV1"
                            },
                            "serviceSchema": {
                                "type": "object",
                                "id": "urn:jsonschema:com:walmart:intech:armada:engine:service:contracts:transformation:TransformationV1",
                                "properties": {
                                    "mapName": {
                                        "type": "string",
                                        "required": true
                                    },
                                    "inputCard": {
                                        "type": "string",
                                        "required": true
                                    },
                                    "outputCards": {
                                        "type": "array",
                                        "required": true
                                    }
                                }
                            }
                        },
                        "serviceProperties": {
                            "@class": "com.walmart.intech.armada.engine.service.contracts.transformation.TransformationV1",
                            "mapName": "ESB0917_EXRATE_GROUP_REID_V1",
                            "inputCard": "1",
                            "outputCards": [
                                "1"
                            ]
                        }
                    }
                ]
            },
            {
                "hopName": "egress",
                "hopType": "egress",
                "hopTypeDesc": "The Exit hop will be responsible for routing the message to its final destination",
                "from": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.EXIT.SERVICE.IN"
                },
                "to": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESSBASE.EX_RATE.Y.EXIT.OUT"
                }
            }
        ],
        "services": [
            {
                "serviceContract": {
                    "serviceMetaData": {
                        "serviceName": "auditV1",
                        "serviceVersion": "1",
                        "messageFormat": "Any",
                        "serviceDescription": "The Audit Service will drive whether or not to audit the payload or the header once the message is processed by the auditing service",
                        "documentationLink": "wmlink/documentationLink",
                        "@class": "com.walmart.intech.armada.engine.service.contracts.audit.AuditV1"
                    },
                    "serviceSchema": {
                        "type": "object",
                        "id": "urn:jsonschema:com:walmart:intech:armada:engine:service:contracts:audit:AuditV1",
                        "properties": {
                            "auditPayload": {
                                "type": "boolean",
                                "required": true
                            },
                            "auditHeader": {
                                "type": "boolean",
                                "required": true
                            },
                            "endpointName": {
                                "type": "string",
                                "required": true
                            },
                            "endpointProtocol": {
                                "type": "string",
                                "required": true
                            }
                        }
                    }
                },
                "serviceProperties": {
                    "@class": "com.walmart.intech.armada.engine.service.contracts.audit.AuditV1",
                    "auditPayload": true,
                    "auditHeader": true,
                    "endpointName": "ARMADA.AUDIT.SERVICE.OUT",
                    "endpointProtocol": "wmq"
                }
            }
        ],
        "lastUpdatedBy": "Command Center",
        "links": [
            {
                "rel": "getIntegrationScenario",
                "href": "http://localhost:8080/scenarios/ESB0914_EXRATE_Y_SUB/WW/1/1",
                "media": "application/json;charset=UTF-8",
                "type": "GET"
            },
            {
                "rel": "deleteIntegrationScenario",
                "href": "http://localhost:8080/scenarios/ESB0914_EXRATE_Y_SUB/WW/1/1",
                "media": "application/json;charset=UTF-8",
                "type": "DELETE"
            },
            {
                "rel": "updateIntegrationScenario",
                "href": "http://localhost:8080/scenarios/ESB0914_EXRATE_Y_SUB/WW/1/1",
                "media": "application/json;charset=UTF-8",
                "type": "PUT"
            }
        ]
    },
    {
        "scenarioId": 915,
        "scenarioName": "ESB0915_EXRATE_U_SUB",
        "scenarioCountry": "WW",
        "environmentCode": 1,
        "instanceTypeCode": 1,
        "scenarioTypeName": "Messaging",
        "lastUpdated": "2020-01-24T19:22:49.628Z",
        "hops": [
            {
                "hopName": "ingress",
                "hopType": "ingress",
                "hopTypeDesc": "The Entry hop will be responsible for the ingress handling from within Armada",
                "from": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.ENTRY.SERVICE.IN"
                },
                "to": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.TRANSFORMATION.SERVICE.IN"
                }
            },
            {
                "hopName": "transformation-hop",
                "hopType": "transformation-hop",
                "hopTypeDesc": "The Transformation hop will be responsible for the message transformation handling from within Armada",
                "from": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.TRANSFORMATION.SERVICE.IN"
                },
                "to": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.EXIT.SERVICE.IN"
                },
                "services": [
                    {
                        "serviceContract": {
                            "serviceMetaData": {
                                "serviceName": "serviceName",
                                "serviceVersion": "1",
                                "messageFormat": "Any",
                                "serviceDescription": "serviceDescription",
                                "documentationLink": "wmlink/documentationLink",
                                "@class": "com.walmart.intech.armada.engine.service.contracts.transformation.TransformationV1"
                            },
                            "serviceSchema": {
                                "type": "object",
                                "id": "urn:jsonschema:com:walmart:intech:armada:engine:service:contracts:transformation:TransformationV1",
                                "properties": {
                                    "mapName": {
                                        "type": "string",
                                        "required": true
                                    },
                                    "inputCard": {
                                        "type": "string",
                                        "required": true
                                    },
                                    "outputCards": {
                                        "type": "array",
                                        "required": true
                                    }
                                }
                            }
                        },
                        "serviceProperties": {
                            "@class": "com.walmart.intech.armada.engine.service.contracts.transformation.TransformationV1",
                            "mapName": "ESB0917_EXRATE_GROUP_REID_V1",
                            "inputCard": "1",
                            "outputCards": [
                                "1"
                            ]
                        }
                    }
                ]
            },
            {
                "hopName": "egress",
                "hopType": "egress",
                "hopTypeDesc": "The Exit hop will be responsible for routing the message to its final destination",
                "from": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.EXIT.SERVICE.IN"
                },
                "to": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESSBASE.EX_RATE.U.EXIT.OUT"
                }
            }
        ],
        "services": [
            {
                "serviceContract": {
                    "serviceMetaData": {
                        "serviceName": "auditV1",
                        "serviceVersion": "1",
                        "messageFormat": "Any",
                        "serviceDescription": "The Audit Service will drive whether or not to audit the payload or the header once the message is processed by the auditing service",
                        "documentationLink": "wmlink/documentationLink",
                        "@class": "com.walmart.intech.armada.engine.service.contracts.audit.AuditV1"
                    },
                    "serviceSchema": {
                        "type": "object",
                        "id": "urn:jsonschema:com:walmart:intech:armada:engine:service:contracts:audit:AuditV1",
                        "properties": {
                            "auditPayload": {
                                "type": "boolean",
                                "required": true
                            },
                            "auditHeader": {
                                "type": "boolean",
                                "required": true
                            },
                            "endpointName": {
                                "type": "string",
                                "required": true
                            },
                            "endpointProtocol": {
                                "type": "string",
                                "required": true
                            }
                        }
                    }
                },
                "serviceProperties": {
                    "@class": "com.walmart.intech.armada.engine.service.contracts.audit.AuditV1",
                    "auditPayload": true,
                    "auditHeader": true,
                    "endpointName": "ARMADA.AUDIT.SERVICE.OUT",
                    "endpointProtocol": "wmq"
                }
            }
        ],
        "lastUpdatedBy": "g3jenki",
        "links": [
            {
                "rel": "getIntegrationScenario",
                "href": "http://localhost:8080/scenarios/ESB0915_EXRATE_U_SUB/WW/1/1",
                "media": "application/json;charset=UTF-8",
                "type": "GET"
            },
            {
                "rel": "deleteIntegrationScenario",
                "href": "http://localhost:8080/scenarios/ESB0915_EXRATE_U_SUB/WW/1/1",
                "media": "application/json;charset=UTF-8",
                "type": "DELETE"
            },
            {
                "rel": "updateIntegrationScenario",
                "href": "http://localhost:8080/scenarios/ESB0915_EXRATE_U_SUB/WW/1/1",
                "media": "application/json;charset=UTF-8",
                "type": "PUT"
            }
        ]
    },
    {
        "scenarioId": 916,
        "scenarioName": "ESB0916_EXRATE_T_SUB",
        "scenarioCountry": "WW",
        "environmentCode": 1,
        "instanceTypeCode": 1,
        "scenarioTypeName": "Messaging",
        "lastUpdated": "2020-01-24T19:23:10.691Z",
        "hops": [
            {
                "hopName": "ingress",
                "hopType": "ingress",
                "hopTypeDesc": "The Entry hop will be responsible for the ingress handling from within Armada",
                "from": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.ENTRY.SERVICE.IN"
                },
                "to": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.TRANSFORMATION.SERVICE.IN"
                }
            },
            {
                "hopName": "transformation-hop",
                "hopType": "transformation-hop",
                "hopTypeDesc": "The Transformation hop will be responsible for the message transformation handling from within Armada",
                "from": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.TRANSFORMATION.SERVICE.IN"
                },
                "to": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.EXIT.SERVICE.IN"
                },
                "services": [
                    {
                        "serviceContract": {
                            "serviceMetaData": {
                                "serviceName": "serviceName",
                                "serviceVersion": "1",
                                "messageFormat": "Any",
                                "serviceDescription": "serviceDescription",
                                "documentationLink": "wmlink/documentationLink",
                                "@class": "com.walmart.intech.armada.engine.service.contracts.transformation.TransformationV1"
                            },
                            "serviceSchema": {
                                "type": "object",
                                "id": "urn:jsonschema:com:walmart:intech:armada:engine:service:contracts:transformation:TransformationV1",
                                "properties": {
                                    "mapName": {
                                        "type": "string",
                                        "required": true
                                    },
                                    "inputCard": {
                                        "type": "string",
                                        "required": true
                                    },
                                    "outputCards": {
                                        "type": "array",
                                        "required": true
                                    }
                                }
                            }
                        },
                        "serviceProperties": {
                            "@class": "com.walmart.intech.armada.engine.service.contracts.transformation.TransformationV1",
                            "mapName": "ESB0917_EXRATE_GROUP_REID_V1",
                            "inputCard": "1",
                            "outputCards": [
                                "1"
                            ]
                        }
                    }
                ]
            },
            {
                "hopName": "egress",
                "hopType": "egress",
                "hopTypeDesc": "The Exit hop will be responsible for routing the message to its final destination",
                "from": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.EXIT.SERVICE.IN"
                },
                "to": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESSBASE.EX_RATE.T.EXIT.OUT"
                }
            }
        ],
        "services": [
            {
                "serviceContract": {
                    "serviceMetaData": {
                        "serviceName": "auditV1",
                        "serviceVersion": "1",
                        "messageFormat": "Any",
                        "serviceDescription": "The Audit Service will drive whether or not to audit the payload or the header once the message is processed by the auditing service",
                        "documentationLink": "wmlink/documentationLink",
                        "@class": "com.walmart.intech.armada.engine.service.contracts.audit.AuditV1"
                    },
                    "serviceSchema": {
                        "type": "object",
                        "id": "urn:jsonschema:com:walmart:intech:armada:engine:service:contracts:audit:AuditV1",
                        "properties": {
                            "auditPayload": {
                                "type": "boolean",
                                "required": true
                            },
                            "auditHeader": {
                                "type": "boolean",
                                "required": true
                            },
                            "endpointName": {
                                "type": "string",
                                "required": true
                            },
                            "endpointProtocol": {
                                "type": "string",
                                "required": true
                            }
                        }
                    }
                },
                "serviceProperties": {
                    "@class": "com.walmart.intech.armada.engine.service.contracts.audit.AuditV1",
                    "auditPayload": true,
                    "auditHeader": true,
                    "endpointName": "ARMADA.AUDIT.SERVICE.OUT",
                    "endpointProtocol": "wmq"
                }
            }
        ],
        "lastUpdatedBy": "g3jenki",
        "links": [
            {
                "rel": "getIntegrationScenario",
                "href": "http://localhost:8080/scenarios/ESB0916_EXRATE_T_SUB/WW/1/1",
                "media": "application/json;charset=UTF-8",
                "type": "GET"
            },
            {
                "rel": "deleteIntegrationScenario",
                "href": "http://localhost:8080/scenarios/ESB0916_EXRATE_T_SUB/WW/1/1",
                "media": "application/json;charset=UTF-8",
                "type": "DELETE"
            },
            {
                "rel": "updateIntegrationScenario",
                "href": "http://localhost:8080/scenarios/ESB0916_EXRATE_T_SUB/WW/1/1",
                "media": "application/json;charset=UTF-8",
                "type": "PUT"
            }
        ]
    },
    {
        "scenarioId": 917,
        "scenarioName": "ESB0917_EXRATE_REID",
        "scenarioCountry": "WW",
        "environmentCode": 1,
        "instanceTypeCode": 1,
        "scenarioTypeName": "Messaging",
        "lastUpdated": "2020-01-24T21:03:09.764Z",
        "hops": [
            {
                "hopName": "ingress",
                "hopType": "ingress",
                "hopTypeDesc": "The Entry hop will be responsible for the ingress handling from within Armada",
                "from": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.ENTRY.SERVICE.IN"
                },
                "to": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.CBR.SERVICE.IN"
                }
            },
            {
                "hopName": "cbr-hop",
                "hopType": "cbr-hop",
                "hopTypeDesc": "The content based router hop will be responsible for inspecting the incoming message and re-identify the message based on its content,so that it can be routed to appropriate destination",
                "from": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.CBR.SERVICE.IN"
                },
                "to": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.EXIT.SERVICE.IN"
                },
                "services": [
                    {
                        "serviceContract": {
                            "serviceMetaData": {
                                "serviceName": "reIdentificationRule",
                                "serviceVersion": "1",
                                "messageFormat": "XML",
                                "serviceDescription": "Decision service which executes a series of conditions and re-identifies the message based on the results",
                                "documentationLink": "https://confluence.walmart.com/pages/viewpage.action?spaceKey=ARMADA&title=Scooter+-+Decision+Service",
                                "@class": "com.walmart.intech.armada.engine.service.contracts.decision.reid.ReIdentificationRule"
                            },
                            "serviceSchema": {
                                "type": "object",
                                "id": "urn:jsonschema:com:walmart:intech:armada:engine:service:contracts:decision:reid:ReIdentificationRule",
                                "properties": {
                                    "ruleName": {
                                        "type": "string",
                                        "required": true
                                    },
                                    "leftOperand": {
                                        "type": "object",
                                        "id": "urn:jsonschema:com:walmart:intech:armada:decision:operand:Operand"
                                    },
                                    "rightOperand": {
                                        "type": "object",
                                        "$ref": "urn:jsonschema:com:walmart:intech:armada:decision:operand:Operand"
                                    },
                                    "comparator": {
                                        "type": "object",
                                        "id": "urn:jsonschema:com:walmart:intech:armada:decision:comparator:Comparator"
                                    },
                                    "actionOnTrue": {
                                        "type": "object",
                                        "id": "urn:jsonschema:com:walmart:intech:armada:decision:action:Action"
                                    },
                                    "actionOnFalse": {
                                        "type": "object",
                                        "$ref": "urn:jsonschema:com:walmart:intech:armada:decision:action:Action"
                                    }
                                }
                            }
                        },
                        "serviceProperties": {
                            "@class": "com.walmart.intech.armada.engine.service.contracts.decision.reid.ReIdentificationRule",
                            "ruleName": "Exchange Rate Type M",
                            "leftOperand": {
                                "@class": "com.walmart.intech.armada.decision.operand.XMLOperand",
                                "xpath": "ExchangeRates/ExchangeRate/rateType",
                                "occurrence": 0
                            },
                            "rightOperand": {
                                "@class": "com.walmart.intech.armada.decision.operand.StringOperand",
                                "staticOperandValue": "M"
                            },
                            "comparator": {
                                "@class": "com.walmart.intech.armada.decision.comparator.StringComparator",
                                "stringOperator": "EQUAL"
                            },
                            "actionOnTrue": {
                                "@class": "com.walmart.intech.armada.decision.action.ReIdentify",
                                "routingSlips": [
                                    {
                                        "scenarioName": "ESB0911_EXRATE_M_SUB",
                                        "scenarioCountry": "WW"
                                    }
                                ]
                            },
                            "actionOnFalse": {
                                "@class": "com.walmart.intech.armada.decision.action.ExecuteRule",
                                "rule": {
                                    "@class": "com.walmart.intech.armada.engine.service.contracts.decision.reid.ReIdentificationRule",
                                    "ruleName": "Exchange Rate Type P",
                                    "leftOperand": {
                                        "@class": "com.walmart.intech.armada.decision.operand.XMLOperand",
                                        "xpath": "ExchangeRates/ExchangeRate/rateType",
                                        "occurrence": 0
                                    },
                                    "rightOperand": {
                                        "@class": "com.walmart.intech.armada.decision.operand.StringOperand",
                                        "staticOperandValue": "P"
                                    },
                                    "comparator": {
                                        "@class": "com.walmart.intech.armada.decision.comparator.StringComparator",
                                        "stringOperator": "EQUAL"
                                    },
                                    "actionOnTrue": {
                                        "@class": "com.walmart.intech.armada.decision.action.ReIdentify",
                                        "routingSlips": [
                                            {
                                                "scenarioName": "ESB0912_EXRATE_P_SUB",
                                                "scenarioCountry": "WW"
                                            }
                                        ]
                                    },
                                    "actionOnFalse": {
                                        "@class": "com.walmart.intech.armada.decision.action.ExecuteRule",
                                        "rule": {
                                            "@class": "com.walmart.intech.armada.engine.service.contracts.decision.reid.ReIdentificationRule",
                                            "ruleName": "Exchange Rate Type X",
                                            "leftOperand": {
                                                "@class": "com.walmart.intech.armada.decision.operand.XMLOperand",
                                                "xpath": "ExchangeRates/ExchangeRate/rateType",
                                                "occurrence": 0
                                            },
                                            "rightOperand": {
                                                "@class": "com.walmart.intech.armada.decision.operand.StringOperand",
                                                "staticOperandValue": "X"
                                            },
                                            "comparator": {
                                                "@class": "com.walmart.intech.armada.decision.comparator.StringComparator",
                                                "stringOperator": "EQUAL"
                                            },
                                            "actionOnTrue": {
                                                "@class": "com.walmart.intech.armada.decision.action.ReIdentify",
                                                "routingSlips": [
                                                    {
                                                        "scenarioName": "ESB0913_EXRATE_X_SUB",
                                                        "scenarioCountry": "WW"
                                                    }
                                                ]
                                            },
                                            "actionOnFalse": {
                                                "@class": "com.walmart.intech.armada.decision.action.ExecuteRule",
                                                "rule": {
                                                    "@class": "com.walmart.intech.armada.engine.service.contracts.decision.reid.ReIdentificationRule",
                                                    "ruleName": "Exchange Rate Type Y",
                                                    "leftOperand": {
                                                        "@class": "com.walmart.intech.armada.decision.operand.XMLOperand",
                                                        "xpath": "ExchangeRates/ExchangeRate/rateType",
                                                        "occurrence": 0
                                                    },
                                                    "rightOperand": {
                                                        "@class": "com.walmart.intech.armada.decision.operand.StringOperand",
                                                        "staticOperandValue": "Y"
                                                    },
                                                    "comparator": {
                                                        "@class": "com.walmart.intech.armada.decision.comparator.StringComparator",
                                                        "stringOperator": "EQUAL"
                                                    },
                                                    "actionOnTrue": {
                                                        "@class": "com.walmart.intech.armada.decision.action.ReIdentify",
                                                        "routingSlips": [
                                                            {
                                                                "scenarioName": "ESB0914_EXRATE_Y_SUB",
                                                                "scenarioCountry": "WW"
                                                            }
                                                        ]
                                                    },
                                                    "actionOnFalse": {
                                                        "@class": "com.walmart.intech.armada.decision.action.ExecuteRule",
                                                        "rule": {
                                                            "@class": "com.walmart.intech.armada.engine.service.contracts.decision.reid.ReIdentificationRule",
                                                            "ruleName": "Exchange Rate Type U",
                                                            "leftOperand": {
                                                                "@class": "com.walmart.intech.armada.decision.operand.XMLOperand",
                                                                "xpath": "ExchangeRates/ExchangeRate/rateType",
                                                                "occurrence": 0
                                                            },
                                                            "rightOperand": {
                                                                "@class": "com.walmart.intech.armada.decision.operand.StringOperand",
                                                                "staticOperandValue": "U"
                                                            },
                                                            "comparator": {
                                                                "@class": "com.walmart.intech.armada.decision.comparator.StringComparator",
                                                                "stringOperator": "EQUAL"
                                                            },
                                                            "actionOnTrue": {
                                                                "@class": "com.walmart.intech.armada.decision.action.ReIdentify",
                                                                "routingSlips": [
                                                                    {
                                                                        "scenarioName": "ESB0915_EXRATE_U_SUB",
                                                                        "scenarioCountry": "WW"
                                                                    }
                                                                ]
                                                            },
                                                            "actionOnFalse": {
                                                                "@class": "com.walmart.intech.armada.decision.action.ExecuteRule",
                                                                "rule": {
                                                                    "@class": "com.walmart.intech.armada.engine.service.contracts.decision.reid.ReIdentificationRule",
                                                                    "ruleName": "Exchange Rate Type T",
                                                                    "leftOperand": {
                                                                        "@class": "com.walmart.intech.armada.decision.operand.XMLOperand",
                                                                        "xpath": "ExchangeRates/ExchangeRate/rateType",
                                                                        "occurrence": 0
                                                                    },
                                                                    "rightOperand": {
                                                                        "@class": "com.walmart.intech.armada.decision.operand.StringOperand",
                                                                        "staticOperandValue": "T"
                                                                    },
                                                                    "comparator": {
                                                                        "@class": "com.walmart.intech.armada.decision.comparator.StringComparator",
                                                                        "stringOperator": "EQUAL"
                                                                    },
                                                                    "actionOnTrue": {
                                                                        "@class": "com.walmart.intech.armada.decision.action.ReIdentify",
                                                                        "routingSlips": [
                                                                            {
                                                                                "scenarioName": "ESB0916_EXRATE_T_SUB",
                                                                                "scenarioCountry": "WW"
                                                                            }
                                                                        ]
                                                                    },
                                                                    "actionOnFalse": {
                                                                        "@class": "com.walmart.intech.armada.decision.action.Terminate"
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                ]
            },
            {
                "hopName": "egress",
                "hopType": "egress",
                "hopTypeDesc": "The Exit hop will be responsible for routing the message to its final destination",
                "from": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.EXIT.SERVICE.IN"
                },
                "to": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.ENTRY.SERVICE.IN"
                }
            }
        ],
        "services": [
            {
                "serviceContract": {
                    "serviceMetaData": {
                        "serviceName": "auditV1",
                        "serviceVersion": "1",
                        "messageFormat": "Any",
                        "serviceDescription": "The Audit Service will drive whether or not to audit the payload or the header once the message is processed by the auditing service",
                        "documentationLink": "wmlink/documentationLink",
                        "@class": "com.walmart.intech.armada.engine.service.contracts.audit.AuditV1"
                    },
                    "serviceSchema": {
                        "type": "object",
                        "id": "urn:jsonschema:com:walmart:intech:armada:engine:service:contracts:audit:AuditV1",
                        "properties": {
                            "auditPayload": {
                                "type": "boolean",
                                "required": true
                            },
                            "auditHeader": {
                                "type": "boolean",
                                "required": true
                            },
                            "endpointName": {
                                "type": "string",
                                "required": true
                            },
                            "endpointProtocol": {
                                "type": "string",
                                "required": true
                            }
                        }
                    }
                },
                "serviceProperties": {
                    "@class": "com.walmart.intech.armada.engine.service.contracts.audit.AuditV1",
                    "auditPayload": true,
                    "auditHeader": true,
                    "endpointName": "ARMADA.AUDIT.SERVICE.OUT",
                    "endpointProtocol": "wmq"
                }
            }
        ],
        "lastUpdatedBy": "g3jenki",
        "links": [
            {
                "rel": "getIntegrationScenario",
                "href": "http://localhost:8080/scenarios/ESB0917_EXRATE_REID/WW/1/1",
                "media": "application/json;charset=UTF-8",
                "type": "GET"
            },
            {
                "rel": "deleteIntegrationScenario",
                "href": "http://localhost:8080/scenarios/ESB0917_EXRATE_REID/WW/1/1",
                "media": "application/json;charset=UTF-8",
                "type": "DELETE"
            },
            {
                "rel": "updateIntegrationScenario",
                "href": "http://localhost:8080/scenarios/ESB0917_EXRATE_REID/WW/1/1",
                "media": "application/json;charset=UTF-8",
                "type": "PUT"
            }
        ]
    },
    {
        "scenarioId": 1037,
        "scenarioName": "ESB1037_GL_JRNL_POSTING_REID",
        "scenarioCountry": "WW",
        "environmentCode": 1,
        "instanceTypeCode": 1,
        "scenarioTypeName": "Messaging",
        "lastUpdated": "2020-01-24T22:24:02.574Z",
        "hops": [
            {
                "hopName": "ingress",
                "hopType": "ingress",
                "hopTypeDesc": "The Entry hop will be responsible for the ingress handling from within Armada",
                "from": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.ENTRY.SERVICE.IN"
                },
                "to": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.CBR.SERVICE.IN"
                }
            },
            {
                "hopName": "cbr-hop",
                "hopType": "cbr-hop",
                "hopTypeDesc": "The content based router hop will be responsible for inspecting the incoming message and re-identify the message based on its content,so that it can be routed to appropriate destination",
                "from": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.CBR.SERVICE.IN"
                },
                "to": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.EXIT.SERVICE.IN"
                },
                "services": [
                    {
                        "serviceContract": {
                            "serviceMetaData": {
                                "serviceName": "reIdentificationRule",
                                "serviceVersion": "1",
                                "messageFormat": "XML",
                                "serviceDescription": "Decision service which executes a series of conditions and re-identifies the message based on the results",
                                "documentationLink": "https://confluence.walmart.com/pages/viewpage.action?spaceKey=ARMADA&title=Scooter+-+Decision+Service",
                                "@class": "com.walmart.intech.armada.engine.service.contracts.decision.reid.ReIdentificationRule"
                            },
                            "serviceSchema": {
                                "type": "object",
                                "id": "urn:jsonschema:com:walmart:intech:armada:engine:service:contracts:decision:reid:ReIdentificationRule",
                                "properties": {
                                    "ruleName": {
                                        "type": "string",
                                        "required": true
                                    },
                                    "leftOperand": {
                                        "type": "object",
                                        "id": "urn:jsonschema:com:walmart:intech:armada:decision:operand:Operand"
                                    },
                                    "rightOperand": {
                                        "type": "object",
                                        "$ref": "urn:jsonschema:com:walmart:intech:armada:decision:operand:Operand"
                                    },
                                    "comparator": {
                                        "type": "object",
                                        "id": "urn:jsonschema:com:walmart:intech:armada:decision:comparator:Comparator"
                                    },
                                    "actionOnTrue": {
                                        "type": "object",
                                        "id": "urn:jsonschema:com:walmart:intech:armada:decision:action:Action"
                                    },
                                    "actionOnFalse": {
                                        "type": "object",
                                        "$ref": "urn:jsonschema:com:walmart:intech:armada:decision:action:Action"
                                    }
                                }
                            }
                        },
                        "serviceProperties": {
                            "@class": "com.walmart.intech.armada.engine.service.contracts.decision.reid.ReIdentificationRule",
                            "ruleName": "Identify Region By Country - R2",
                            "leftOperand": {
                                "@class": "com.walmart.intech.armada.decision.operand.XMLOperand",
                                "xpath": "/*[local-name()='journalPostRequest']/*[local-name()='data']/*[local-name()='journalEntries']/*[local-name()='journalEntry'][child::*[local-name()='country'] = 'MX' or child::*[local-name()='country'] = 'AR' or child::*[local-name()='country'] = 'CR' or child::*[local-name()='country'] = 'GT' or child::*[local-name()='country'] = 'HN' or child::*[local-name()='country'] = 'NI' or child::*[local-name()='country'] = 'SV']/*[local-name()='country']",
                                "occurrence": 0
                            },
                            "rightOperand": {
                                "@class": "com.walmart.intech.armada.decision.operand.StringOperand",
                                "staticOperandValue": "NA"
                            },
                            "comparator": {
                                "@class": "com.walmart.intech.armada.decision.comparator.StringComparator",
                                "stringOperator": "IS_NULL"
                            },
                            "actionOnTrue": {
                                "@class": "com.walmart.intech.armada.decision.action.ExecuteRule",
                                "rule": {
                                    "@class": "com.walmart.intech.armada.engine.service.contracts.decision.reid.ReIdentificationRule",
                                    "ruleName": "Identify Region By Country - R1",
                                    "leftOperand": {
                                        "@class": "com.walmart.intech.armada.decision.operand.XMLOperand",
                                        "xpath": "/*[local-name()='journalPostRequest']/*[local-name()='data']/*[local-name()='journalEntries']/*[local-name()='journalEntry'][child::*[local-name()='country'] = 'GB']/*[local-name()='country']",
                                        "occurrence": 0
                                    },
                                    "rightOperand": {
                                        "@class": "com.walmart.intech.armada.decision.operand.StringOperand",
                                        "staticOperandValue": "NA"
                                    },
                                    "comparator": {
                                        "@class": "com.walmart.intech.armada.decision.comparator.StringComparator",
                                        "stringOperator": "IS_NULL"
                                    },
                                    "actionOnTrue": {
                                        "@class": "com.walmart.intech.armada.decision.action.ExecuteRule",
                                        "rule": {
                                            "@class": "com.walmart.intech.armada.engine.service.contracts.decision.reid.ReIdentificationRule",
                                            "ruleName": "Identify Region By Country - R3",
                                            "leftOperand": {
                                                "@class": "com.walmart.intech.armada.decision.operand.XMLOperand",
                                                "xpath": "/*[local-name()='journalPostRequest']/*[local-name()='data']/*[local-name()='journalEntries']/*[local-name()='journalEntry'][child::*[local-name()='country'] = 'CN' or child::*[local-name()='country'] = 'JP']/*[local-name()='country']",
                                                "occurrence": 0
                                            },
                                            "rightOperand": {
                                                "@class": "com.walmart.intech.armada.decision.operand.StringOperand",
                                                "staticOperandValue": "NA"
                                            },
                                            "comparator": {
                                                "@class": "com.walmart.intech.armada.decision.comparator.StringComparator",
                                                "stringOperator": "IS_NULL"
                                            },
                                            "actionOnTrue": {
                                                "@class": "com.walmart.intech.armada.decision.action.ExecuteRule",
                                                "rule": {
                                                    "@class": "com.walmart.intech.armada.engine.service.contracts.decision.reid.ReIdentificationRule",
                                                    "ruleName": "Identify Region By Country - R4",
                                                    "leftOperand": {
                                                        "@class": "com.walmart.intech.armada.decision.operand.XMLOperand",
                                                        "xpath": "/*[local-name()='journalPostRequest']/*[local-name()='data']/*[local-name()='journalEntries']/*[local-name()='journalEntry'][child::*[local-name()='country'] = 'US' or child::*[local-name()='country'] = 'CA' or child::*[local-name()='country'] = 'PR']/*[local-name()='country']",
                                                        "occurrence": 0
                                                    },
                                                    "rightOperand": {
                                                        "@class": "com.walmart.intech.armada.decision.operand.StringOperand",
                                                        "staticOperandValue": "NA"
                                                    },
                                                    "comparator": {
                                                        "@class": "com.walmart.intech.armada.decision.comparator.StringComparator",
                                                        "stringOperator": "IS_NULL"
                                                    },
                                                    "actionOnTrue": {
                                                        "@class": "com.walmart.intech.armada.decision.action.Terminate"
                                                    },
                                                    "actionOnFalse": {
                                                        "@class": "com.walmart.intech.armada.decision.action.ReIdentify",
                                                        "routingSlips": [
                                                            {
                                                                "scenarioName": "ESB0894_GL_JRNL_POSTING",
                                                                "scenarioCountry": "R4"
                                                            }
                                                        ]
                                                    }
                                                }
                                            },
                                            "actionOnFalse": {
                                                "@class": "com.walmart.intech.armada.decision.action.ReIdentify",
                                                "routingSlips": [
                                                    {
                                                        "scenarioName": "ESB0894_GL_JRNL_POSTING",
                                                        "scenarioCountry": "R3"
                                                    }
                                                ]
                                            }
                                        }
                                    },
                                    "actionOnFalse": {
                                        "@class": "com.walmart.intech.armada.decision.action.ReIdentify",
                                        "routingSlips": [
                                            {
                                                "scenarioName": "ESB0894_GL_JRNL_POSTING",
                                                "scenarioCountry": "R1"
                                            }
                                        ]
                                    }
                                }
                            },
                            "actionOnFalse": {
                                "@class": "com.walmart.intech.armada.decision.action.ReIdentify",
                                "routingSlips": [
                                    {
                                        "scenarioName": "ESB0894_GL_JRNL_POSTING",
                                        "scenarioCountry": "R2"
                                    }
                                ]
                            }
                        }
                    }
                ]
            },
            {
                "hopName": "egress",
                "hopType": "egress",
                "hopTypeDesc": "The Exit hop will be responsible for routing the message to its final destination",
                "from": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.EXIT.SERVICE.IN"
                },
                "to": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "szr50011.wal-mart.com",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.ENTRY.SERVICE.IN"
                }
            }
        ],
        "services": [
            {
                "serviceContract": {
                    "serviceMetaData": {
                        "serviceName": "auditV1",
                        "serviceVersion": "1",
                        "messageFormat": "Any",
                        "serviceDescription": "The Audit Service will drive whether or not to audit the payload or the header once the message is processed by the auditing service",
                        "documentationLink": "wmlink/documentationLink",
                        "@class": "com.walmart.intech.armada.engine.service.contracts.audit.AuditV1"
                    },
                    "serviceSchema": {
                        "type": "object",
                        "id": "urn:jsonschema:com:walmart:intech:armada:engine:service:contracts:audit:AuditV1",
                        "properties": {
                            "auditPayload": {
                                "type": "boolean",
                                "required": true
                            },
                            "auditHeader": {
                                "type": "boolean",
                                "required": true
                            },
                            "endpointName": {
                                "type": "string",
                                "required": true
                            },
                            "endpointProtocol": {
                                "type": "string",
                                "required": true
                            }
                        }
                    }
                },
                "serviceProperties": {
                    "@class": "com.walmart.intech.armada.engine.service.contracts.audit.AuditV1",
                    "auditPayload": true,
                    "auditHeader": true,
                    "endpointName": "ARMADA.AUDIT.SERVICE.OUT",
                    "endpointProtocol": "wmq"
                }
            }
        ],
        "lastUpdatedBy": "g3jenki",
        "links": [
            {
                "rel": "getIntegrationScenario",
                "href": "http://localhost:8080/scenarios/ESB1037_GL_JRNL_POSTING_REID/WW/1/1",
                "media": "application/json;charset=UTF-8",
                "type": "GET"
            },
            {
                "rel": "deleteIntegrationScenario",
                "href": "http://localhost:8080/scenarios/ESB1037_GL_JRNL_POSTING_REID/WW/1/1",
                "media": "application/json;charset=UTF-8",
                "type": "DELETE"
            },
            {
                "rel": "updateIntegrationScenario",
                "href": "http://localhost:8080/scenarios/ESB1037_GL_JRNL_POSTING_REID/WW/1/1",
                "media": "application/json;charset=UTF-8",
                "type": "PUT"
            }
        ]
    }
]
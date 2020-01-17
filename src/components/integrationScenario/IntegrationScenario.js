export const IntegrationScenario = [
    {
        "scenarioId": 41,
        "scenarioName": "ESB0041_GL_POSTING_V1",
        "scenarioCountry": "WW",
        "environmentCode": 1,
        "instanceTypeCode": 1,
        "scenarioTypeName": "Messaging",
        "lastUpdated": "2019-12-11T20:42:31.025Z",
        "hops": [
            {
                "hopName": "Arkansas",
                "hopType": "entry-hop",
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
                },
                "services": [
                    "[]"
                ]
            },
            {
                "hopName": "Arkansas",
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
                    "[{\"@class\":\"com.walmart.intech.armada.engine.service.contracts.transformation.TransformationV1\"",
                    "\"mapEndpoint\":\"http://m-c02w5218htdd.homeoffice.wal-mart.com:8080/tx-rest/v1/itx/maps/direct/ESB0041_GL_POSTING_V1?output=1&return=audit\"",
                    "\"inputCardName\":\"1\"}]"
                ]
            },
            {
                "hopName": "Arkansas",
                "hopType": "exit-hop",
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
                },
                "services": [
                    "[]"
                ]
            }
        ],
        "services": [
            "[{\"@class\":\"com.walmart.intech.armada.engine.service.contracts.audit.AuditV1\"",
            "\"auditPayload\":\"true\"",
            "\"auditHeader\":\"true\"",
            "\"endpointName\":\"ARMADA.AUDIT.SERVICE.OUT\"",
            "\"endpointProtocol\":\"wmq\"}]"
        ],
        "lastUpdatedBy": "Gary Demo",
        "links": [
            {
                "rel": "getIntegrationScenario",
                "href": "http://localhost:8080/scenarios/ESB0041_GL_POSTING_V1/WW/1/1",
                "media": "application/json;charset=UTF-8",
                "type": "GET"
            },
            {
                "rel": "deleteIntegrationScenario",
                "href": "http://localhost:8080/scenarios/ESB0041_GL_POSTING_V1/WW/1/1",
                "media": "application/json;charset=UTF-8",
                "type": "DELETE"
            },
            {
                "rel": "updateIntegrationScenario",
                "href": "http://localhost:8080/scenarios/ESB0041_GL_POSTING_V1/WW/1/1",
                "media": "application/json;charset=UTF-8",
                "type": "PUT"
            }
        ]
    },
    {
        "scenarioId": 42,
        "scenarioName": "ESB0042_GL_BACKFEED",
        "scenarioCountry": "WW",
        "environmentCode": 1,
        "instanceTypeCode": 1,
        "scenarioTypeName": "Messaging",
        "lastUpdated": "2020-01-10T15:00:50.794Z",
        "hops": [
            {
                "hopName": "Arkansas",
                "hopType": "entry-hop",
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
                },
                "services": [
                    "[]"
                ]
            },
            {
                "hopName": "Arkansas",
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
                    "[{\"@class\":\"com.walmart.intech.armada.engine.service.contracts.transformation.TransformationV1\"",
                    "\"mapEndpoint\":\"http://m-c02w5218htdd.homeoffice.wal-mart.com:8080/tx-rest/v1/itx/maps/direct/ESB0042_GL_BACKFEED_V2?output=1&return=audit\"",
                    "\"inputCardName\":\"1\"}]"
                ]
            },
            {
                "hopName": "Arkansas",
                "hopType": "exit-hop",
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
                    "endpoint": "WW.JMSTR.GL_BACKFEED_I0167.EXIT.OUT"
                },
                "services": [
                    "[]"
                ]
            }
        ],
        "services": [
            "[{\"@class\":\"com.walmart.intech.armada.engine.service.contracts.audit.AuditV1\"",
            "\"auditPayload\":\"true\"",
            "\"auditHeader\":\"true\"",
            "\"endpointName\":\"ARMADA.AUDIT.SERVICE.OUT\"",
            "\"endpointProtocol\":\"wmq\"}]"
        ],
        "lastUpdatedBy": "Gary Demo",
        "links": [
            {
                "rel": "getIntegrationScenario",
                "href": "http://localhost:8080/scenarios/ESB0042_GL_BACKFEED/WW/1/1",
                "media": "application/json;charset=UTF-8",
                "type": "GET"
            },
            {
                "rel": "deleteIntegrationScenario",
                "href": "http://localhost:8080/scenarios/ESB0042_GL_BACKFEED/WW/1/1",
                "media": "application/json;charset=UTF-8",
                "type": "DELETE"
            },
            {
                "rel": "updateIntegrationScenario",
                "href": "http://localhost:8080/scenarios/ESB0042_GL_BACKFEED/WW/1/1",
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
        "lastUpdated": "2020-01-14T20:55:14.622Z",
        "hops": [
            {
                "hopName": "Arkansas",
                "hopType": "entry-hop",
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
                    "endpoint": "WW.ESB.SPLITTER.SERVICE.IN"
                },
                "services": [
                    "[]"
                ]
            },
            {
                "hopName": "Arkansas",
                "hopType": "splitter-hop",
                "hopTypeDesc": "The Transformation hop will split the message based on specific configurable criteria within Armada",
                "from": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "localhost",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.SPLITTER.SERVICE.IN"
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
                },
                "services": [
                    "[{\"@class\":\"com.walmart.intech.armada.engine.service.contracts.splitter.SplitByDelimiterFIXEDv1\"",
                    "\"delimiter\":\"\\n\"}]"
                ]
            },
            {
                "hopName": "Arkansas",
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
                    "[{\"@class\":\"com.walmart.intech.armada.engine.service.contracts.transformation.TransformationV1\"",
                    "\"mapName\":\"K1_ESB0148_AP_INVOICE\"",
                    "\"inputCard\":\"1\"",
                    "\"outputCards\":[\"1\"]}]"
                ]
            },
            {
                "hopName": "Arkansas",
                "hopType": "exit-hop",
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
                    "endpoint": "K1.SAP.AP_INVOICE_I0616.EXIT.OUT"
                },
                "services": [
                    "[]"
                ]
            }
        ],
        "services": [
            "[{\"@class\":\"com.walmart.intech.armada.engine.service.contracts.audit.AuditV1\"",
            "\"auditPayload\":\"true\"",
            "\"auditHeader\":\"true\"",
            "\"endpointName\":\"ARMADA.AUDIT.SERVICE.OUT\"",
            "\"endpointProtocol\":\"wmq\"}]"
        ],
        "lastUpdatedBy": "g3jenki",
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
        "scenarioId": 153,
        "scenarioName": "ESB0153_AP_INVOICE_REID",
        "scenarioCountry": "K1",
        "environmentCode": 1,
        "instanceTypeCode": 1,
        "scenarioTypeName": "Messaging",
        "lastUpdated": "2020-01-14T20:54:06.387Z",
        "hops": [
            {
                "hopName": "Arkansas",
                "hopType": "entry-hop",
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
                    "endpoint": "WW.ESB.SPLITTER.SERVICE.IN"
                },
                "services": [
                    "[]"
                ]
            },
            {
                "hopName": "Arkansas",
                "hopType": "splitter-hop",
                "hopTypeDesc": "The Transformation hop will split the message based on specific configurable criteria within Armada",
                "from": {
                    "@class": "MqProperties",
                    "componentType": "WMQ",
                    "componentName": "wmq",
                    "host": "localhost",
                    "port": 1414,
                    "channel": "DEV.ADMIN.SVRCONN",
                    "object": "ARMADA.QMGR.ALPHA",
                    "endpoint": "WW.ESB.SPLITTER.SERVICE.IN"
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
                },
                "services": [
                    "[{\"@class\":\"com.walmart.intech.armada.engine.service.contracts.splitter.SplitByDelimiterFIXEDv1\"",
                    "\"delimiter\":\"\\n\"}]"
                ]
            },
            {
                "hopName": "Arkansas",
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
                    "[{\"@class\":\"com.walmart.intech.armada.engine.service.contracts.transformation.TransformationV1\"",
                    "\"mapName\":\"K1_ESB0148_AP_INVOICE\"",
                    "\"inputCard\":\"1\"",
                    "\"outputCards\":[\"1\"]}]"
                ]
            },
            {
                "hopName": "Arkansas",
                "hopType": "exit-hop",
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
                    "endpoint": "K1.SAP.AP_INVOICE_I0616.EXIT.OUT"
                },
                "services": [
                    "[]"
                ]
            }
        ],
        "services": [
            "[{\"@class\":\"com.walmart.intech.armada.engine.service.contracts.audit.AuditV1\"",
            "\"auditPayload\":\"true\"",
            "\"auditHeader\":\"true\"",
            "\"endpointName\":\"ARMADA.AUDIT.SERVICE.OUT\"",
            "\"endpointProtocol\":\"wmq\"}]"
        ],
        "lastUpdatedBy": "g3jenki",
        "links": [
            {
                "rel": "getIntegrationScenario",
                "href": "http://localhost:8080/scenarios/ESB0153_AP_INVOICE_REID/K1/1/1",
                "media": "application/json;charset=UTF-8",
                "type": "GET"
            },
            {
                "rel": "deleteIntegrationScenario",
                "href": "http://localhost:8080/scenarios/ESB0153_AP_INVOICE_REID/K1/1/1",
                "media": "application/json;charset=UTF-8",
                "type": "DELETE"
            },
            {
                "rel": "updateIntegrationScenario",
                "href": "http://localhost:8080/scenarios/ESB0153_AP_INVOICE_REID/K1/1/1",
                "media": "application/json;charset=UTF-8",
                "type": "PUT"
            }
        ]
    },
    {
        "scenarioId": 0,
        "scenarioName": "test7",
        "scenarioCountry": "WW",
        "environmentCode": 1,
        "instanceTypeCode": 1,
        "scenarioTypeName": "test7",
        "lastUpdated": "2019-12-05T20:54:51.200Z",
        "hops": [
            {
                "hopName": "string",
                "hopType": "string",
                "hopTypeDesc": "string",
                "from": {
                    "@class": "MqProperties",
                    "componentType": "fromComponent",
                    "componentName": "fromComponentName",
                    "host": "fromHost",
                    "port": 8080,
                    "channel": "fromChannel",
                    "object": "{String}",
                    "endpoint": "fromEndpoint"
                },
                "to": {
                    "@class": "MqProperties",
                    "componentType": "fromComponent",
                    "componentName": "fromComponentName",
                    "host": "fromHost",
                    "port": 8080,
                    "channel": "fromChannel",
                    "object": "{String}",
                    "endpoint": "fromEndpoint"
                },
                "services": [
                    "[{\"serviceMetaData\":{\"serviceVersion\":\"string\"",
                    "\"messageFormat\":\"string\"",
                    "\"classPath\":\"string\"",
                    "\"serviceDescription\":\"string\"",
                    "\"documentationLink\":\"string\"",
                    "\"serviceName\":\"string\"}}]"
                ]
            }
        ],
        "services": [
            "[{\"serviceMetaData\":{\"serviceVersion\":\"string\"",
            "\"messageFormat\":\"string\"",
            "\"classPath\":\"string\"",
            "\"serviceDescription\":\"string\"",
            "\"documentationLink\":\"string\"",
            "\"serviceName\":\"string\"}",
            "\"serviceSchema\":\"{}\"}]"
        ],
        "lastUpdatedBy": "string",
        "links": [
            {
                "rel": "getIntegrationScenario",
                "href": "http://localhost:8080/scenarios/test7/WW/1/1",
                "media": "application/json;charset=UTF-8",
                "type": "GET"
            },
            {
                Ò
                "rel": "deleteIntegrationScenario",
                "href": "http://localhost:8080/scenarios/test7/WW/1/1",
                "media": "application/json;charset=UTF-8",
                "type": "DELETE"
            },
            {
                "rel": "updateIntegrationScenario",
                "href": "http://localhost:8080/scenarios/test7/WW/1/1",
                "media": "application/json;charset=UTF-8",
                "type": "PUT"
            }
        ]
    }
]
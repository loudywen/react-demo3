export const Hops = [
  {
    "hopName": "Arkansas",
    "hopType": "Exception",
    "lastUpdated": "2020-01-14T23:30:48.062Z",
    "lastUpdatedBy": "engine-exception-b9ff679b6-fq62x",
    "from": [
      {
        "@class": "MqProperties",
        "componentType": "WMQ",
        "componentName": "wmq",
        "host": "szr50011.wal-mart.com",
        "port": 1414,
        "channel": "DEV.ADMIN.SVRCONN",
        "object": "ARMADA.QMGR.ALPHA",
        "endpoint": "ARMADA.EXCEPTION.SERVICE.IN"
      }
    ],
    "to": [
      {
        "@class": "MqProperties",
        "componentType": "WMQ",
        "componentName": "wmq",
        "host": "szr50011.wal-mart.com",
        "port": 1414,
        "channel": "DEV.ADMIN.SVRCONN",
        "object": "ARMADA.QMGR.ALPHA",
        "endpoint": ""
      }
    ],
    "links": [
      {
        "rel": "getHop",
        "href": "http://localhost:8080/hops/Exception/Arkansas",
        "media": "application/json;charset=UTF-8",
        "type": "GET"
      },
      {
        "rel": "deleteHop",
        "href": "http://localhost:8080/hops/Exception/Arkansas",
        "media": "application/json;charset=UTF-8",
        "type": "DELETE"
      },
      {
        "rel": "updateHop",
        "href": "http://localhost:8080/hops/Exception/Arkansas",
        "media": "application/json;charset=UTF-8",
        "type": "PUT"
      }
    ]
  },
  {
    "hopName": "Audit",
    "hopType": "Audit",
    "lastUpdated": "2020-01-06T19:49:42.640Z",
    "lastUpdatedBy": "DWA7DEVUS00062",
    "from": [
      {
        "@class": "MqProperties",
        "componentType": "WMQ",
        "componentName": "wmq",
        "host": "szr50011.wal-mart.com",
        "port": 1414,
        "channel": "DEV.ADMIN.SVRCONN",
        "object": "ARMADA.QMGR.ALPHA",
        "endpoint": "ARMADA.AUDIT.SERVICE.IN"
      }
    ],
    "to": [
      {
        "@class": "MqProperties",
        "componentType": "WMQ",
        "componentName": "wmq",
        "host": "szr50011.wal-mart.com",
        "port": 1414,
        "channel": "DEV.ADMIN.SVRCONN",
        "object": "ARMADA.QMGR.ALPHA",
        "endpoint": ""
      }
    ],
    "links": [
      {
        "rel": "getHop",
        "href": "http://localhost:8080/hops/Audit/Audit",
        "media": "application/json;charset=UTF-8",
        "type": "GET"
      },
      {
        "rel": "deleteHop",
        "href": "http://localhost:8080/hops/Audit/Audit",
        "media": "application/json;charset=UTF-8",
        "type": "DELETE"
      },
      {
        "rel": "updateHop",
        "href": "http://localhost:8080/hops/Audit/Audit",
        "media": "application/json;charset=UTF-8",
        "type": "PUT"
      }
    ]
  },
  {
    "hopName": "Arkansas",
    "hopType": "entry-hop",
    "lastUpdated": "2020-01-15T05:32:04.123Z",
    "lastUpdatedBy": "engine-entry-hop-687d4986c-5ws6p",
    "from": [
      {
        "@class": "MqProperties",
        "componentType": "WMQ",
        "componentName": "wmq",
        "host": "szr50011.wal-mart.com",
        "port": 1414,
        "channel": "DEV.ADMIN.SVRCONN",
        "object": "ARMADA.QMGR.ALPHA",
        "endpoint": "WW.ESB.ENTRY.SERVICE.IN"
      }
    ],
    "to": [
      {
        "@class": "MqProperties",
        "componentType": "WMQ",
        "componentName": "wmq",
        "host": "szr50011.wal-mart.com",
        "port": 1414,
        "channel": "DEV.ADMIN.SVRCONN",
        "object": "ARMADA.QMGR.ALPHA",
        "endpoint": ""
      }
    ],
    "links": [
      {
        "rel": "getHop",
        "href": "http://localhost:8080/hops/entry-hop/Arkansas",
        "media": "application/json;charset=UTF-8",
        "type": "GET"
      },
      {
        "rel": "deleteHop",
        "href": "http://localhost:8080/hops/entry-hop/Arkansas",
        "media": "application/json;charset=UTF-8",
        "type": "DELETE"
      },
      {
        "rel": "updateHop",
        "href": "http://localhost:8080/hops/entry-hop/Arkansas",
        "media": "application/json;charset=UTF-8",
        "type": "PUT"
      }
    ]
  },
  {
    "hopName": "Arkansas",
    "hopType": "exit-hop",
    "lastUpdated": "2020-01-14T23:31:59.075Z",
    "lastUpdatedBy": "engine-exit-hop-68c8ffc66c-bh7sr",
    "from": [
      {
        "@class": "MqProperties",
        "componentType": "WMQ",
        "componentName": "wmq",
        "host": "szr50011.wal-mart.com",
        "port": 1414,
        "channel": "DEV.ADMIN.SVRCONN",
        "object": "ARMADA.QMGR.ALPHA",
        "endpoint": "WW.ESB.EXIT.SERVICE.IN"
      }
    ],
    "to": [
      {
        "@class": "MqProperties",
        "componentType": "WMQ",
        "componentName": "wmq",
        "host": "szr50011.wal-mart.com",
        "port": 1414,
        "channel": "DEV.ADMIN.SVRCONN",
        "object": "ARMADA.QMGR.ALPHA",
        "endpoint": ""
      }
    ],
    "links": [
      {
        "rel": "getHop",
        "href": "http://localhost:8080/hops/exit-hop/Arkansas",
        "media": "application/json;charset=UTF-8",
        "type": "GET"
      },
      {
        "rel": "deleteHop",
        "href": "http://localhost:8080/hops/exit-hop/Arkansas",
        "media": "application/json;charset=UTF-8",
        "type": "DELETE"
      },
      {
        "rel": "updateHop",
        "href": "http://localhost:8080/hops/exit-hop/Arkansas",
        "media": "application/json;charset=UTF-8",
        "type": "PUT"
      }
    ]
  },
  {
    "hopName": "Arkansas",
    "hopType": "splitter-hop",
    "lastUpdated": "2020-01-15T13:53:02.185Z",
    "lastUpdatedBy": "engine-splitter-hop-5bc7549586-w7j8z",
    "from": [
      {
        "@class": "MqProperties",
        "componentType": "WMQ",
        "componentName": "wmq",
        "host": "szr50011.wal-mart.com",
        "port": 1414,
        "channel": "DEV.ADMIN.SVRCONN",
        "object": "ARMADA.QMGR.ALPHA",
        "endpoint": "WW.ESB.SPLITTER.SERVICE.IN"
      }
    ],
    "to": [
      {
        "@class": "MqProperties",
        "componentType": "WMQ",
        "componentName": "wmq",
        "host": "szr50011.wal-mart.com",
        "port": 1414,
        "channel": "DEV.ADMIN.SVRCONN",
        "object": "ARMADA.QMGR.ALPHA",
        "endpoint": ""
      }
    ],
    "links": [
      {
        "rel": "getHop",
        "href": "http://localhost:8080/hops/splitter-hop/Arkansas",
        "media": "application/json;charset=UTF-8",
        "type": "GET"
      },
      {
        "rel": "deleteHop",
        "href": "http://localhost:8080/hops/splitter-hop/Arkansas",
        "media": "application/json;charset=UTF-8",
        "type": "DELETE"
      },
      {
        "rel": "updateHop",
        "href": "http://localhost:8080/hops/splitter-hop/Arkansas",
        "media": "application/json;charset=UTF-8",
        "type": "PUT"
      }
    ]
  },
  {
    "hopName": "Arkansas",
    "hopType": "transformation-hop",
    "lastUpdated": "2020-01-14T23:47:49.117Z",
    "lastUpdatedBy": "engine-transformation-hop-664cbd5fd6-vd9j8",
    "from": [
      {
        "@class": "MqProperties",
        "componentType": "WMQ",
        "componentName": "wmq",
        "host": "szr50011.wal-mart.com",
        "port": 1414,
        "channel": "DEV.ADMIN.SVRCONN",
        "object": "ARMADA.QMGR.ALPHA",
        "endpoint": "WW.ESB.TRANSFORMATION.SERVICE.IN"
      }
    ],
    "to": [
      {
        "@class": "MqProperties",
        "componentType": "WMQ",
        "componentName": "wmq",
        "host": "szr50011.wal-mart.com",
        "port": 1414,
        "channel": "DEV.ADMIN.SVRCONN",
        "object": "ARMADA.QMGR.ALPHA",
        "endpoint": ""
      }
    ],
    "links": [
      {
        "rel": "getHop",
        "href": "http://localhost:8080/hops/transformation-hop/Arkansas",
        "media": "application/json;charset=UTF-8",
        "type": "GET"
      },
      {
        "rel": "deleteHop",
        "href": "http://localhost:8080/hops/transformation-hop/Arkansas",
        "media": "application/json;charset=UTF-8",
        "type": "DELETE"
      },
      {
        "rel": "updateHop",
        "href": "http://localhost:8080/hops/transformation-hop/Arkansas",
        "media": "application/json;charset=UTF-8",
        "type": "PUT"
      }
    ]
  }
]
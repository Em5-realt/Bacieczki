var APP_DATA = {
  "scenes": [
    {
      "id": "0-kuchnia",
      "name": "Kuchnia",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.1938587923364814,
          "pitch": 0.042262330131549675,
          "rotation": 0.7853981633974483,
          "target": "2-salon1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-wejcie",
      "name": "Wejście",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": 1.3618418226615088,
        "pitch": -0.024696386904363266,
        "fov": 1.3842156431264598
      },
      "linkHotspots": [
        {
          "yaw": 1.5658501721630484,
          "pitch": 0.475640891130638,
          "rotation": 12.566370614359176,
          "target": "2-salon1"
        },
        {
          "yaw": -3.0195663555264556,
          "pitch": 0.2258208103505268,
          "rotation": 0,
          "target": "8-wejcie-do-bloku-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-salon1",
      "name": "Salon1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6900248898733778,
          "pitch": 0.009904913331837406,
          "rotation": 3.141592653589793,
          "target": "0-kuchnia"
        },
        {
          "yaw": 0.2079158469223934,
          "pitch": 0.2766448930401957,
          "rotation": 3.141592653589793,
          "target": "4-salon-2"
        },
        {
          "yaw": 0.7116357556095281,
          "pitch": 0.390562973663684,
          "rotation": 0,
          "target": "5-sypialnia-2"
        },
        {
          "yaw": -2.031689465511551,
          "pitch": 0.47688693672580484,
          "rotation": 0,
          "target": "3-azienka"
        },
        {
          "yaw": 2.797556221048728,
          "pitch": 0.24793041833370033,
          "rotation": 1.5707963267948966,
          "target": "1-wejcie"
        },
        {
          "yaw": -1.5058187482838612,
          "pitch": 0.3741769554822163,
          "rotation": 0,
          "target": "10-garderoba"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-azienka",
      "name": "Łazienka",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.749147693523426,
          "pitch": 0.43086110391495325,
          "rotation": 0,
          "target": "2-salon1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-salon-2",
      "name": "Salon 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.0448936150673962,
          "pitch": 0.08452466026313132,
          "rotation": 3.141592653589793,
          "target": "2-salon1"
        },
        {
          "yaw": -0.6685083978238637,
          "pitch": 0.19489079866409575,
          "rotation": 0,
          "target": "5-sypialnia-2"
        },
        {
          "yaw": 3.01307505117755,
          "pitch": 0.1052639461539755,
          "rotation": 0,
          "target": "9-balkon"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-sypialnia-2",
      "name": "Sypialnia 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9385479647365713,
          "pitch": 0.5676082312345194,
          "rotation": 0,
          "target": "2-salon1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-garderoba-",
      "name": "Garderoba ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "7-podwrko-",
      "name": "Podwórko ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.059852674572566045,
          "pitch": -0.15724235377688345,
          "rotation": 6.283185307179586,
          "target": "9-balkon"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-wejcie-do-bloku-",
      "name": "Wejście do bloku ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": 0.7517082335530549,
        "pitch": -0.019423102363349543,
        "fov": 1.3842156431264598
      },
      "linkHotspots": [
        {
          "yaw": 0.992501259823662,
          "pitch": 0.1689097935625803,
          "rotation": 0,
          "target": "1-wejcie"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-balkon",
      "name": "Balkon",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0664117649128997,
          "pitch": 0.19475782578463807,
          "rotation": 15.707963267948973,
          "target": "7-podwrko-"
        },
        {
          "yaw": -0.051015471667517076,
          "pitch": 0.01408744337718204,
          "rotation": 6.283185307179586,
          "target": "4-salon-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-garderoba",
      "name": "Garderoba",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5878676331412134,
          "pitch": 0.3004541618971359,
          "rotation": 0,
          "target": "2-salon1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "ul.Bacieczki 221",
  "settings": {
    "mouseViewMode": "qtvr",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};

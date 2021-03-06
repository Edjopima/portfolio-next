import { Project } from "../types/Projects.interface";

export const webProjects: Array<Project> = [
  {
    id: 1,
    name: "INPIMACA",
    shortDescription: 'administrative applications suite for a local business',
    description: 'administrative applications suite conformed by a web app made in react, a mobile app made using react native and an API with express. Constantly updating',
    cover: 'inpimaca-api.jpg',
    image: "inpimaca-api.jpg",
    repos:[{
      name: 'API', 
      url: 'https://github.com/Edjopima/inpimaca-api'
      },
      {
        name: 'Web App',
        url: 'https://github.com/Edjopima/inpimaca-app'
      },
      {
        name: 'Mobile App',
        url: 'https://github.com/Edjopima/inpimacaMobileApp',
      }
    ],
  },
  {
    id: 2,
    name:'Portfolio',
    shortDescription: 'Personal Portfolio',
    description: 'Personal portfolio, made in react and recently unpdated to Next.JS',
    cover: 'portfolio.png',
    image: "portfolio.png",
    repos:[{
      name: 'Portfolio',
      url: 'https://github.com/Edjopima/portfolio-next'
    },
    {
      name: 'Portfolio Mail Server',
      url: 'https://github.com/Edjopima/PortfolioServer',
    }
    ],
  },
  {
    id: 3,
    name:'Basement Challenge',
    shortDescription: 'Code Challenge for Basement Studio',
    description: 'Code Challenge for Basement Studio. it is maded using Next.JS, TypeScript and tailwind css',
    cover: 'basement.png',
    image: "basement-web.png",
    repos:[{
      name: 'Basement Challenge',
      url: 'https://github.com/Edjopima/basement-challenge'
    }],
  }
];

export const iotProjects: Array<Project> = [
  {
    id:1,
    name:'Access-control',
    shortDescription: 'Home made Access control system',
    description: 'Access control system, consist in a rfid sensor and an arduino, also has an electron app',
    cover: 'rfid.jpg',
    image: "rfid.jpg",
    repos:[
      {
        name: 'Desktop App',
        url: 'https://github.com/Edjopima/access-control'
      },
      {
        name: 'Arduino',
        url: 'https://github.com/Edjopima/rfid-esp8266'
      },
      {
        name: 'API',
        url: 'https://github.com/Edjopima/accessControlAPI'
      }
    ],
  },
  {
    id:2,
    name:'Humidity sensor',
    shortDescription: 'Ambiental conditions sensor',
    description: 'Ambient conditions sensor using arduino, and python to send an email alert when the system get a weird measure, made during my internship',
    cover: 'HumiditySensor.png',
    image: "HumiditySensor.png",
    repos:[{
      name: 'Humidity Sensor',
      url: 'https://github.com/Edjopima/humidity-sensor'
    }],
  },
  {
    id:3,
    name:'ELECTRONIC SYSTEM FOR SHOOTING TRAINING',
    shortDescription: 'Electronic system used to improve the shooting training using infrared tecnology',
    description: 'Consist in a embedded system for shooting training using Infrared (IR) technology to replace the classic training equipment for electronic equipment. Has two parts: IR Receptor Consist in a simile of bulletproof vest with IR receptors to receive the impact of the light beam sended by the IR emitter.IR Emitter Consist in a simile of a assault rifle who send trough the IR emitter a light beam with the shoot signal. Also has the microcontroller in charge to read the receptors message and calculate the health of the user in the simulation. Also take count of the "bullet" used. And send the training data through bluetooth.',
    cover: 'weapon.jpg',
    image: "weapon.jpg",
    repos:[],
  },
];
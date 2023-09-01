import blueBrick from "./cards/blue-player/blue-brick.jpg"
import blueGold from "./cards/blue-player/blue-gold.jpg"
import blueRoad from "./cards/blue-player/blue-road.jpg"
import blueRock from "./cards/blue-player/blue-rock.jpg"
import blueSettlement from "./cards/blue-player/blue-settlement.jpg"
import blueSheep from "./cards/blue-player/blue-sheep.jpg"
import blueWheat from "./cards/blue-player/blue-wheat.jpg"
import blueWood from "./cards/blue-player/blue-wood.jpg"

import redBrick from "./cards/red-player/red-brick.jpg"
import redGold from "./cards/red-player/red-gold.jpg"
import redRoad from "./cards/red-player/red-road.jpg"
import redRock from "./cards/red-player/red-rock.jpg"
import redSettlement from "./cards/red-player/red-settlement.jpg"
import redSheep from "./cards/red-player/red-sheep.jpg"
import redWheat from "./cards/red-player/red-wheat.jpg"
import redWood from "./cards/red-player/red-wood.jpg"

export interface CardDefinition {
  type: string // might remove, change to card name
  display: string // might remove
  resourceType: string | undefined
  resourceCount: number
  diceNumber: number | undefined
  index: number
  image: string | undefined
  buildingType: string
  rotation: number
  minRotation: number
  maxRotation: number
  commercePoints: number
  strengthPoints: number
  progressPoints: number
  skillPoints: number
  victoryPoints: number
}

export const blueStartingCards: CardDefinition[] = [
  {
    type: "none",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 0,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "build",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 1,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "none",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 2,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "build",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 3,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "none",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 4,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "build",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 5,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "none",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 6,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "build",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 7,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "none",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 8,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "build",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 9,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "none",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 10,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "region",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 11,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "build",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 12,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "region",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 13,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "build",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 14,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "region",
    display: "yes",
    resourceType: "lumber",
    resourceCount: 1,
    diceNumber: 3,
    index: 15,
    image: blueWood,
    buildingType: "region",
    rotation: 0,
    minRotation: 90,
    maxRotation: -180,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "build",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 16,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "region",
    display: "yes",
    resourceType: "gold",
    resourceCount: 0,
    diceNumber: 4,
    index: 17,
    image: blueGold,
    buildingType: "region",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "build",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 18,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "region",
    display: "yes",
    resourceType: "grain",
    resourceCount: 1,
    diceNumber: 5,
    index: 19,
    image: blueWheat,
    buildingType: "region",
    rotation: 0,
    minRotation: 90,
    maxRotation: -180,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "build",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 20,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "region",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 21,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "none",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 22,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "settlement",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 23,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "road",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 24,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "settlement",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 25,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "road",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 26,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "settlement",
    display: "yes",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 27,
    image: blueSettlement,
    buildingType: "settlement",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 1,
  },
  {
    type: "road",
    display: "yes",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 28,
    image: blueRoad,
    buildingType: "road",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "settlement",
    display: "yes",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 29,
    image: blueSettlement,
    buildingType: "settlement",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 1,
  },
  {
    type: "road",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 30,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "settlement",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 31,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "none",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 32,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "region",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 33,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "build",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 34,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "region",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 35,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "build",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 36,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "region",
    display: "yes",
    resourceType: "brick",
    resourceCount: 1,
    diceNumber: 2,
    index: 37,
    image: blueBrick,
    buildingType: "region",
    rotation: 0,
    minRotation: 90,
    maxRotation: -180,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "build",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 38,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "region",
    display: "yes",
    resourceType: "wool",
    resourceCount: 1,
    diceNumber: 1,
    index: 39,
    image: blueSheep,
    buildingType: "region",
    rotation: 0,
    minRotation: 90,
    maxRotation: -180,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "build",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 40,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "region",
    display: "yes",
    resourceType: "ore",
    resourceCount: 1,
    diceNumber: 6,
    index: 41,
    image: blueRock,
    buildingType: "region",
    rotation: 0,
    minRotation: 90,
    maxRotation: -180,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "build",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 42,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "region",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 43,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "none",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 44,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "build",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 45,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "none",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 46,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "build",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 47,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "none",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 48,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "build",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 49,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "none",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 50,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "build",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 51,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "none",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 52,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "build",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 53,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "none",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 54,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
]

export const redStartingCards: CardDefinition[] = [
  {
    type: "none",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 0,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "build",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 1,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "none",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 2,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "build",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 3,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "none",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 4,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "build",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 5,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "none",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 6,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "build",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 7,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "none",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 8,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "build",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 9,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "none",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 10,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "region",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 11,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "build",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 12,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "region",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 13,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "build",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 14,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "region",
    display: "yes",
    resourceType: "lumber",
    resourceCount: 1,
    diceNumber: 2,
    index: 15,
    image: redWood,
    buildingType: "region",
    rotation: 0,
    minRotation: 90,
    maxRotation: -180,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "build",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 16,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "region",
    display: "yes",
    resourceType: "gold",
    resourceCount: 0,
    diceNumber: 1,
    index: 17,
    image: redGold,
    buildingType: "region",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "build",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 18,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "region",
    display: "yes",
    resourceType: "grain",
    resourceCount: 1,
    diceNumber: 6,
    index: 19,
    image: redWheat,
    buildingType: "region",
    rotation: 0,
    minRotation: 90,
    maxRotation: -180,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "build",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 20,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "region",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 21,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "none",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 22,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "settlement",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 23,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "road",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 24,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "settlement",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 25,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "road",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 26,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "settlement",
    display: "yes",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 27,
    image: redSettlement,
    buildingType: "settlement",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 1,
  },
  {
    type: "road",
    display: "yes",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 28,
    image: redRoad,
    buildingType: "road",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "settlement",
    display: "yes",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 29,
    image: redSettlement,
    buildingType: "settlement",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 1,
  },
  {
    type: "road",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 30,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "settlement",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 31,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "none",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 32,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "region",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 33,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "build",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 34,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "region",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 35,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "build",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 36,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "region",
    display: "yes",
    resourceType: "brick",
    resourceCount: 1,
    diceNumber: 3,
    index: 37,
    image: redBrick,
    buildingType: "region",
    rotation: 0,
    minRotation: 90,
    maxRotation: -180,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "build",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 38,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "region",
    display: "yes",
    resourceType: "wool",
    resourceCount: 1,
    diceNumber: 4,
    index: 39,
    image: redSheep,
    buildingType: "region",
    rotation: 0,
    minRotation: 90,
    maxRotation: -180,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "build",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 40,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "region",
    display: "yes",
    resourceType: "ore",
    resourceCount: 1,
    diceNumber: 5,
    index: 41,
    image: redRock,
    buildingType: "region",
    rotation: 0,
    minRotation: 90,
    maxRotation: -180,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "build",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 42,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "region",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 43,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "none",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 44,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "build",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 45,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "none",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 46,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "build",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 47,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "none",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 48,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "build",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 49,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "none",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 50,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "build",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 51,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "none",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 52,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "build",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 53,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
  {
    type: "none",
    display: "no",
    resourceType: "",
    resourceCount: 0,
    diceNumber: 0,
    index: 54,
    image: "",
    buildingType: "",
    rotation: 0,
    minRotation: 0,
    maxRotation: -270,
    commercePoints: 0,
    strengthPoints: 0,
    progressPoints: 0,
    skillPoints: 0,
    victoryPoints: 0,
  },
]

export const actionDice = ["year of plenty", "trade advantage", ""]

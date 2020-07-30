import hookshot from '../assets/OoT3D_Hookshot_Icon.png'
import longshot from '../assets/OoT3D_Longshot_Icon.png'
import silverScale from '../assets/OoT3D_Silver_Scale_Icon.png'
import goldenScale from '../assets/OoT3D_Golden_Scale_Icon.png'
import bomb from '../assets/OoT3D_Bomb_Icon.png'
import dekuStick from '../assets/OoT3D_Deku_Stick_Icon.png'
import dekuNut from '../assets/OoT3D_Deku_Nut_Icon.png'
import bow from '../assets/OoT3D_Fairy_Bow_Icon.png'
import lightArrow from '../assets/OoT3D_Light_Arrow_Icon.png'
import dinsFire from '../assets/OoT3D_Dins_Fire_Icon.png'
import slingshot from '../assets/OoT3D_Fairy_Slingshot_Icon.png'
import fairyOcarina from '../assets/OoT3D_Fairy_Ocarina_Icon.png'
import bombchu from '../assets/OoT3D_Bombchu_Icon.png'
import fireArrow from '../assets/OoT3D_Fire_Arrow_Icon.png'
import nayrusLove from '../assets/OoT3D_Nayrus_Love_Icon.png'
import boomerang from '../assets/OoT3D_Boomerang_Icon.png'
import lensOfTruth from '../assets/OoT3D_Lens_of_Truth_Icon.png'
import goronsBracelet from '../assets/OoT3D_Gorons_Bracelet_Icon.png'
import silverGauntlet from '../assets/OoT3D_Silver_Gauntlets_Icon.png'
import goldenGauntlet from '../assets/OoT3D_Golden_Gauntlets_Icon.png'

export interface ItemUpgrade {
  name: string;
  image?: any;
  text?: string;
}

export interface Item {
  name: string;
  // Don't set this if you want to use upgradable images
  image?: any;
  upgrades: ItemUpgrade[];
}

const items: Item[] = [
  {
    name: 'Deku Sticks',
    image: dekuStick,
    upgrades: [
      {
        name: 'Deku Stick'
      },
      {
        name: 'Deku Stick (20)',
        text: '20'
      },
      {
        name: 'Deku Stick (30)',
        text: '30'
      }
    ]
  },
  {
    name: 'Deku Nuts',
    image: dekuNut,
    upgrades: [
      {
        name: 'Deku Nuts'
      },
      {
        name: 'Deku Nuts (30)',
        text: '30'
      },
      {
        name: 'Deku Nuts (40)',
        text: '40'
      }
    ]
  },
  {
    name: 'Progressive Bombs',
    image: bomb,
    upgrades: [
      {
        name: 'Bomb Bag 20'
      },
      {
        name: 'Bomb Bag 30',
        text: '30'
      },
      {
        name: 'Bomb Bag 40',
        text: '40'
      }
    ]
  },
  {
    name: 'Progressive Bow',
    image: bow,
    upgrades: [
      {
        name: 'Quiver'
      },
      {
        name: 'Big Quiver',
        text: '40'
      },
      {
        name: 'Biggest Quiver',
        text: '50'
      }
    ]
  },
  {
    name: 'Light Arrow',
    image: lightArrow,
    upgrades: [
      {
        name: 'Light Arrow'
      }
    ]
  },
  {
    name: 'Progressive Din\'s',
    image: dinsFire,
    upgrades: [
      {
        name: 'Din\'s Fire'
      }
    ]
  },
  {
    name: 'Slingshot',
    image: slingshot,
    upgrades: [
      {
        name: 'Deku seed bag 30'
      },
      {
        name: 'Bigger deku seed bag',
        text: '40'
      },
      {
        name: 'Biggest deku seed bag',
        text: '50'
      }
    ]
  },
  {
    name: 'Ocarina',
    image: fairyOcarina,
    upgrades: [
      {
        name: 'Fairy Ocarina'
      }
    ]
  },
  {
    name: 'Bombchu',
    image: bombchu,
    upgrades: [
      {
        name: 'Bombchu'
      }
    ]
  },
  {
    name: 'Progressive Hookshot',
    upgrades: [
      {
        name: 'Hookshot',
        image: hookshot,
        text: 'H'
      },
      {
        name: 'Longshot',
        image: longshot,
        text: 'L'
      }
    ]
  },
  {
    name: 'Fire Arrow',
    image: fireArrow,
    upgrades: [
      {
        name: 'Fire Arrow'
      }
    ]
  },
  {
    name: 'Nayru\'s Love',
    image: nayrusLove,
    upgrades: [
      {
        name: 'Nayru\'s Love'
      }
    ]
  },
  {
    name: 'Progressive Boomerang',
    image: boomerang,
    upgrades: [
      {
        name: 'Boomerang'
      }
    ]
  },
  {
    name: 'Progressive Lens of Truth',
    image: lensOfTruth,
    upgrades: [
      {
        name: 'Lens of Truth'
      }
    ]
  },
  {
    name: 'Progressive Strength',
    upgrades: [
      {
        name: 'Goron\'s Bracelet',
        image: goronsBracelet
      },
      {
        name: 'Silver Gauntlet',
        image: silverGauntlet
      },
      {
        name: 'Golden Gauntlet',
        image: goldenGauntlet
      }
    ]
  },
  {
    name: 'Progressive Scale',
    upgrades: [
      {
        name: 'Silver Scale',
        image: silverScale
      },
      {
        name: 'Golden Scale',
        image: goldenScale
      }
    ]
  }
]

export default items

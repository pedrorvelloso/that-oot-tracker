import hookshot from '../assets/OoT3D_Hookshot_Icon.png'
import longshot from '../assets/OoT3D_Longshot_Icon.png'
import silverScale from '../assets/OoT3D_Silver_Scale_Icon.png'
import goldenScale from '../assets/OoT3D_Golden_Scale_Icon.png'
import bomb from '../assets/OoT3D_Bomb_Icon.png'

export interface ItemUpgrade {
  name: string;
  image?: any;
  text?: string;
}

export interface Item {
  name: string;
  // Don't set this if you want to use upgradable images
  image?: any;
  upgrades?: ItemUpgrade[];
}

const items: Item[] = [
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
  }
]

export default items

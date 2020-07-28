import forestPng from '../assets/OoT3D_Forest_Medallion_Icon.png'
import firePng from '../assets/OoT3D_Fire_Medallion_Icon.png'
import waterPng from '../assets/OoT3D_Water_Medallion_Icon.png'
import shadowPng from '../assets/OoT3D_Shadow_Medallion_Icon.png'
import spiritPng from '../assets/OoT3D_Spirit_Medallion_Icon.png'
import lightPng from '../assets/OoT3D_Light_Medallion_Icon.png'

interface Medallion {
  image: any;
  name: string;
}

const medallions: Medallion[] = [
  {
    image: forestPng,
    name: 'Forest Medallion'
  },
  {
    image: firePng,
    name: 'Fire Medallion'
  },
  {
    image: waterPng,
    name: 'Water Medallion'
  },
  {
    image: spiritPng,
    name: 'Spirit Medallion'
  },
  {
    image: shadowPng,
    name: 'Shadow Medallion'
  },
  {
    image: lightPng,
    name: 'Light Medallion'
  }
]

export default medallions

import serenadePng from '../assets/OoT3D_Serenade_of_Water_Icon.png'
import minuetPng from '../assets/OoT3D_Minuet_of_Forest_Icon.png'
import boleroPng from '../assets/OoT3D_Bolero_of_Fire_Icon.png'
import preludePng from '../assets/OoT3D_Prelude_of_Light_Icon.png'
import requiemPng from '../assets/OoT3D_Requiem_of_Spirit_Icon.png'
import nocturnePng from '../assets/OoT3D_Nocturne_of_Shadow_Icon.png'
import zeldasPng from '../assets/OoT3D_Zeldas_Lullaby_Icon.png'
import eponasPng from '../assets/OoT3D_Eponas_Song_Icon.png'
import sariasPng from '../assets/OoT3D_Sarias_Song_Icon.png'
import sunsPng from '../assets/OoT3D_Suns_Song_Icon.png'
import timePng from '../assets/OoT3D_Song_of_Time_Icon.png'
import stormPng from '../assets/OoT3D_Song_of_Storms_Icon.png'

interface Song {
  image: any;
  name: string;
}

const songs: Song[] = [
  {
    image: zeldasPng,
    name: 'Zelda\'s Lullaby'
  },
  {
    image: eponasPng,
    name: 'Epona\'s Song'
  },
  {
    image: sariasPng,
    name: 'Saria\'s Song'
  },
  {
    image: sunsPng,
    name: 'Suns\'s Song'
  },
  {
    image: timePng,
    name: 'Song of Time'
  },
  {
    image: stormPng,
    name: 'Song of Storms'
  },
  {
    image: minuetPng,
    name: 'Minuet of Forest'
  },
  {
    image: boleroPng,
    name: 'Bolero of Fire'
  },
  {
    image: serenadePng,
    name: 'Serenade of Water'
  },
  {
    image: requiemPng,
    name: 'Requiem of Spirit'
  },
  {
    image: nocturnePng,
    name: 'Nocturne of Shadow'
  },
  {
    image: preludePng,
    name: 'Prelude of Light'
  }
]

export default songs

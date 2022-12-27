import { expectType } from 'tsd'

import { palette } from './index.js'

expectType<{
  bunker: string
  cadetBlue: string
  cornflowerBlue: string
  crail: string
  dodgerBlue: string
  fountainBlue: string
  ghost: string
  harvestGold: string
  lavender: string
  olivine: string
  robRoy: string
  shark: string
  shuttleGray: string
  sunglo: string
  transparent: string
  valencia: string
  whiskey: string
  white: string
  woodsmoke: string
}>(palette)

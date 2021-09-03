import clsx from 'clsx'
import startCase from 'lodash/startCase'
import { FC } from 'react'

import { palette } from '../../palette'

function isLightColour(colour: string): boolean {
  // Remove prefixed # if present
  const color = colour.charAt(0) === '#' ? colour.slice(1, 7) : colour
  // hexToRGB
  const r = Number.parseInt(color.slice(0, 2), 16)
  const g = Number.parseInt(color.slice(2, 4), 16)
  const b = Number.parseInt(color.slice(4, 6), 16)
  return r * 0.299 + g * 0.587 + b * 0.114 > 170
}

export const Swatch: FC<{ bg: string; className?: string }> = ({
  bg,
  className,
}) => {
  const colourName = bg.replace('bg-', '') as unknown as keyof typeof palette
  const hex = palette[colourName]
  const name = startCase(colourName)
  const textColour = isLightColour(hex) ? 'text-bunker' : 'text-white'
  return (
    <div
      className={clsx(
        bg,
        textColour,
        'p-4',
        'flex flex-col justify-between',
        className,
      )}
    >
      <div className="text-lg font-comfortaa">{name}</div>
      <div className="opacity-75 font-mono">{hex}</div>
    </div>
  )
}

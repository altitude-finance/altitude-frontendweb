import { useContext } from "react"
import { AltitudeContext } from 'contexts/Altitude'

export const useAltitude = () => {
  const { altitude } = useContext(AltitudeContext)

  return altitude
}
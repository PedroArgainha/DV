import { IconBolt, IconBulb, IconCar, IconDroplet, IconFilter, IconWrench } from '../components/Icons'

const map = {
  'Óleos': IconDroplet,
  'Travões': IconWrench,
  'Filtros': IconFilter,
  'Baterias': IconBolt,
  'Manutenção': IconCar,
  'Elétrico': IconBulb,
}

export function CategoryIcon({ category, ...props }) {
  const Icon = map[category] || IconWrench
  return <Icon {...props} />
}

import { Metadata } from 'next'
import CollectionDetail from '@/components/collection/CollectionDetail'

export const metadata: Metadata = {
  title: 'Surf Essentials',
  description: 'Beach-ready apparel with subtle faith elements, made for surf sessions and coastal living.',
}

export default function SurfEssentialsPage() {
  return (
    <CollectionDetail
      slug="surf-essentials"
      story="Surf Essentials is built for life by the water: easy-wearing pieces with subtle faith touches that move from the lineup to the boardwalk. Quality you can live in, with 10% of every order supporting coastal ministries."
    />
  )
}

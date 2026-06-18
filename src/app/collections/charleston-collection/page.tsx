import { Metadata } from 'next'
import CollectionDetail from '@/components/collection/CollectionDetail'

export const metadata: Metadata = {
  title: 'Charleston Collection',
  description: 'Hometown pride meets coastal faith in designs inspired by the Holy City.',
}

export default function CharlestonCollectionPage() {
  return (
    <CollectionDetail
      slug="charleston-collection"
      story="The Charleston Collection is a love letter to the Holy City: Southern charm, coastal light, and a faith that runs deep. Designs inspired by the place we call home, with 10% of every order supporting coastal ministries."
    />
  )
}

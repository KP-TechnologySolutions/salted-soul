import { Metadata } from 'next'
import CollectionDetail from '@/components/collection/CollectionDetail'

export const metadata: Metadata = {
  title: 'Faith Collection',
  description: 'Bold Christian apparel with coastal soul, designed to start conversations and share your faith.',
}

export default function FaithCollectionPage() {
  return (
    <CollectionDetail
      slug="faith-collection"
      story="The Faith Collection was born from a simple belief: that our faith should be as natural and flowing as the ocean waves. Each piece is designed to spark conversations about hope, love, and the One who calms the storms, and 10% of every order supports coastal ministries."
    />
  )
}

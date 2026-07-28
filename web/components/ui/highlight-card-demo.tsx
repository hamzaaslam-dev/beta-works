import HighlightCard from '@/components/ui/highlight-card'
import { Rocket } from 'lucide-react'

export default function DemoOne() {
  return (
    <HighlightCard
      title="Space Explorer"
      description={[
        'Embark on interstellar adventures,',
        'discover new planets and galaxies,',
        'share your discoveries with friends,',
        'and reach for the stars together.',
      ]}
      icon={<Rocket className="h-8 w-8 text-sky-200" />}
    />
  )
}

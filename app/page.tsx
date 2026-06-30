import fs from 'fs'
import path from 'path'
import DocTabs from './components/DocTabs'

export default function Home() {
  const base = path.join(process.cwd(), 'Instructions')

  const guideContent = fs.readFileSync(
    path.join(base, 'claude-code-education-guide.md'),
    'utf-8'
  )
  const prepContent = fs.readFileSync(
    path.join(base, '사전학습_및_유의사항.md'),
    'utf-8'
  )

  return (
    <main className="main">
      <header className="site-header">
        <span className="site-title">Claude Code 팀 교육</span>
      </header>
      <DocTabs
        tabs={[
          { label: '수강 가이드', content: guideContent },
          { label: '사전학습 & 유의사항', content: prepContent },
        ]}
      />
    </main>
  )
}

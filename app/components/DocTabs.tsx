'use client'

import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface Tab {
  label: string
  content: string
}

export default function DocTabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(0)

  return (
    <div className="doc-container">
      <nav className="tabs">
        {tabs.map((tab, i) => (
          <button
            key={i}
            className={`tab-btn${i === active ? ' active' : ''}`}
            onClick={() => setActive(i)}
          >
            {tab.label}
          </button>
        ))}
      </nav>
      <article className="doc-content">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {tabs[active].content}
        </ReactMarkdown>
      </article>
    </div>
  )
}

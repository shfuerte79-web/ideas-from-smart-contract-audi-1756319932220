import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: Smart Contract Auditor AI',
  description: '[
  {
    "title": "Smart Contract Sentiment Analyzer",
    "one_liner": "Gauge community sentiment around smart contract projects using AI.",
    "why_now": "With the surge in blockchain projects, understanding community trust is critical.",
    "novel_mechanism": "Analyzing language patterns in social media discussions to correlate with security outcomes.",
    "ai_stack": [
      "Claude/GPT",
      "RAG",
      "Embeddings"
    ],
    "edge_use_cases": [
      "pre-launch project analysis",
      "risk assessment for investors"
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "sentiment tracking",
        "visual dashboard",
        "report generation"
      ],
      "tools": [
        "Next.js",
        "MongoDB",
        "OpenAI API"
      ],
      "data_bootstrap": [
        "public dataset of tweets",
        "forum discussions"
      ],
      "risk": [
        "data reliability",
        "false positives in sentiment"
      ],
      "mitigation": [
        "cross-reference with credible sources",
        "implement user feedback loop"
      ]
    },
    "go_to_market": {
      "hooks": [
        "showcase glaring gaps in current project evaluations"
      ],
      "channels": [
        "ProductHunt",
        "Discord",
        "Twitter"
      ],
      "pricing": {
        "free": "basic features",
        "pro": "$10/month",
        "business": "$100/month"
      }
    },
    "moat": [
      "first-mover advantage in sentiment analysis",
      "community-driven data refinement"
    ],
    "scores": {
      "novelty": 8,
      "72h_feasibility": 9,
      "revenue_potential": 7,
      "defensibility": 6
    },
    "total_score": 30,
    "reasoning": "Combining sentiment analysis with smart contract security provides unique insights, reducing risks in a market that lacks real-time assessments."
  },
  {
    "title": "Smart Contract Compliance Checker",
    "one_liner": "Ensure that smart contracts comply with local regulations using AI.",
    "why_now": "As regulations around crypto tighten, compliance is becoming mandatory.",
    "novel_mechanism": "Utilizing AI to cross-reference contract terms against regulatory databases.",
    "ai_stack": [
      "GPT-3",
      "RAG"
    ],
    "edge_use_cases": [
      "audit readiness for startups",
      "ongoing compliance monitoring"
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "basic compliance checks",
        "contract evaluation reports"
      ],
      "tools": [
        "React",
        "PostgreSQL",
        "OpenAI API"
      ],
      "data_bootstrap": [
        "public regulatory documents",
        "legal text corpuses"
      ],
      "risk": [
        "legal misinterpretation",
        "data updates"
      ],
      "mitigation": [
        "engage legal advisors for data validation",
        "ensure frequent data refreshes"
      ]
    },
    "go_to_market": {
      "hooks": [
        "highlight risks of non-compliance"
      ],
      "channels": [
        "LinkedIn",
        "Crypto events",
        "Telegram groups"
      ],
      "pricing": {
        "free": "limited checks",
        "pro": "$20/month",
        "business": "$200/month"
      }
    },
    "moat": [
      "proprietary regulatory datasets",
      "strong partnerships with legal entities"
    ],
    "scores": {
      "novelty": 9,
      "72h_feasibility": 8,
      "revenue_potential": 8,
      "defensibility": 7
    },
    "total_score": 32,
    "reasoning": "By focusing on compliance, this product addresses a pressing need for blockchain projects, allowing them to operate within the law and reduce risks."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
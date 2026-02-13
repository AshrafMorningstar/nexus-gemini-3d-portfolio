
import { ProfessionalRole, Profile } from './types';

export const PROFILES: Profile[] = [
  {
    id: 'web-designer',
    name: 'Ashraf Morningstar',
    role: ProfessionalRole.WEB_DESIGNER,
    tagline: 'Crafting immersive digital experiences with precision and empathy.',
    bio: 'Specializing in high-fidelity prototypes and React-based interactive environments. My work balances aesthetic minimalism with technical robustness, drawing from deep GitHub exploration of modern frontend patterns.',
    color: 'from-cyan-500 to-blue-600',
    accentColor: '#06b6d4',
    skills: [
      { name: 'UI/UX Design', level: 95 },
      { name: 'React/Next.js', level: 90 },
      { name: 'Framer Motion', level: 85 },
      { name: 'Tailwind CSS', level: 98 }
    ],
    projects: [
      {
        title: 'Nexus Hub UI',
        description: 'A futuristic design system for enterprise level applications.',
        tags: ['Design System', 'Figma', 'React'],
        imageUrl: 'https://picsum.photos/seed/web1/800/450'
      },
      {
        title: 'Glassmorphic Dash',
        description: 'An exploration of transparency and light in digital interfaces.',
        tags: ['UI', 'Experiment'],
        imageUrl: 'https://picsum.photos/seed/web2/800/450'
      }
    ],
    stats: [
      { label: 'Prototypes', value: '45+' },
      { label: 'Design Score', value: '9.8' }
    ]
  },
  {
    id: 'data-analyst',
    name: 'Ashraf Morningstar',
    role: ProfessionalRole.DATA_ANALYST,
    tagline: 'Transforming complex datasets into actionable strategic narratives.',
    bio: 'Leveraging SQL and Python to uncover hidden patterns. I focus on making data human-readable, ensuring that stakeholder decisions are always grounded in verified insights.',
    color: 'from-emerald-500 to-teal-600',
    accentColor: '#10b981',
    skills: [
      { name: 'SQL/BigQuery', level: 92 },
      { name: 'Python/Pandas', level: 88 },
      { name: 'Tableau/Looker', level: 95 },
      { name: 'Statistical Modeling', level: 80 }
    ],
    projects: [
      {
        title: 'User Retention Engine',
        description: 'Predictive model for churn analysis in SaaS ecosystems.',
        tags: ['Big Data', 'Python'],
        imageUrl: 'https://picsum.photos/seed/data1/800/450'
      },
      {
        title: 'Global Supply Chain Viz',
        description: 'Real-time dashboard for cross-border logistics mapping.',
        tags: ['D3.js', 'Visualization'],
        imageUrl: 'https://picsum.photos/seed/data2/800/450'
      }
    ],
    stats: [
      { label: 'Data Points Processed', value: '2.4B' },
      { label: 'Accuracy', value: '99.7%' }
    ]
  },
  {
    id: 'marketing-planner',
    name: 'Ashraf Morningstar',
    role: ProfessionalRole.MARKETING_PLANNER,
    tagline: 'Orchestrating growth through psychological insight and creative strategy.',
    bio: 'Expert in multi-channel campaign planning and brand positioning. I bridge the gap between creative storytelling and data-backed performance marketing.',
    color: 'from-rose-500 to-orange-500',
    accentColor: '#f43f5e',
    skills: [
      { name: 'Campaign Strategy', level: 94 },
      { name: 'SEO/SEM', level: 85 },
      { name: 'Brand Storytelling', level: 90 },
      { name: 'Content Strategy', level: 92 }
    ],
    projects: [
      {
        title: 'E-commerce Scale-up',
        description: '300% YoY growth strategy for a premium lifestyle brand.',
        tags: ['Strategy', 'Growth'],
        imageUrl: 'https://picsum.photos/seed/mkt1/800/450'
      },
      {
        title: 'Influencer Matrix',
        description: 'Automated framework for partner selection and ROI tracking.',
        tags: ['Marketing Tech', 'Social'],
        imageUrl: 'https://picsum.photos/seed/mkt2/800/450'
      }
    ],
    stats: [
      { label: 'ROI Average', value: '4.2x' },
      { label: 'Global Reach', value: '15M+' }
    ]
  },
  {
    id: 'sales-analyst',
    name: 'Ashraf Morningstar',
    role: ProfessionalRole.SALES_ANALYST,
    tagline: 'Optimizing revenue pipelines through rigorous algorithmic analysis.',
    bio: 'Closing the loop between leads and revenue. I build systems that refine the sales funnel, identifying friction points and maximizing conversion velocity.',
    color: 'from-amber-400 to-yellow-600',
    accentColor: '#fbbf24',
    skills: [
      { name: 'Pipeline Analysis', level: 96 },
      { name: 'Salesforce CRM', level: 90 },
      { name: 'Revenue Forecasting', level: 93 },
      { name: 'Conversion Optimization', level: 88 }
    ],
    projects: [
      {
        title: 'Revenue Flow 2.0',
        description: 'Complete overhaul of an enterprise B2B sales cycle.',
        tags: ['Sales Ops', 'Revenue'],
        imageUrl: 'https://picsum.photos/seed/sale1/800/450'
      },
      {
        title: 'Market Entry Matrix',
        description: 'Scoring system for international territory expansion.',
        tags: ['Analytics', 'Global'],
        imageUrl: 'https://picsum.photos/seed/sale2/800/450'
      }
    ],
    stats: [
      { label: 'Pipeline Velocity', value: '+24%' },
      { label: 'Quota Hitting', value: '112%' }
    ]
  }
];

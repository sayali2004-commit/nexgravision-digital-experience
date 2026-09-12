export { default as BrandLogo } from "../components/BrandLogo";

// Photography & Mockup Asset URLs
export const IMAGES = {
  heroCity: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=80',
  workspaceLaptop: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80',
  workspaceDesk: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=1000&q=80',
  mountainSunset: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80',
  
  // Projects
  cropDetection: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=800&q=80',
  nursingCollege: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80',
  sharadaConsultant: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',

  // Client Avatars
  priyaSharma: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
  rahulDeshmukh: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
  snehaKulkarni: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',

  // Team Avatars
  sayaliPatil: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
  anantPatil: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
  snehaMore: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80',
  rohitDeshmukh: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80',
};

// 12 Authentic Tech Stack SVGs
export const TECH_STACK = [
  {
    name: 'React',
    color: '#61DAFB',
    svg: (
      <svg width="34" height="34" viewBox="-11.5 -10.23174 23 20.46348">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    ),
  },
  {
    name: 'Next.js',
    color: '#FFFFFF',
    svg: (
      <svg width="34" height="34" viewBox="0 0 180 180" fill="none">
        <circle cx="90" cy="90" r="88" fill="#000" stroke="#333" strokeWidth="4"/>
        <path d="M144.5 145.5L71.5 52H52V128H68V72.5L133.5 156C137.5 153 141.2 149.5 144.5 145.5Z" fill="#fff"/>
        <rect x="112" y="52" width="16" height="48" fill="#fff"/>
      </svg>
    ),
  },
  {
    name: 'Node.js',
    color: '#68A063',
    svg: (
      <svg width="34" height="34" viewBox="0 0 32 32" fill="none">
        <path d="M16 2L3 9.5V22.5L16 30L29 22.5V9.5L16 2Z" fill="#68A063"/>
        <path d="M16 11V21M16 21L11 18M16 21L21 18" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: 'Express.js',
    color: '#FFFFFF',
    svg: (
      <div style={{
        width: 34,
        height: 34,
        borderRadius: 8,
        background: '#18181B',
        border: '1px solid #3F3F46',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'Space Grotesk', monospace",
        fontWeight: 700,
        fontSize: 11,
        color: '#FFFFFF'
      }}>
        expr
      </div>
    ),
  },
  {
    name: 'MongoDB',
    color: '#13AA52',
    svg: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
        <path d="M12 1.5C12 1.5 6 7 6 13.5C6 17.5 9 20.5 12 22.5C15 20.5 18 17.5 18 13.5C18 7 12 1.5 12 1.5Z" fill="#13AA52"/>
        <path d="M12 2V22C12 22 11.5 17 11.5 13C11.5 9 12 2 12 2Z" fill="#fff" opacity="0.4"/>
      </svg>
    ),
  },
  {
    name: 'MySQL',
    color: '#00758F',
    svg: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
        <path d="M4 17C6 14 8 13 12 13C16 13 18 15 20 18M12 4C9 4 5 7 5 11C5 15 8 17 12 17C16 17 19 15 19 11C19 7 15 4 12 4Z" stroke="#00758F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="rgba(0,117,143,0.15)"/>
      </svg>
    ),
  },
  {
    name: 'HTML5',
    color: '#E34F26',
    svg: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
        <path d="M3 2L5 20L12 22L19 20L21 2H3Z" fill="#E34F26"/>
        <path d="M12 3.5V20.3L17.5 18.8L19.2 3.5H12Z" fill="#EF652A"/>
        <path d="M7.5 7H16.5L16.2 10.5H11.5L11.8 13.5H16L15.6 17L12 18L8.4 17L8.2 15H9.8L9.9 16L12 16.5L14.1 16L14.3 14H7.8L7.5 7Z" fill="#fff"/>
      </svg>
    ),
  },
  {
    name: 'CSS3',
    color: '#1572B6',
    svg: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
        <path d="M3 2L5 20L12 22L19 20L21 2H3Z" fill="#1572B6"/>
        <path d="M12 3.5V20.3L17.5 18.8L19.2 3.5H12Z" fill="#33A9DC"/>
        <path d="M7.5 7H16.5L16.2 10.5H11.5L11.8 13.5H16L15.6 17L12 18L8.4 17L8.2 15H9.8L9.9 16L12 16.5L14.1 16L14.3 14H7.8L7.5 7Z" fill="#fff"/>
      </svg>
    ),
  },
  {
    name: 'JavaScript',
    color: '#F7DF1E',
    svg: (
      <svg width="34" height="34" viewBox="0 0 24 24">
        <rect width="24" height="24" rx="4" fill="#F7DF1E"/>
        <path d="M8 12V18C8 19.5 6.8 19.5 6 19.5" stroke="#000" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
        <path d="M12.5 17C13.5 18.5 15 18.8 16 18C17 17.2 17 16 15.5 15.2C13.5 14.2 13.5 13 14.5 12.2C15.5 11.5 17 11.8 17.5 13" stroke="#000" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
      </svg>
    ),
  },
  {
    name: 'Python',
    color: '#3776AB',
    svg: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
        <path d="M11.8 2C6.9 2 7.2 4.1 7.2 4.1L7.2 6.3H12V7.4H5C5 7.4 2 7.1 2 12C2 17 4.6 16.7 4.6 16.7H6.3V14.3C6.3 11.5 8.7 11.6 8.7 11.6H13.6C16.3 11.6 16.2 9 16.2 9V4.1C16.2 4.1 16.6 2 11.8 2ZM9.4 3.7C10.1 3.7 10.6 4.2 10.6 4.9C10.6 5.5 10.1 6.1 9.4 6.1C8.8 6.1 8.3 5.5 8.3 4.9C8.3 4.2 8.8 3.7 9.4 3.7Z" fill="#3776AB"/>
        <path d="M12.2 22C17.1 22 16.8 19.9 16.8 19.9L16.8 17.7H12V16.6H19C19 16.6 22 16.9 22 12C22 7 19.4 7.3 19.4 7.3H17.7V9.7C17.7 12.5 15.3 12.4 15.3 12.4H10.4C7.7 12.4 7.8 15 7.8 15V19.9C7.8 19.9 7.4 22 12.2 22ZM14.6 20.3C13.9 20.3 13.4 19.8 13.4 19.1C13.4 18.5 13.9 17.9 14.6 17.9C15.2 17.9 15.7 18.5 15.7 19.1C15.7 19.8 15.2 20.3 14.6 20.3Z" fill="#FFD43B"/>
      </svg>
    ),
  },
  {
    name: 'Git & GitHub',
    color: '#F05032',
    svg: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21V19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26V21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 6.48 17.52 2 12 2Z" fill="#F05032"/>
      </svg>
    ),
  },
  {
    name: 'AWS',
    color: '#FF9900',
    svg: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
        <path d="M7 13L5 6H8L9.5 11.5L11 6H14L12 13H7Z" fill="#FF9900"/>
        <path d="M14 13L16 6H19L17 13H14Z" fill="#FF9900"/>
        <path d="M4 17C9 20 15 20 20 16" stroke="#FF9900" strokeWidth="2" strokeLinecap="round"/>
        <path d="M18 15.5L20.5 16.5L19 18.5" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

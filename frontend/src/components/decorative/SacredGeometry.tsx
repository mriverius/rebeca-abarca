interface SacredGeometryProps {
  type: 'seed' | 'metatron' | 'vesica' | 'hexagon' | 'triangle';
  size?: number;
  className?: string;
  color?: string;
}

export default function SacredGeometry({ 
  type, 
  size = 100, 
  className = "",
  color = "#C6A96C"
}: SacredGeometryProps) {
  const renderGeometry = () => {
    switch (type) {
      case 'seed':
        // Seed of Life - 7 circles
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
            <circle cx="50" cy="50" r="15" fill="none" stroke={color} strokeWidth="0.5" opacity="0.6"/>
            <circle cx="50" cy="35" r="15" fill="none" stroke={color} strokeWidth="0.5" opacity="0.6"/>
            <circle cx="63" cy="42.5" r="15" fill="none" stroke={color} strokeWidth="0.5" opacity="0.6"/>
            <circle cx="63" cy="57.5" r="15" fill="none" stroke={color} strokeWidth="0.5" opacity="0.6"/>
            <circle cx="50" cy="65" r="15" fill="none" stroke={color} strokeWidth="0.5" opacity="0.6"/>
            <circle cx="37" cy="57.5" r="15" fill="none" stroke={color} strokeWidth="0.5" opacity="0.6"/>
            <circle cx="37" cy="42.5" r="15" fill="none" stroke={color} strokeWidth="0.5" opacity="0.6"/>
          </svg>
        );
      
      case 'metatron':
        // Metatron's Cube simplified
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
            <circle cx="50" cy="50" r="8" fill="none" stroke={color} strokeWidth="0.5" opacity="0.4"/>
            <circle cx="20" cy="20" r="5" fill="none" stroke={color} strokeWidth="0.5" opacity="0.4"/>
            <circle cx="80" cy="20" r="5" fill="none" stroke={color} strokeWidth="0.5" opacity="0.4"/>
            <circle cx="80" cy="80" r="5" fill="none" stroke={color} strokeWidth="0.5" opacity="0.4"/>
            <circle cx="20" cy="80" r="5" fill="none" stroke={color} strokeWidth="0.5" opacity="0.4"/>
            <circle cx="50" cy="20" r="5" fill="none" stroke={color} strokeWidth="0.5" opacity="0.4"/>
            <circle cx="80" cy="50" r="5" fill="none" stroke={color} strokeWidth="0.5" opacity="0.4"/>
            <circle cx="50" cy="80" r="5" fill="none" stroke={color} strokeWidth="0.5" opacity="0.4"/>
            <circle cx="20" cy="50" r="5" fill="none" stroke={color} strokeWidth="0.5" opacity="0.4"/>
            <line x1="50" y1="50" x2="20" y2="20" stroke={color} strokeWidth="0.3" opacity="0.3"/>
            <line x1="50" y1="50" x2="80" y2="20" stroke={color} strokeWidth="0.3" opacity="0.3"/>
            <line x1="50" y1="50" x2="80" y2="80" stroke={color} strokeWidth="0.3" opacity="0.3"/>
            <line x1="50" y1="50" x2="20" y2="80" stroke={color} strokeWidth="0.3" opacity="0.3"/>
            <line x1="50" y1="50" x2="50" y2="20" stroke={color} strokeWidth="0.3" opacity="0.3"/>
            <line x1="50" y1="50" x2="80" y2="50" stroke={color} strokeWidth="0.3" opacity="0.3"/>
            <line x1="50" y1="50" x2="50" y2="80" stroke={color} strokeWidth="0.3" opacity="0.3"/>
            <line x1="50" y1="50" x2="20" y2="50" stroke={color} strokeWidth="0.3" opacity="0.3"/>
          </svg>
        );
      
      case 'vesica':
        // Vesica Piscis
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
            <circle cx="40" cy="50" r="25" fill="none" stroke={color} strokeWidth="0.5" opacity="0.5"/>
            <circle cx="60" cy="50" r="25" fill="none" stroke={color} strokeWidth="0.5" opacity="0.5"/>
          </svg>
        );
      
      case 'hexagon':
        // Hexagon
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
            <polygon 
              points="50,15 85,32.5 85,67.5 50,85 15,67.5 15,32.5" 
              fill="none" 
              stroke={color} 
              strokeWidth="0.5" 
              opacity="0.5"
            />
            <polygon 
              points="50,25 75,37.5 75,62.5 50,75 25,62.5 25,37.5" 
              fill="none" 
              stroke={color} 
              strokeWidth="0.3" 
              opacity="0.3"
            />
          </svg>
        );
      
      case 'triangle':
        // Sacred Triangle
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
            <polygon 
              points="50,20 90,80 10,80" 
              fill="none" 
              stroke={color} 
              strokeWidth="0.5" 
              opacity="0.5"
            />
            <circle cx="50" cy="50" r="15" fill="none" stroke={color} strokeWidth="0.3" opacity="0.3"/>
          </svg>
        );
      
      default:
        return null;
    }
  };

  return renderGeometry();
}

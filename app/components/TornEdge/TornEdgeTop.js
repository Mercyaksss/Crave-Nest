import './TornEdge.scss';

export default function TornEdge({ color = "#f7f5f0" }) {
  return (
    <div className="torn-edge" aria-hidden="true">
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="torn-paper-texture" x="-10%" y="-20%" width="120%" height="150%">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.08 0.03" 
              numOctaves="4" 
              result="noise" 
            />
            <feDisplacementMap 
              in="SourceGraphic" 
              in2="noise" 
              scale="12" 
              xChannelSelector="R" 
              yChannelSelector="G" 
            />
          </filter>
        </defs>

        <path
          fill={color}
          filter="url(#torn-paper-texture)"
          d="
            M -10,-10
            L -10,65
            C 80,62 140,28 220,32
            C 290,36 340,82 430,78
            C 510,74 580,38 660,35
            C 750,32 800,88 890,82
            C 970,76 1040,18 1120,22
            C 1170,25 1200,50 1210,55
            L 1210,-10
            Z
          "
        />

        <g fill={color} filter="url(#torn-paper-texture)">
          <circle cx="210" cy="48" r="2.5" />
          <circle cx="218" cy="54" r="1.5" />
          <circle cx="445" cy="92" r="3" />
          <circle cx="452" cy="96" r="1.8" />
          <circle cx="670" cy="48" r="2" />
          <circle cx="905" cy="95" r="2.2" />
          <circle cx="912" cy="101" r="1.2" />
        </g>
      </svg>
    </div>
  );
}
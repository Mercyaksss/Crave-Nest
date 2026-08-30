import './TornEdge.scss'

export default function TornEdge({ color = "var(--background-primary)" }) {
  return (
    <div className="torn-edge" aria-hidden="true">
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="torn-paper-texture" x="-10%" y="-20%" width="120%" height="150%" colorInterpolationFilters="sRGB">
            {/* Generate pure noise for coordinate mapping only */}
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.08 0.03" 
              numOctaves="4" 
              result="noiseMap" 
            />
            {/* Displace geometry using red/green vectors from noise */}
            <feDisplacementMap 
              in="SourceGraphic" 
              in2="noiseMap" 
              scale="12" 
              xChannelSelector="R" 
              yChannelSelector="G" 
              result="displacedPath"
            />
            {/* Re-apply exact fill color from SourceGraphic onto displaced geometry */}
            <feComposite 
              in="SourceGraphic" 
              in2="displacedPath" 
              operator="in" 
            />
          </filter>
        </defs>

        <path
          fill={color}
          filter="url(#torn-paper-texture)"
          d="M0.0 54.1 L4.6 55.3 L6.2 54.9 L44.4 57.1 Q51.8 58.8 52.4 55.7 L55.3 57.0 L58.8 57.3 L99.7 47.4 L105.2 57.3 L138.8 54.4 L146.5 54.1 L155.9 55.4 L169.6 55.2 L182.4 54.2 L186.9 55.7 L187.9 47.6 L194.8 55.9 L206.4 56.8 L210.5 55.3 L219.5 53.9 L256.7 55.3 L305.5 55.4 Q329.6 58.6 352.8 55.2 L370.2 55.6 L377.7 53.4 L380.4 53.9 L381.9 57.2 L393.6 55.0 L401.9 56.6 Q410.7 59.2 415.4 48.0 L420.1 48.0 L454.8 56.7 L462.3 47.1 L467.7 53.3 Q481.0 57.7 494.6 56.6 Q501.4 61.2 504.9 54.5 L508.6 57.5 L509.4 54.4 L556.7 56.7 L569.0 57.3 L616.2 55.3 L625.5 53.3 L671.8 56.9 Q695.2 57.6 716.3 53.5 L765.1 53.6 L799.8 53.5 L815.9 56.4 L823.2 53.9 L857.9 47.9 L907.1 47.2 L951.1 56.7 L961.5 57.7 L996.3 57.6 L1002.7 47.7 L1006.9 55.6 L1051.2 49.3 L1067.7 54.2 L1104.0 53.9 L1153.8 48.1 Q1158.8 59.9 1167.6 53.9 L1172.5 51.4 Q1191.3 60.6 1211.0 57.5 L1255.2 48.2 L1269.2 57.7 L1274.1 58.7 L1278.8 54.2 L1286.8 57.2 L1289.6 58.3 L1298.9 53.7 L1303.2 55.8 L1340.0 47.1 L1389.6 55.2 Q1411.9 55.5 1430.7 55.5 L1440.0 48.0 L1440.0 0.0 L0.0 0.0 Z"
        />
      </svg>
    </div>
  );
}
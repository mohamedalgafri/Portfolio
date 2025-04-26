// src/React/VariableProximityWrapper.tsx
"use client"; 

import VariableProximity from "@/blocks/VariableProximity";
import { useRef } from "react";

interface VariableProximityWrapperProps {
  label: string;
  className?: string;
}

const VariableProximityWrapper: React.FC<VariableProximityWrapperProps> = ({ label, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} style={{ position: 'relative' }}>
      <VariableProximity
        label={label}
        className={className}
        fromFontVariationSettings="'wght' 400, 'opsz' 9"
        toFontVariationSettings="'wght' 1000, 'opsz' 40"
        containerRef={containerRef}
        radius={100}
        falloff="linear"
      />
    </div>
  );
};

export default VariableProximityWrapper;

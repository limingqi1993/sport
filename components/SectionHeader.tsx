import React from 'react';

interface Props {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionHeader: React.FC<Props> = ({ title, subtitle, className = "" }) => {
  return (
    <div className={`mb-8 border-l-4 border-brand-accent pl-4 ${className}`}>
      <h2 className="text-3xl font-display font-bold uppercase tracking-wider text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="text-brand-accent mt-1 text-sm font-semibold tracking-wide uppercase">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
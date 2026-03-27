interface SectionLabelProps {
  label: string;
}

export default function SectionLabel({ label }: SectionLabelProps) {
  return (
    <div className="mb-8">
      <p className="font-sans text-xs tracking-widest uppercase font-light text-gray-400 mb-4">
        {label}
      </p>
      <div className="border-t border-gray-200" />
    </div>
  );
}

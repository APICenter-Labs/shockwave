import './docs.scss';

export const SHOCKWAVE_COLOR_TOKENS = [
  {
    name: '$primary',
    value: '#16325B',
    description: 'Core brand color used for emphasis, headings, and primary actions.',
  },
  {
    name: '$secondary',
    value: '#00879E',
    description: 'Support color for secondary actions, accents, and supporting interface moments.',
  },
  {
    name: '$accent',
    value: '#FFAB5B',
    description: 'Warm highlight used for calls to action, contrast moments, and visual energy.',
  },
  {
    name: '$light',
    value: '#FFF2DB',
    description: 'Soft surface color used for the main page background and warm canvas areas.',
  },
  {
    name: '$text-primary',
    value: '#16325B',
    description: 'Primary text token for high-priority copy and headings.',
  },
  {
    name: '$text-secondary',
    value: '#00879E',
    description: 'Secondary text token for supportive or lower-emphasis content.',
  },
];

export function DocsPage({ children }) {
  return <div className="shockwave-docs">{children}</div>;
}

export function PageHero({ section, title, lead, children }) {
  return (
    <section className="shockwave-docs__hero">
      {section ? <p className="shockwave-docs__eyebrow">{section}</p> : null}
      <h1 className="shockwave-docs__title">{title}</h1>
      {lead ? <p className="shockwave-docs__lead">{lead}</p> : null}
      {children ? <div className="shockwave-docs__hero-body">{children}</div> : null}
    </section>
  );
}

export function CardGrid({ children, columns = 2 }) {
  const gridClass = columns === 3 ? 'shockwave-docs__grid shockwave-docs__grid--3' : 'shockwave-docs__grid';

  return <div className={gridClass}>{children}</div>;
}

export function Card({ title, eyebrow, children }) {
  return (
    <section className="shockwave-docs__card">
      {eyebrow ? <p className="shockwave-docs__card-eyebrow">{eyebrow}</p> : null}
      <h3>{title}</h3>
      <div>{children}</div>
    </section>
  );
}

export function Note({ title = 'Note', tone = 'info', children }) {
  const noteClass = `shockwave-docs__note shockwave-docs__note--${tone}`;

  return (
    <aside className={noteClass}>
      <strong>{title}</strong>
      <div>{children}</div>
    </aside>
  );
}

export function TokenGrid({ items }) {
  return (
    <div className="shockwave-docs__token-grid">
      {items.map((item) => (
        <section className="shockwave-docs__token" key={item.name}>
          <div
            aria-hidden="true"
            className="shockwave-docs__swatch"
            style={{ backgroundColor: item.value }}
          />
          <div className="shockwave-docs__token-content">
            <p className="shockwave-docs__card-eyebrow">{item.name}</p>
            <h3>{item.value}</h3>
            <p>{item.description}</p>
          </div>
        </section>
      ))}
    </div>
  );
}

import './Button.css';

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  variant,
  backgroundColor = null,
  size = 'medium',
  label,
  children,
  ...props
}) => {
  const isPrimary = variant ? variant === 'primary' : primary;
  const mode = isPrimary ? 'storybook-button--primary' : 'storybook-button--secondary';
  const content = label ?? children;

  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {content}
    </button>
  );
};

import './Button.scss';

/** Primary UI component for user interaction */
export const Button = ({
  primary = true,
  variant,
  backgroundColor = null,
  size = 'medium',
  label,
  children,
  ...props
}) => {
  const finalVariant = variant || (primary ? 'primary' : 'secondary');

  return (
    <button
      type="button"
      className={[
        'storybook-button',
        `storybook-button--${size}`,
        `storybook-button--${finalVariant}`,
      ].join(' ')}
      style={backgroundColor ? { backgroundColor } : undefined}
      {...props}
    >
      {label ?? children}
    </button>
  );
};
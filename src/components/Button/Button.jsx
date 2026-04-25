import './Button.scss';

/** Primary UI component for user interaction */
export const Button = ({
  primary = true,
  variant,
  size = 'medium',
  label,
  disabled,
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
        `${disabled ? 'storybook-button-disabled' : ''}`
      ].join(' ')}
      {...props}
    >
      {label ?? children}
    </button>
  );
};
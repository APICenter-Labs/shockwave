import './Button.scss';

/** Primary UI component for user interaction */
export const Button = ({
  variant = 'primary',
  size = 'medium',
  label = "Button",
  disabled = false,
  children,
  ...props
}) => {

  return (
    <button
      type="button"
      className={[
        'storybook-button',
        `storybook-button--${size}`,
        `storybook-button--${variant}`,
        `${disabled ? 'storybook-button-disabled' : ''}`
      ].join(' ')}
      {...props}
    >
      {label ?? children}
    </button>
  );
};
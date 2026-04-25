import './Link.scss';

/** Link UI component for user interaction */
export const Link = ({
  size = 'medium',
  label = "Link",
  color = null,
  disabled,
  children,
  ...props
}) => {
  return (
    <a
      href=''
      className={[
        'storybook-link',
        `storybook-link--${size}`,
        `${disabled ? 'storybook-link-disabled' : ''}`
      ].join(' ')}
      style={color ? { color } : undefined}
      {...props}
    >
      {label ?? children}
      <div style={color ? { backgroundColor: color } : undefined} className='storybook-link-div'></div>
    </a>
  );
};

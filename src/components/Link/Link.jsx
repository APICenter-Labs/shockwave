import './Link.scss';

/** Link UI component for user interaction */
export const Link = ({
  size = 'medium',
  label = "Link",
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
      {...props}
    >
      {label ?? children}
      <div className='storybook-link-div'></div>
    </a>
  );
};

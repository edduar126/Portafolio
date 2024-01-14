import clsx from 'clsx'

export function Avatar({ alt, src, size = 'sm' }) {
  return (
    <picture className={clsx(
      {
        'h-12 w-12': size === 'sm',
        'h-16 w-16': size === 'md',
        'h-20 w-20': size === 'lg',
        'h-24 w-24': size === 'xl',
        'h-40 w-40': size === '2xl',
      }
    )}>
      <img
        alt={alt}
        src={src}
        className='rounded-full overflow-hidden shadow object-center'
      />
    </picture>
  )
}

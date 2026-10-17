import clsx from 'clsx';

export default function LogoSquare({ size }: { size?: 'sm' | undefined }) {
  return (
    <div
      aria-hidden="true"
      className={clsx(
        'flex flex-none items-center justify-center border border-neutral-950 bg-neutral-950 text-white dark:border-white dark:bg-white dark:text-black',
        {
          'h-[40px] w-[40px] rounded-xl': !size,
          'h-[30px] w-[30px] rounded-lg': size === 'sm'
        }
      )}
    >
      <span
        className={clsx('font-black leading-none tracking-[-0.08em]', {
          'text-[10px]': !size,
          'text-[8px]': size === 'sm'
        })}
      >
        STL
      </span>
    </div>
  );
}

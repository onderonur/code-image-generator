import { APP_TITLE } from '@/core/core.utils';

export function Hero() {
  return (
    <div className="px-2 pb-6 text-center md:pb-12">
      <h1 className="bg-gradient-to-r from-secondary-500 to-secondary-100 bg-clip-text text-3xl font-black text-transparent md:text-5xl md:leading-tight">
        {APP_TITLE}
      </h1>
      <p className="text-xl text-text-400 md:text-2xl">
        Create code images with ease
      </p>
    </div>
  );
}

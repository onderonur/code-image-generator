import { APP_TITLE } from '@/common/common-utils';

export default function Hero() {
  return (
    <div className="text-center pb-6 px-2 md:pb-12">
      <h1 className="text-3xl md:text-5xl md:leading-tight font-black bg-clip-text text-transparent bg-gradient-to-r from-secondary-500 to-secondary-100">
        {APP_TITLE}
      </h1>
      <p className="text-xl md:text-2xl text-text-200">
        Create code images with ease
      </p>
    </div>
  );
}

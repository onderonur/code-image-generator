type LogoProps = {
  className?: string;
};

export function Logo(props: LogoProps) {
  return (
    <svg
      {...props}
      width="300"
      height="300"
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="150" cy="150" r="150" fill="#0F172A" />
      <path
        d="M210 151C210 184.137 183.137 211 150 211C116.863 211 90 184.137 90 151C90 117.863 116.863 91 150 91C183.137 91 210 117.863 210 151Z"
        fill="white"
      />
      <path
        d="M148.75 204.771C163.594 204.771 176.213 199.65 186.607 189.41C196.994 179.161 202.188 166.719 202.188 152.083C202.188 137.448 196.994 125.006 186.607 114.757C176.213 104.516 163.594 99.3958 148.75 99.3958C133.906 99.3958 121.287 104.516 110.893 114.757C100.506 125.006 95.3125 137.448 95.3125 152.083C95.3125 166.719 100.506 179.161 110.893 189.41C121.287 199.65 133.906 204.771 148.75 204.771ZM148.75 193.062L135.687 164.962L107.188 152.083L135.687 139.204L148.75 111.104L161.812 139.204L190.312 152.083L161.812 164.962L148.75 193.062ZM53.75 245.75C47.2188 245.75 41.6296 243.459 36.9825 238.877C32.3275 234.288 30 228.773 30 222.333V81.8333C30 75.3937 32.3275 69.883 36.9825 65.3012C41.6296 60.7115 47.2188 58.4167 53.75 58.4167H91.1562L113.125 35H184.375L206.344 58.4167H243.75C250.281 58.4167 255.874 60.7115 260.529 65.3012C265.176 69.883 267.5 75.3937 267.5 81.8333V222.333C267.5 228.773 265.176 234.288 260.529 238.877C255.874 243.459 250.281 245.75 243.75 245.75H53.75Z"
        fill="white"
      />
      <path
        d="M116.667 201L66.6667 151L116.667 101L128.542 112.875L90.2083 151.208L128.333 189.333L116.667 201ZM183.333 201L171.458 189.125L209.792 150.792L171.667 112.667L183.333 101L233.333 151L183.333 201Z"
        fill="#0F172A"
      />
    </svg>
  );
}
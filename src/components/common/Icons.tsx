import * as React from 'react';

function getIcon(name: string) {
  switch (name) {
    case 'hamburger':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 32 32">
          <g id="surface1">
            <path d="M 4 7 L 4 9 L 28 9 L 28 7 Z M 4 15 L 4 17 L 28 17 L 28 15 Z M 4 23 L 4 25 L 28 25 L 28 23 Z " />
          </g>
        </svg>
      );

    case 'back':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="35"
          height="35"
          viewBox="0 0 50 50"
          fill="#ffffff"
        >
          <g id="surface1">
            <path d="M 34.960938 2.980469 C 34.441406 2.996094 33.949219 3.214844 33.585938 3.585938 L 13.585938 23.585938 C 12.804688 24.367188 12.804688 25.632813 13.585938 26.414063 L 33.585938 46.414063 C 34.085938 46.9375 34.832031 47.148438 35.535156 46.964844 C 36.234375 46.78125 36.78125 46.234375 36.964844 45.535156 C 37.148438 44.832031 36.9375 44.085938 36.414063 43.585938 L 17.828125 25 L 36.414063 6.414063 C 37.003906 5.839844 37.183594 4.960938 36.863281 4.199219 C 36.539063 3.441406 35.785156 2.957031 34.960938 2.980469 Z " />
          </g>
        </svg>
      );

    default:
      return null;
  }
}

interface IconsProps {
  name: string;
  className?: string;
  inline?: boolean;
}

const Icons = (props: IconsProps) => {
  const icon = getIcon(props.name);

  return props.inline ? <span className={props.className}>{icon}</span> : <div className={props.className}>{icon}</div>;
};

export default Icons;

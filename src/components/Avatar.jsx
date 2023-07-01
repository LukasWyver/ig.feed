/* eslint-disable react/prop-types */
export function Avatar(props) {
  return (
    <img
      src={props.imgUrl}
      alt="avatar profile image"
      className={`rounded-lg ${props.hasBorder ? 'h-16 w-16' : 'h-12 w-12'} ${props.hasBorder && 'border-4 border-white dark:border-gray-800 outline outline-2 outline-success-500'}`}
    />
  );
}

/* eslint-disable react/prop-types */
export function Avatar(props) {
  return (
    <img
      src={props.imgUrl}
      alt="avatar profile image"
      className="rounded-lg h-[60px] border-4 border-white/40 dark:border-gray-800/40 outline outline-2 outline-success-500"
    />
  );
}

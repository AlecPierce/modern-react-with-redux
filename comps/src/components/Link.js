import useNavigation from "../hooks/use-navigation";
import classNames from "classnames";

function Link({ path, children, className, activeClassName }) {
  const { navigate, currentPath } = useNavigation();
  // const classes = classNames(
  //   "text-amber-600",
  //   "bg-orange-100",
  //   "w-auto",
  //   "rounded-md",
  //   "hover:bg-amber-500",
  //   "text-2xl",
  //   "border-4",
  //   "border-orange-200",
  //   "text-center"
  // );

  const classes = classNames(
    "text-blue-500",
    className,
    currentPath === path && activeClassName
  );

  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    navigate(path);
  };

  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  return (
    <a className={classes} href={path} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;

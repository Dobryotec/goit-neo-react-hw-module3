import css from './Container.module.css';

interface IContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<IContainerProps> = ({ children }) => {
  return <div className={css.container}>{children}</div>;
};

export default Container;

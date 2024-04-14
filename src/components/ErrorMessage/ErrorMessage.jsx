import css from './ErrorMessage.module.css';

const ErrorMessage = () => {
    return (
        <div className={css.errorSection}>
        <p className={css.errorMessage}>Oooops, something went wrong!</p>
        </div>
    );
};

export default ErrorMessage;
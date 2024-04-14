import css from './ErrorMessage.module.css';

const ErrorMessage = () => {
    return (
        <div className={css.errorDiv}>
        <p className={css.errorMsg}>Oooops, something went wrong!</p>
        </div>
    );
};

export default ErrorMessage;
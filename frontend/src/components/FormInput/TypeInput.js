import styles from './FormInput.module.scss';

function TypeInput({ type, setType, className }) {
    return (
        <select
            className={`${styles.formInputOptions} ${className || ''}`}

            value={type}
            onChange={(e) => setType(e.target.value)}
            // required
        >
            <option>All expense & income</option>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
        </select>
    );
}

export default TypeInput;
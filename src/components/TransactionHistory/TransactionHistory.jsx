import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ transactions }) => {
    return (
        <table className={styles.transactionHistory}>
            <thead>
                <tr>
                    <th className={styles.header}>Type</th>
                    <th className={styles.header}>Amount</th>
                    <th className={styles.header}>Currency</th>
                </tr>
            </thead>
            <tbody> 
                {transactions.map(({ id, type, amount, currency }) => (
                    <tr key={id} className={styles.row}>
                        <td className={styles.cell}>{type}</td>
                        <td className={styles.cell}>{amount}</td>
                        <td className={styles.cell}>{currency}</td>
                    </tr>
                ))}     
            </tbody>
        </table>
    );
}

export default TransactionHistory;

import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
    return (
        <ul className={styles.friendList}>
            {friends.map(({ id, avatar, name, isOnline }) => (
                <li key={id} className={styles.item}>
                    <img className={styles.avatar} src={avatar} alt={name} width="48" height="48" />
                    <p className={styles.name}>{name}</p>
                    <p className={isOnline ? styles.online : styles.offline}>
                    {isOnline ? "Online" : "Offline"} 
                    </p>
                </li>
            ))}
        </ul>
    );
}

export default FriendList;
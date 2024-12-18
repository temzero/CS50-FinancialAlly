import styles from './DeleteForm.module.scss';
import { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteWallet, setOverlay } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';
import { HiOutlineArrowRight } from "react-icons/hi";
import { IoWallet } from "react-icons/io5";
import trashIcon from '../../assets/images/opentrashcan.png';
import useClickOutside from '../ClickOutside/useClickOutside';


function DeleteWalletForm({ showForm, setShowForm, wallet }) {
    const walletId = wallet?._id;
    const name = wallet?.name || '';
    const color = wallet?.color || '';
    const formRef = useRef(null)

    useEffect(() => {dispatch(setOverlay(true))}, [])
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const closeForm = () => {
        setShowForm(false);
        dispatch(setOverlay(false))
    }

    const handleDeleteWallet = (e) => {
        e.preventDefault();
        dispatch(deleteWallet(walletId));
        closeForm()
        navigate('/wallet');
    };

    useClickOutside( formRef, () => closeForm());

    return (
        showForm && (
            <div className={styles.formOverlay}>
                <div className={styles.formContainer} ref={formRef}>
                    <div className={styles.formTitle}>
                        Do you want to delete this wallet?
                    </div>

                    <div className={styles.formBody}>
                        <div className={`${styles.formIconContainer} ${styles[color]}`}>
                            <div className={styles.formIcon}>
                                <IoWallet className={styles.walletIcon}/>
                            </div>
                            <div className={styles.formName}>{name}</div>
                        </div>
                        <HiOutlineArrowRight className={styles.formArrow}/>
                        <img 
                            src={trashIcon} 
                            alt="Trash Can Icon" 
                            className={styles.trashIcon} 
                        />
                    </div>
                    <div className={styles.formDeleteButtons}>
                        <div className={styles.deleteButton}>
                            <span onClick={handleDeleteWallet}>Delete</span>
                        </div>
                        <div className={styles.cancelButton}>
                            <span onClick={closeForm}>Cancel</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
}

export default DeleteWalletForm;

import styles from './Feedbacks.module.scss';
import { useContext, useState } from 'react';
import { Feedback } from '../Feedback/Feedback';
import { ThemeContext } from '../../utils/ThemeContext';

function Feedbacks() {
    const [feedbacks, setFeedbacks] = useState(JSON.parse(localStorage.getItem('feedbacks')) || []);
    const onSubmitHandler = (evt) => {
        evt.preventDefault();
        // const name = evt.target.elements.name.value;
        // const value = evt.target.elements.name.value;
        const data = new FormData(evt.target);
        const name = data.get("name");
        const feedback = data.get("feedback");
        const updatedFeedbacks = [...feedbacks, { name, feedback }];
        setFeedbacks(updatedFeedbacks);
        localStorage.setItem('feedbacks', JSON.stringify(updatedFeedbacks));
        evt.target.elements.name.value = '';
        evt.target.elements.feedback.value = '';
    }

    const theme = useContext(ThemeContext);

    return (
        <div className={`${styles.wrapper} ${styles[theme]}`}>
            theme: {theme}
            <h2 style={{ textAlign: 'center' }}>Feedbacks</h2>
            <div style={{
                width: "250px",
                display: "flex",
                margin: "auto",
                flexDirection: 'column',
            }}>
                <form className={styles.addFeedbackForm} onSubmit={onSubmitHandler}>
                    <div>
                        <div>Your name:</div>
                        <input name="name" placeholder="your name" />
                    </div>
                    <div>
                        <div>Feedback:</div>
                        <input name="feedback" placeholder="feedback" />
                    </div>
                    <button type="submit">Add</button>
                </form>
            </div>
            {feedbacks.map((item, idx) => {
                const { name, feedback } = item;
                return <div key={idx}>
                    <Feedback name={name} feedback={feedback} />
                </div>
            })}
        </div>
    );
}

export default Feedbacks;

import classes from "./NewPost.module.css";

export function NewPost({ onAuthorChange, onBodyChange, onCancel }) {
    return (
        <form className={classes.form}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={onBodyChange} />
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required onChange={onAuthorChange} />
            </p>

            <p className={classes.actions}>
                <button type="button" onClick={onCancel}>
                    Cancel
                </button>
                <button>Submit</button>
            </p>
        </form>
    );
}

export default NewPost;

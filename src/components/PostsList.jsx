import Post from "./Post.jsx";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost.jsx";
import { useState } from "react";
import Modal from "./Modal.jsx";

export function PostsList({ isPosting, onStopPosting }) {
    const [enterBody, setEnterBody] = useState("");
    const [enterAuthor, setEnterAuthor] = useState("");

    function bodyChangeHandler(e) {
        setEnterBody(e.target.value);
    }

    function authorChangeHandler(e) {
        setEnterAuthor(e.target.value);
    }

    return (
        <>
            {isPosting && (
                <Modal onClose={onStopPosting}>
                    <NewPost
                        onAuthorChange={authorChangeHandler}
                        onBodyChange={bodyChangeHandler}
                        onCancel={onStopPosting}
                    />
                </Modal>
            )}

            <ul>
                <li className={classes.posts}>
                    <Post author={enterAuthor} body={enterBody} />
                    <Post author="alam" body="you will find new post" />
                </li>
            </ul>
        </>
    );
}

export default PostsList;

CREATE TABLE users (
    user_id INT AUTO_INCREMENT,
    username VARCHAR(10) NOT NULL,
    PRIMARY KEY (user_id)
);

CREATE TABLE conversations (
    convo_id    INT AUTO_INCREMENT,
    convo_name  VARCHAR(30) NOT NULL DEFAULT 'Chat',
    created_on  TIMESTAMP NOT NULL DEFAULT NOW(),
    PRIMARY KEY (convo_id)
);

CREATE TABLE user_conversation (
    user_id     INT,
    convo_id    INT,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (convo_id) REFERENCES conversations(convo_id),
    PRIMARY KEY (user_id, convo_id)
);

CREATE TABLE messages (
    message_id  INT AUTO_INCREMENT,
    convo_id    INT,
    user_id     INT,
    sent_time   TIMESTAMP NOT NULL DEFAULT NOW(),
    PRIMARY KEY (message_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (convo_id) REFERENCES conversations(convo_id)
);
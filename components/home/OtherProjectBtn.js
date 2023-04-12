import React from "react";
import styles from './OtherProjectBtn.module.css'

const OtherProjectBtn = React.forwardRef(({ onClick, href }, ref) => {
    return (
        <a href={href} onClick={onClick} ref={ref} className={styles.otherProject}
            target="_blank"
            rel="noreferrer">
            Other Projects
        </a>
    )
})

OtherProjectBtn.displayName = 'OtherProjectBtn';

export default OtherProjectBtn;
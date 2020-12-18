import React from 'react'; 
import styles from '../custom.module.css';
  
function About () { 
    return <div> 
        <h2 className={styles.bigblue}>GeeksforGeeks is a computer science portal for geeks!</h2> 
  
        Read more about us at :  
        <a href="https://www.geeksforgeeks.org/about/"> 
            https://www.geeksforgeeks.org/about/ 
        </a> 
    </div> 
} 
export default About;
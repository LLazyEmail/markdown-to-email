const React = require('react');

const styles = require('./styles');

const Image = (props) => {
    return (
        <p dir="ltr" style={styles.ltr}>
        <span style={styles.spanFont}>
          <span style={styles.spanSize}>
            <a href={props.href} target="_blank" style={styles.link}>
              <img data-file-id={1041068} src={props.src} style={styles.img} alt={props.alt} />
            </a>
          </span>
        </span>
        </p>
    );
}

module.exports = Image;

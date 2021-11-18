
/** @jsxImportSource @emotion/react */

const styles = {
  header: {
    textAlign:'center',
    color : '#000000',
    height: '60px',
    backgroundColor: '#496899',
    flexShrink: 0,
  },
}

export default function Header() {
  return (
    <header css={styles.header}>
      <h4>Chat Application</h4>
    </header>
  );
}

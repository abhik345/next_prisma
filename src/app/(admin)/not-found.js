import Link from 'next/link';

export default function AdminNotFound() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - Page Not Found</h1>
      <p style={styles.message}>
        {`Oops! The page you're looking for in the Admin dashboard does not exist.`}
      </p>
      <Link href="/dashboard">
        <a style={styles.link}>Go back to Dashboard</a>
      </Link>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    backgroundColor: '#f4f4f4',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#333',
  },
  message: {
    fontSize: '1.2rem',
    margin: '1rem 0',
    color: '#555',
  },
  link: {
    fontSize: '1rem',
    color: '#0070f3',
    textDecoration: 'none',
    border: '1px solid #0070f3',
    borderRadius: '5px',
    padding: '0.5rem 1rem',
    transition: 'background-color 0.2s ease',
  },
};

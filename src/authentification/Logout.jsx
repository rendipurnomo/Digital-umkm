
import { useLogout } from '../services/useLogout';

function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <button disabled={isLoading} onClick={logout} className='btn'>
      {!isLoading ? (
        <span className='d-flex align-items-center gap-2'>
          <i className="ri-logout-circle-line"></i> Logout
        </span>
      ) : (
        'Loading...'
      )}
    </button>
  );
}

export default Logout;





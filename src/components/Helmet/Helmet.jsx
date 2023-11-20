
const Helmet = ({title,children}) => {
  document.title = "Digital UMKM - " + title;
  return ( <div className="w-100">{children}</div>
  )
};

export default Helmet;

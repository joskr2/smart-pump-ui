
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-200 text-center text-gray-600 p-4 mt-auto">
      <div className="container mx-auto">
        © {currentYear} SMART Pump Inc. Todos los derechos reservados.
      </div>
    </footer>
  );
};
export default Footer;

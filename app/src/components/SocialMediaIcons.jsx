const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-5 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com/dopedclubagency"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src="../assets/facebook.png" className="w-10"/>
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/Dopedclub"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src="../assets/instagram.png" className="w-10"/>
      </a>
    </div>
  );
};

export default SocialMediaIcons;

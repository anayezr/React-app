import cowgirl from "/cowgirl.jpg";
import './About.css'


function PersonalInfo(){
    

    return (
        <div className="personal-info-container">
            <img src={cowgirl} alt="its me" className="personal-info-photo" />
          <div className="personal-info-info">
            <h1 className="personal-info-name">Anaye Zayas</h1>
            <p className="personal-info-email">anayelli.zayasr@gmail.com</p>
            <p className="personal-info-description">Girl who aspires to be a cowgirl, who loves cows and the moon, who believes in Astrology and has always been sure that aliens exist.</p>
          </div>
        </div>
      );
    
}
export default PersonalInfo;
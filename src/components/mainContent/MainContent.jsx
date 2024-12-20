import { Link } from 'react-router-dom';
import HobbiesTabs from '../hobbiesTabs/HobbiesTabs';
import Card from '../card/Card';
import milestones from '../../data/milestones';
import myPhoto from '../../img/my_photo.jpg';
import './MainContent.css';

const MainContent = () => {
  //words for random highlighted
  const words = ["Tereza", "developer", "React"]; 
  const randomWord = words[Math.floor(Math.random() * words.length)];

  return (
    <div>
      
      {/* <!-- Section Introduction -->  */}  
      <section id="introduction">
        <img src={myPhoto} className="my-photo" alt="moje fotka"></img>      
        <p className="introduction">Jmenuji se <span style={{ color: randomWord === "Tereza" ? "red" : undefined }}>Tereza</span>. Mou profesí je Apex <span style={{ color: randomWord === "developer" ? "red" : undefined }}>developer</span> - vyvíjím webové aplikace v&nbsp;technologii Oracle Apex a&nbsp;PL/SQL. Tuto stránku jsem vytvořila jako závěrečný projekt kurzu na javascriptovou knihovnu <span style={{ color: randomWord === "React" ? "red" : undefined }}>React</span>. Na jaře jsem si dala za cíl vytvořit svůj osobní web a tento projekt mi přišel vhod jako dobrá příležitost zabít dvě mouchy jednou ranou.</p>
      </section>

      {/* <!-- Section Milestones Cards - Static component´s -->  */}
      <section id="personalmilestones">
        <h3>Moje cesta k programování</h3>
        <div className="personal-milestones">
          {milestones.map((oneMilestone) => {
            const { id, title, tags, text, image } = oneMilestone;
            return (
              <Card
                key={id}          
                title={title}
                tags={tags}
                text={text}
                image={image}
              />
            )
          })}        
        </div>      
      </section>

      {/* <!-- Section My hobbies -->  */}
      <section id="hobbies">
        <HobbiesTabs />
      </section>

      {/* <!-- Section Link to Api page Dictionary-->  */}    
      <section id="dictionary">
        <h3>Výkladový slovník</h3>
        <p><Link to="/dictionary" className="custom-link">Přesměrování</Link> na druhou stránku webu, která využívá API pro nalezení významu anglických slov. Zdrojem je <a href="https://dictionaryapi.dev/" target="_blank" className="custom-link">dictionaryapi.dev</a>.</p>
      </section>

    </div>
  )
}

export default MainContent
import './LangBar.scss';

export default function LangBar(){
    return (

    <div className="langBar">
        <img src={require('../../assets/espana.png')} alt="españa" className='langBar__img'></img>
        <img src={require('../../assets/united-kingdom.png')} alt="uk" className='langBar__img'></img>            
    </div>
    )
};

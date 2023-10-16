import '../Header.css'



const Header = () => {
  return (
    <div className='header'>
        <img 
            className="header__logo" src=""
            />

            <div 
            className="header__search">
                <input className="header__searchInput" type="text"/>
                { /*Logo*/ }


            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionOne">Hello Guest</span>
                    <span className="header__optionTwo">Sign In</span>
                    
                </div>

                <div className="header__option">
                <span className="header__optionOne">Returns</span>
                <span className="header__optionTwo">Orders</span>

                </div>

                <div className="header__option">
                    <span className="header__optionOnLineOne">Your</span>
                    <span className="header__optionOnLinetwo">Prime</span>


                </div>

                

                </div>

            </div>

    
  )
}







export default Header
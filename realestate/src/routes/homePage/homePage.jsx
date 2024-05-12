import SearchBar from '../../components/searchBar/SearchBar';
import './homePage.scss'

function HomePage(){
    return(
        <div className="homePage">
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className="title">Find Real Estate & Get Your Dream Place!!!</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit maiores reprehenderit labore magni mollitia voluptates rerum cumque fuga rem neque magnam molestias soluta, aut vero animi dus, voluptas distinctio illo eligendi fugiat voluptatibus, eius cupiditate?
                    </p>
                    <SearchBar/>
                </div> 
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt="" />
            </div>



        </div>
    )

}
export default HomePage; 